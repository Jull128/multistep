import React from 'react'
import { Modal } from '../../Modal/Modal'
import dagger from './dagger.svg'
import style from './style.module.css'

export const FinalError = ({ isFinalError, setIsFinalError }) => {
    const closeFinal = () => {
        setIsFinalError(false)
    }

    return (
        <Modal isOpen={isFinalError} closeHandler={closeFinal}>
            <div className={style.container}>
                <div className={style.headerError}>
                    <p>Ошибка</p>
                    <button onClick={closeFinal} className={style.modalCloseBtn} type="button">&#10006;</button>
                </div>
                <img className={style.tick} src={dagger} />
                <button onClick={closeFinal} className={style.buttonClose} type="button">Закрыть</button>
            </div>
        </Modal>
    )
}

