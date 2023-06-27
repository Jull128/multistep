import React from 'react'
import * as Yup from 'yup'

export const ValidationSchemaFormOne = Yup.object().shape({
    phone: Yup.string()
        .required('Обязательное поле')
        .matches(/[0-9]$/g, "Неверный формат номера '+ 7 (000) 000-00-00' "),
    email: Yup.string().email('Неверный формат "test@test.com"').required('Required'),
})

export const ValidationSchemaFormTwo = Yup.object().shape({
    nickname: Yup.string()
        .required('Обязательное поле')
        .max(30, 'Максимальная длина 30 символов')
        .matches(/[a-zA-ZА-яа-я0-9]$/g, "Не допускается использование спецсимволов"),
    name: Yup.string()
        .required('Обязательное поле')
        .max(50, 'Максимальная длина 50 символов')
        .matches(/[a-zA-ZА-яа-я]$/g, "Не допускается использование цифр и спецсимволов"),
    sername: Yup.string()
        .required('Обязательное поле')
        .max(50, 'Максимальная длина 50 символов')
        .matches(/[a-zA-ZА-яа-я]$/g, "Не допускается использование цифр и спецсимволов"),
    advantages: Yup.array().of(
        Yup.object().shape({
            advantage: Yup.string()
                .required('Обязательное поле')
                .max(50, 'Максимальная длина 50 символов')
                .matches(/[a-zA-ZА-яа-я]$/g, "Не допускается использование цифр и спецсимволов")
        }))
        .min(1)
        .max(5, 'Максимальное количество навыков "5"'),
    about: Yup.string()
        .required('Обязательное поле')
        .max(50, 'Максимальная длина 50 символов')
        .matches(/[a-zA-ZА-яа-я]$/g, "Не допускается использование цифр и спецсимволов"),
})


export const initialValuesFormOne = {
    email: '',
    phone: '',
}

export const initialValuesFormTwo = {
    nickname: '',
    name: '',
    sername: '',
    advantages: [{ advantage: '' }],
    about: '',
    checkbox: [],
    radio: '',
    sex: ''
}