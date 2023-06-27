import React, { useState } from 'react'
import { ErrorMessage, Field, Form, Formik, FormikProvider, useFormik } from 'formik'
import * as Yup from 'yup'
import { FormItem } from './FormItem'
import style from './style.module.css'
import { ValidationSchemaFormTwo, initialValuesFormTwo } from '../ValidationSchema'
import { useEffect } from 'react'

export const Multistep = (props) => {
    const [answers, setAnswers] = useState([])

    const formik = useFormik({
        initialValues: initialValuesFormTwo,
        validationSchema: ValidationSchemaFormTwo,
        onSubmit:
            (values) => { console.log(values) }
        ,

    })

    useEffect(() => {
        const storage = localStorage.getItem('wizard');
        const prepairedStorage = storage ? JSON.parse(storage) : []

        if (storage) {
            formik.setValues(prepairedStorage);
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('wizard', JSON.stringify(formik.values))
    }, [formik.values])


    return (
        <FormikProvider value={formik} >
            <Form className={style.container}>
                {
                    props.list[props.step].items?.map((item, currentStep) => {
                        return (
                            <FormItem key={item.label} item={item} name={item.label} value={formik.values} >

                            </FormItem>
                        )
                    })
                }
                <pre>{JSON.stringify(formik.values, formik.errors, null, 4)}</pre>
            </Form>
        </FormikProvider>
    )
}
