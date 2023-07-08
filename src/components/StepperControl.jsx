import React from 'react'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { Modal } from './Modal/Modal';
import { Final } from './Steps/Final/Final';
import { useState } from 'react';
import { FinalError } from './Steps/Final/FinalError';

export function StepperControl({ setCurrentStep, currentStep, steps, isFinal, setIsFinal, isFinalError, setIsFinalError, handleSubmit }) {

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
            {(currentStep <= steps?.length - 1) ? (
                <button

                    onClick={
                        currentStep === steps?.length - 1 ? handleSubmit :
                            () => handleClick('next')}
                    className={style.btnNext}>
                    {currentStep === steps.length - 1 ? "Отправить" : "Далее"}
                </button>) : ''
            }
            <Final
                isFinal={isFinal}
                setIsFinal={setIsFinal}
            />
            <FinalError
                isFinalError={isFinalError}
                setIsFinalError={setIsFinalError}
            />
        </div>
    )
}

