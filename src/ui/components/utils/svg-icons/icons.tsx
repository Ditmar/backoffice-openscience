// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import type { ILoaderIcons, SvgIconProps } from './types/SvgIconProps';
import optimizeSvg from './optimizeSvg';

function getIconByName(name: string): Promise<unknown> {
  return import(`../../../../assets/icons/${name}.svg?raw`);
}
export function Icon(props: SvgIconProps) {
  const { src, size, className, styles, 'data-testid': dataTestId } = props;
  const [iconLoader, setIconLoader] = useState<string>('');
  useEffect(() => {
    if (src.startsWith('<svg')) {
      setIconLoader(src);
    } else {
      getIconByName(src)
        .then((icon: unknown) => {
          const iconRaw = icon as ILoaderIcons;
          setIconLoader(iconRaw.default);
        })
        .catch((error) => {
          throw new Error(`Error loading icon: ${error}`);
        });
    }
    return () => {
      setIconLoader('');
    };
  }, []);

  const optimizedSvg = optimizeSvg(iconLoader, size);
  const spanProps: Record<string, unknown> = {
    dangerouslySetInnerHTML: { __html: optimizedSvg },
    ...(dataTestId && { 'data-testid': dataTestId }),
  };

  if (className) {
    spanProps.className = className;
  }

  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  if (size || styles) {
    spanProps.style = { width: size, height: size, display: 'block', ...styles };
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <span {...spanProps} />;
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
};
