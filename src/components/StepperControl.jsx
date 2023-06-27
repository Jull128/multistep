import React from 'react'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom';

export function StepperControl({ setCurrentStep, currentStep, steps }) {

    const navigate = useNavigate()

    const handleClick = (direction) => {
        let newStep = currentStep;

        if (newStep === steps.length - 1) {
        }

        if (newStep === 0 && direction !== "next") {
            navigate('/')
        }
        direction === "next" ? newStep++ : newStep--;
        newStep > - 1 && newStep <= steps.length && setCurrentStep(newStep)
    }


    return (
        <div className={style.btnBox}>
            <button

                onClick={() => handleClick()}
                className={style.btnBack}>Назад</button>
            {(currentStep <= steps.length - 1) ? (
                <button

                    onClick={() => handleClick('next')}
                    className={style.btnNext}>
                    {currentStep === steps.length - 1 ? "Отправить" : "Далее"}
                </button>) : ''
            }
        </div>
    )
}

