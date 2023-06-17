import React from 'react'
import style from './style.module.css'
import photo from './1.jpg'
import folder from './Vector.svg'
import { useNavigate } from 'react-router-dom'

export const Main = () => {
    const navigate = useNavigate()
    function openCreate() {
        navigate('/create')
    }

    return (
        <div className={style.container}>
            <div className={style.header}>
                <img alt='' src={photo} className={style.avatar} />
                <div className={style.description}>
                    <p>Юлия Перелыгина</p>
                    <ul className={style.list}>
                        <li><img src={folder} /><a href='https://t.me/Lula_Pe'>Telegram</a></li>
                        <li><img src={folder} /><a href='https://t.me/Lula_Pe'>GitHub</a></li>
                        <li><img src={folder} /><a href='https://t.me/Lula_Pe'>Resume</a></li>
                    </ul>
                </div>

            </div>
            <hr></hr>
            <div className={style.form}>
                <label>
                    <p>Номер телефона</p>
                    <input placeholder='+7 919 470-37-43'></input>
                </label>
                <label>
                    <p>Email</p>
                    <input placeholder='yul.perelygina@yandex.ru'></input>
                </label>
            </div>
            <button className={style.btn} onClick={openCreate} >Начать</button>
        </div>
    )
}

