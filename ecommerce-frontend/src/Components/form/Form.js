import React from 'react';

const form = (callback, initialObject) => {
    const [formValues, setFormValues] = useState(initalObject);
    const handleChange = (event) => {
        setFormValues(formValues => ({...formValues, [event.target.name] : event.target.value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        callback(formValues);
    }
    return {formValues, handleChange, handleSubmit};
}
export default form;