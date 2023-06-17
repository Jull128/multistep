import React, { useEffect, useState, useRef } from 'react'
import style from './style.module.css'
import tick from './Vector.svg'



export const Stepper = ({ steps, currentStep }) => {
    const [newStep, setNewStep] = useState([])
    const stepRef = useRef()


    const updateStep = (stepNumber, steps) => {
        const newSteps = [...steps];
        let count = 0

        while (count < newSteps.length) {
            if (count === stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    selected: true,
                    completed: false,
                }
                count++
            }
            else if (count < stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    selected: true,
                    completed: true,
                }
                count++
            }
            else {
                newSteps[count] = {
                    ...newSteps[count],
                    selected: false,
                    completed: false,
                }
                count++
            }
        }
        return newSteps;
    }

    useEffect(() => {
        const stepsState = steps.map((step, index) =>
            Object.assign(
                {},
                {
                    description: step,
                    completed: false,
                    selected: index === 0 ? true : false
                }
            ))
        stepRef.current = stepsState;
        const current = updateStep(currentStep, stepRef.current)

        setNewStep(current)
    }, [steps, currentStep])



    const displaySteps = newStep.map((step, index) => {

        return (
            <div key={index}
                className={
                    index !== newStep.length - 1 ?
                        style.displayActive : style.displayInactive}>
                <div className={style.stepBox}>
                    {step.completed ?
                        <>
                            <div className={style.pointDone}><img alt='' src={tick} /></div>
                            <div className={style.number}>{index + 1}</div>
                        </> :
                        step.selected ?
                            <>
                                <div className={style.pointActive}></div>
                                <div className={style.number}>{index + 1}</div>
                            </> :
                            <>
                                <div className={style.point}></div>
                                <div className={style.numberInactive}>{index + 1}</div>
                            </>
                    }

                </div>
                <div
                    className={step.completed ?
                        style.lineActive : style.lineInactive}>
                </div>
            </div>
        )
    })

    return (
        <div className={style.container}>
            {displaySteps}
        </div>
    )
}



