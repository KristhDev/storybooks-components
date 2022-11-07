/// <reference types="react" />
import './button.css';
export interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export declare const Button: ({ primary, size, backgroundColor, label, ...props }: ButtonProps) => JSX.Element;
