import { FC } from 'react';

import './label.css';

type Size = 'normal' | 'h1' | 'h2' | 'h3';

interface Props {
    /**
     * This property is to capitalize the entire text
    */
    allCapitalize?: boolean;

    /**
     * This is the color of the label
    */
    color?: 'primary' | 'secondary' | 'tertiary';

    /**
     * Custom label color
    */
    fontColor?: string;

    /**
     * This is the size of the label
    */
    size?: Size;

    /**
     * This is the text of the label
    */
    text: string;
}

export const Label: FC<Props> = ({ allCapitalize = false, color = 'primary', fontColor, size = 'normal', text = 'No label' }) => {
    return (
        <span 
            className={ `label ${ size } text-${ color }` }
            style={{ color: fontColor }}
        >
            { (allCapitalize) ? text.toUpperCase() : text }
        </span>
    );
}