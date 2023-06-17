import React, { useState } from 'react'
import { Stepper } from '../../components/Stepper/Stepper'
import { StepperControl } from '../../components/StepperControl'
import { StepperContext } from '../../context/StepperContext'
import style from './style.module.css'
import { Step1 } from '../../components/Steps/Step1/Step1';
import { Step2 } from '../../components/Steps/Step2/Step2';
import { Step3 } from '../../components/Steps/Step3/Step3';
import { useNavigate } from 'react-router-dom'
import { Final } from '../../components/Steps/Final/Final'

export const Create = () => {
    const [currentStep, setCurrentStep] = useState(0)
    const [userData, setUserData] = useState({});
    const [finalData, setFinalData] = useState([])
    const [advantagesList, setAdvantagesList] = useState([{ advantages: "" }]);
    const [isChecked, setIsChecked] = useState({
        one: false,
        two: false,
        three: false
    })
    const [isRadio, setIsRadio] = useState('a');
    const navigate = useNavigate()

    const steps = [
        "Step1",
        "Step2",
        "Step3"
    ];

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <Step1 />
            case 2:
                return <Step2 />
            case 3:
                return <Step3 />
            case 4:
                return <Final />
            default:
        }
    }

    const handleClick = (direction) => {
        let newStep = currentStep;

        if (currentStep === 0 && direction !== "next") {
            navigate('/')
        }
        direction === "next" ? newStep++ : newStep--;
        newStep > -1 && newStep <= steps.length && setCurrentStep(newStep)
    }

    return (
        <div className={style.container}>
            <Stepper
                steps={steps}
                currentStep={currentStep}
            />
            <StepperContext.Provider
                value={{
                    userData,
                    setUserData,
                    finalData,
                    setFinalData,
                    advantagesList,
                    setAdvantagesList,
                    isChecked,
                    setIsChecked,
                    isRadio,
                    setIsRadio
                }}
            >
                {displayStep(currentStep + 1)}
            </StepperContext.Provider>
            <StepperControl
                value={{
                    userData,
                    setUserData
                }}
                handleClick={handleClick}
                currentStep={currentStep}
                steps={steps}
            />
        </div>
    )
}

