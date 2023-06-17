import React from 'react'
import style from './style.module.css'

export function StepperControl({ handleClick, currentStep, steps, userData,
    setUserData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
        console.log({ [name]: value });
    }

    return (
        <div className={style.btnBox}>
            <button
                onChange={handleChange}
                onClick={() => handleClick()}
                className={style.btnBack}>Назад</button>
            {(currentStep <= steps.length - 1) ? (
                <button
                    onChange={handleChange}
                    onClick={() => handleClick('next')}
                    className={style.btnNext}>
                    {currentStep === steps.length - 1 ? "Отправить" : "Далее"}
                </button>) : ''
            }
        </div>
    )
}

