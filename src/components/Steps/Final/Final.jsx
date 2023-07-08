import React from 'react'
import { Modal } from '../../Modal/Modal'
import style from './style.module.css'
import tick from './tick.svg'
import { useNavigate } from 'react-router-dom'


export const Final = ({ isFinal, setIsFinal }) => {
    const closeFinal = () => {
        setIsFinal(false)
    }
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }


    return (
        <Modal isOpen={isFinal} closeHandler={closeFinal}>
            <div className={style.container}>
                <p>Форма успешно отправлена</p>
                <img className={style.tick} src={tick} />
                <button onClick={handleClick} className={style.buttonToMain}>На главную</button>
            </div>
        </Modal>
    )
}

