import React from 'react'
import style from './style.module.css'

export function StepperControl({ handleClick, currentStep, steps }) {

    
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

