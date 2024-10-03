import { useState } from "react";

export const useContactForm = () => {

    const [isFormSubmitting,setFormSubmitting] = useState(false);
    const [isFormSubmitted,setFormSubmitted] = useState(false)
    const submitForm = (formData) => {
        setFormSubmitting(true)
        console.log(formData);
        setTimeout(() => {setFormSubmitted(true);
            setFormSubmitting(false)
        },2000);
    }
    return {submitForm,isFormSubmitted,isFormSubmitting}

}