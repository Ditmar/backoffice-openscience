import type { DisplayType } from "./types/types"
import Styles from './styles.module.scss'
import classNames from "classnames";

function Display (props: DisplayType) {
    const { display, variants } = props;
    console.log('display -->', variants);
    const displayClass = classNames( Styles['display'], {
        [Styles['primary']]: variants === 'primary',
        [Styles['secondary']]: variants === 'secondary',
        [Styles['tertiary']]: variants === 'tertiary',
    });
    return (
        <div role="display" className={displayClass}> 
                {display}
        </div>
    )
}

export default Display;