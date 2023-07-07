import React from 'react'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

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


    // async function sendForm() {
    //     const res = await fetch(`${this.url}/signup`, {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(values)
    //     });

    //     if (res.status === 409) {
    //         throw new Error('Юзер с указанным email уже существует');
    //     }
    //     if (res.status === 400) {
    //         throw new Error('Некорректно заполнено одно из полей');
    //     }
    //     if (res.status >= 300) {
    //         throw new Error(`Ошибка, код ${res.status}`);
    //     }
    // }

    // const { mutateAsync, isLoading, isError, error } = useMutation({
    //     mutationFn: (values) => sendForm(values),
    // })

    // const submitHandler = async (values) => {
    //     await mutateAsync(values)
    //     navigate('/')
    // }

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

