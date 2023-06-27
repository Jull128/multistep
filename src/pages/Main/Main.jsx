import React, { useEffect, useRef, useState } from 'react'
import style from './style.module.css'
import photo from './1.jpg'
import folder from './Vector.svg'
import { useNavigate } from 'react-router-dom'
import { ValidationSchemaFormOne, initialValuesFormOne } from '../../components/ValidationSchema'
import { ErrorMessage, Field, Formik, FormikProvider, useFormik } from 'formik'
import ReactInputMask from 'react-input-mask'
import * as Yup from 'yup'

export const Main = () => {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: initialValuesFormOne,
        validationSchema: ValidationSchemaFormOne,
        onSubmit:
            (values) => { console.log(values) }
        ,

    })

    useEffect(() => {
        const storage = localStorage.getItem('form');
        const prepairedStorage = storage ? JSON.parse(storage) : []

        if (storage) {
            formik.setValues(prepairedStorage);
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('form', JSON.stringify(formik.values))
    }, [formik.values])

    const handleClick = () => {
        navigate('/create')
    }

    return (
        <FormikProvider value={formik} >
            <form onSubmit={handleClick} className={style.container}>
                <div className={style.header}>
                    <img alt='' src={photo} className={style.avatar} />
                    <div className={style.description}>
                        <p>Юлия Перелыгина</p>
                        <ul className={style.list}>
                            <li><img src={folder} /><a href='https://t.me/Lula_Pe'>Telegram</a></li>
                            <li><img src={folder} /><a href='https://t.me/Lula_Pe'>GitHub</a></li>
                            <li><img src={folder} /><a href='https://t.me/Lula_Pe'>Resume</a></li>
                        </ul>
                    </div>

                </div>
                <hr></hr>
                <div className={style.form}>
                    <label>
                        <p>Номер телефона</p>
                        <ReactInputMask
                            mask='+ 7 (999) 999-99-99'
                            value={formik.values.phone}
                            onChange={formik.handleChange} >
                            {() => <Field name='phone' />}
                        </ReactInputMask>
                        <p>{formik.errors.phone}</p>
                    </label>
                    <label>
                        <p>Email</p>
                        <Field
                            type='email'
                            name='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            placeholder='yul.perelygina@yandex.ru' />
                        <p>{formik.errors.email}</p>
                    </label>
                </div>
                <button className={style.btn} type='submit' disabled={!formik.isValid || formik.isSubmitting} >Начать</button>
            </form>
        </FormikProvider>
    )
}

