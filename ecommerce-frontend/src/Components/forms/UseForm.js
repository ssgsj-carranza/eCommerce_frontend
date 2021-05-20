import { useState } from 'react';

export const UseForm = initialValues => {
    const [values, setValues] = useState(initialValues);
    console.log(values, 'registrationForm');
    return [
        values,
        e => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            });
        }
    ];
};