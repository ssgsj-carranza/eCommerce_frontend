import { useState } from 'react';

export const RegistrationForm = initialValues => {
    const [values, setValues] = useState(initialValues);
    console.log(initialValues, 'registrationForm')
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