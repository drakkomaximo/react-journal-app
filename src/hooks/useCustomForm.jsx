import { useState } from "react"

export const useCustomForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState)

    const reset = ( newFormstate = initialState ) =>{
        setValues( newFormstate )
    }

    const handleInputChange = ({ target }) =>{
        setValues({
            ...values, [ target.name ]: target.value
        })
    }

    return [ values, handleInputChange, reset ]
}