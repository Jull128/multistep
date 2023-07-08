import React, { useState } from 'react'
import { ErrorMessage, Field, Form, Formik, FormikProvider, useFormik } from 'formik'
import * as Yup from 'yup'
import { FormItem } from './FormItem'
import style from './style.module.css'
import { ValidationSchemaFormTwo, initialValuesFormTwo } from '../ValidationSchema'
import { useEffect } from 'react'

export const Multistep = (props) => {



    return (
        <FormikProvider value={props.formik} >
            <Form className={style.container}>
                {
                    props.list[props.step].items?.map((item, currentStep) => {
                        return (
                            <FormItem key={item.label} item={item} name={item.label} value={props.formik.values} >

                            </FormItem>
                        )
                    })
                }
                <pre>{JSON.stringify(props.formik.values, props.formik.errors, null, 4)}</pre>
            </Form>
        </FormikProvider>
    )
}
