import React, { useEffect, useState } from 'react'
import { Stepper } from '../../components/Stepper/Stepper'
import { StepperControl } from '../../components/StepperControl'
import style from './style.module.css'
import { questions } from '../../Questions'
import { Multistep } from '../../components/Steps/Multistep'
import { useFormik } from 'formik'

export const Create = () => {
    const [currentStep, setCurrentStep] = useState(0)

    const steps = [
        "1",
        "2",
        "3"
    ];



    return (
        <div className={style.container}>
            <Stepper
                steps={steps}
                currentStep={currentStep}
            />
            <Multistep list={questions} step={currentStep} >

            </Multistep>

            <StepperControl
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                steps={steps}
            />
        </div>
    )
}

