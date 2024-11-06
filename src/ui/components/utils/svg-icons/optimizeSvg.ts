// eslint-disable-next-line import/no-extraneous-dependencies
import { optimize } from 'svgo';

function optimizeSvg(svg: string, size = '24px') {
  if (svg === '') {
    return '';
  }
  const result = optimize(svg, {
    plugins: [
      {
        name: 'removeDimensions',
      },
      {
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [
            {
              viewBox: `0 0 ${size.replace('px', '')} ${size.replace('px', '')}`,
            },
          ],
        },
      },
    ],
  });
  return result.data;
}

export default optimizeSvg;
