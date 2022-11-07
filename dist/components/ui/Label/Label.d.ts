import { FC } from 'react';
import './label.css';
declare type Size = 'normal' | 'h1' | 'h2' | 'h3';
export interface Props {
    /**
     * This property is to capitalize the entire text
    */
    allCapitalize?: boolean;
    /**
     * This is the background color of the label
    */
    backgroundColor?: string;
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
export declare const Label: FC<Props>;
export {};
