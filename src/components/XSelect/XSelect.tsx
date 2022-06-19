import React, { HTMLAttributes } from 'react';

import './XSelect.scss';

export interface XSelectProps extends HTMLAttributes<HTMLSelectElement> {
    /*
     * Label for the select
     */
    label?: string;
    /*
     *
     */
    primary?: boolean;
    /*
     * What background color to use
     */
    backgroundColor?: string;
    /*
     * Should the select be disabled?
     */
    disabled?: boolean;
    /*
     * Should it be rounded?
     */
    rounded?: boolean;
    /*
     * Listen for changes to the selected value and send it to the onChange prop
     */
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    /*
     * List of options to display in the select
     */
    options: any[];
    /*
     * dispay key
     */
    selectKey?: string;
    /*
     * select value
     */
    selectValue?: string;

    className?: string;

    style?: React.CSSProperties;
}

const XSelect = ({
    label = 'Select',
    primary = false,
    options = [],
    selectKey = '',
    selectValue = '',
    className = '',
    backgroundColor = '',
    style = {},
    ...props
}: XSelectProps) => {

    



    return (
        <>
            <select
                className={['select', className].join(' ')}
                style={{ backgroundColor, ...style, border: '333' }}
                {...props}
            >
                <option disabled>{label}</option>
                
                {/* Check if array is string or object before mapping */}
                {options.map(option => {
                    if (typeof option === 'string') {
                        return (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        );
                    } else {
                        return (
                            <option key={option[selectValue]} value={option[selectValue]}>
                                {option[selectKey]}
                            </option>
                        );
                    }
                })}
            </select>
        </>
    );
};

export default XSelect;
