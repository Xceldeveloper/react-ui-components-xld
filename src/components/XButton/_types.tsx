
import  { CSSProperties, HTMLAttributes } from 'react';

export  interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    
    size?: 'small' | 'medium' | 'large';
  
    /**
     * Border radius
     */
     borderRadius?: string ,
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    /**
     *  button type
     */
     variant?: "primary" | "secondary"
    
     /**
      * onclick handler
      */
    onClick?: () => void;
  
    style?: CSSProperties,
  
    height?: string 
  
    width?: string 
  }
  