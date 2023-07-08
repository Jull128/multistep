import React, { useEffect, useState } from 'react'
import { Stepper } from '../../components/Stepper/Stepper'
import { StepperControl } from '../../components/StepperControl'
import style from './style.module.css'
import { questions } from '../../Questions'
import { Multistep } from '../../components/Steps/Multistep'
import { useFormik } from 'formik'
import { ValidationSchemaFormTwo, initialValuesFormTwo } from '../../components/ValidationSchema'

export const Create = () => {
    const [currentStep, setCurrentStep] = useState(0)

    const steps = [
        "1",
        "2",
        "3"
    ];

    const formik = useFormik({
        initialValues: initialValuesFormTwo,
        validationSchema: ValidationSchemaFormTwo,
        onSubmit: (values) => { console.log(values); },
    })

    const form = window.localStorage.getItem('form')
    const wizard = window.localStorage.getItem('wizard')
    let all = ''
    useEffect(() => {
        const prepairedForm = form ? JSON.parse(form) : []
        const prepairedWizard = wizard ? JSON.parse(wizard) : []
        if (prepairedForm, prepairedWizard) {
            all = Object.assign(prepairedForm, prepairedWizard)
            // console.log(all);
        }
    }, [wizard, form])

    const [answers, setAnswers] = useState(all)
    console.log(answers);
    useEffect(() => {
        const storage = localStorage.getItem('wizard');
        const prepairedStorage = storage ? JSON.parse(storage) : []

        if (storage) {
            formik.setValues(prepairedStorage);
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('wizard', JSON.stringify(formik.values))
        setAnswers(formik.values)
    }, [formik.values])


    const [isFinal, setIsFinal] = useState(false)
    const openFinal = () => {
        setIsFinal(true)
    }
    const [isFinalError, setIsFinalError] = useState(false)
    const openFinalError = () => {
        setIsFinalError(true)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await fetch("https://api.sbercloud.ru/content/v1/bootcamp/frontend", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(answers),
        });

        if (res.status === 200) {
            openFinal()

        } else {
            openFinalError()
        }
        return res.json()
    }

    return (
        <div className={style.container}>
            <Stepper
                steps={steps}
                currentStep={currentStep}
            />
            <Multistep list={questions} step={currentStep} formik={formik}>

            </Multistep>

            <StepperControl
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                steps={steps}
                isFinal={isFinal}
                setIsFinal={setIsFinal}
                isFinalError={isFinalError}
                setIsFinalError={setIsFinalError}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

