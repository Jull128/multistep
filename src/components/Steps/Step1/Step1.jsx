
import React from 'react'
import { useContext } from 'react'
import { StepperContext } from '../../../context/StepperContext'
import style from './style.module.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup'

export const Step1 = () => {
    const { userData, setUserData } = useContext(StepperContext)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
        console.log({ [name]: value });
    }

    const initialValues = {
        nickname: userData['nickname'],
        name1: userData['name1'],
        sername: userData['sername']
    }
    console.log(userData['nickname']);

    const validatorAddReview = () => Yup.object({
        nickname: Yup.string()
            .max(30, 'Максимальная длина 30 символов')
            .matches(/[a-zA-ZА-яа-я0-9]/g, "Не допускается использование спецсимволов"),
        name1: Yup.string()
            .required('Обязательное поле'),
        sername: Yup.string()
            .required('Обязательное поле'),
    })

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validatorAddReview}
                onSubmit={values => { console.log(values) }}
            >
                {({ errors, touched }) => (
                    <Form className={style.container}>
                        <div className={style.field}>
                            <label htmlFor='field-nickname'>Nickname</label>
                            <Field id='field-nickname'
                                type="text"
                                name="nickname"
                                onChange={handleChange}
                                placeholder='Nickname' />
                            {errors.nickname && touched.nickname ? (
                                <p>{errors.nickname}</p>
                            ) : null}
                        </div>
                        <div className={style.field} >
                            <label htmlFor='field-name'>Name</label>
                            <Field
                                id='field-name'
                                type="text"
                                name="name1"
                                onChange={handleChange}
                                // value={userData["name"] || ""}
                                placeholder='Name' />
                            <ErrorMessage component="p" name="name1" />
                        </div>
                        <div className={style.field}>
                            <label htmlFor='field-sername'>Sername</label>
                            <Field
                                id='field-sername'
                                type="text"
                                name="sername"
                                onChange={handleChange}
                                // value={userData["sername"] || ""}
                                placeholder='Sername' />
                            <ErrorMessage component="p" name="sername" />
                        </div>
                        <div className={style.field}>
                            <label htmlFor='field-sex'>Sex</label>
                            <FormControl className={style.formControl} sx={{ m: 1, minWidth: 120 }}>
                                <Select
                                    className={style.select}
                                    id={style['field-sex']}
                                    name='sex'
                                    value={userData["sex"] || ""}
                                    onChange={handleChange}
                                    displayEmpty
                                >
                                    <MenuItem className={style.option} value="">
                                        <p>Не выбрано</p>
                                    </MenuItem>
                                    <MenuItem className={style.option} value={"man"}>man</MenuItem>
                                    <MenuItem className={style.option} value={"woman"}>woman</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Form>)}
            </Formik >
        </>
    )
}

// import React from 'react'
// import { useContext } from 'react'
// import { StepperContext } from '../../../context/StepperContext'
// import style from './style.module.css'
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// export const Step1 = () => {
//     const { userData, setUserData } = useContext(StepperContext)

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUserData({ ...userData, [name]: value })
//     }

//     return (
//         <div className={style.container}>
//             <label htmlFor='field-nickname'>Nickname</label>
//             <input
//                 id='field-nickname'
//                 type="text"
//                 name="nickname"
//                 onChange={handleChange}
//                 value={userData["nickname"] || ""}
//                 placeholder='Nickname'></input>
//             <label htmlFor='field-name'>Name</label>
//             <input
//                 id='field-name'
//                 type="text"
//                 name="name"
//                 onChange={handleChange}
//                 value={userData["name"] || ""}
//                 placeholder='Name'></input>
//             <label htmlFor='field-sername'>Sername</label>
//             <input
//                 id='field-sername'
//                 type="text"
//                 name="sername"
//                 onChange={handleChange}
//                 value={userData["sername"] || ""}
//                 placeholder='Sername'></input>
//             <label htmlFor='field-sex'>Sex</label>
//             <FormControl className={style.formControl} sx={{ m: 1, minWidth: 120 }}>
//                 <Select
//                     className={style.select}
//                     id={style['field-sex']}
//                     name='sex'
//                     value={userData["sex"] || ""}
//                     onChange={handleChange}
//                     displayEmpty
//                 >
//                     <MenuItem className={style.option} value="">
//                         <p>Не выбрано</p>
//                     </MenuItem>
//                     <MenuItem className={style.option} value={"man"}>man</MenuItem>
//                     <MenuItem className={style.option} value={"woman"}>woman</MenuItem>
//                 </Select>
//             </FormControl>
//         </div>
//     )
// }
