import React, { useState } from "react";


type stateForm<T> = {
    dataForm: T;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSelect: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleChangeImagen: (url:string) => void,
    reset: () => void
}

const useForm = <T extends object>(initialState: T): stateForm<T> => {
    const [dataForm, setDataform] = useState(initialState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setDataform({
            ...dataForm,
            [name]: value
        })
    }

    const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDataform({
            ...dataForm,
            tipoPlan: e,
        });
    }

    const handleChangeImagen = (url:string) => {
        setDataform({
            ...dataForm,
            imagen: url,
        });
    };

    const reset = () => {
        setDataform(initialState)
    }

    return {
        dataForm, handleChange, handleSelect, handleChangeImagen, reset
    }
}

export default useForm