import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

const Select: React.FC<SelectProps> = ({label, name, options,  ...rest}) => {
    return (
    <div className="select-block">
        <label htmlFor={name}>{ label }</label>
        <select defaultValue="" id="subject" {...rest} >
            <option value="" disabled hidden>Selecione uma opção</option>
            {options.map((option, ondex) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
    )
}

export default Select;
