import React, { useEffect, useState } from 'react'
import { Field, ErrorMessage, useFormik, FieldArray } from 'formik'
import style from './style.module.css'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import plus from './Plus.svg'
import trash from './trash.svg'

//https://api.sbercloud.ru/content/v1/bootcamp/frontend

export const FormItem = ({ item, name, value, answers, setAnswers }) => {
    const handler = (e) => {
        setAnswers(e.target.value)
    }

    const CustomizedSelectForFormik = ({ children, form, field }) => {
        const { name, value } = field;
        const { setFieldValue } = form;

        return (
            <Select
                name={name}
                value={value}
                onChange={e => {
                    setFieldValue(name, e.target.value);
                }}
            >
                {children}
            </Select>
        );
    };


    switch (item.type) {

        case 'text':
            const upperLabel = item.label.charAt(0).toUpperCase() + item.label.slice(1);
            return (
                <>
                    <div key={item.label} className={style.field}>
                        <label htmlFor={item.label}>{upperLabel}</label>
                        <Field
                            name={name}
                            type="text"
                            id={name}
                            placeholder={name}
                            className={style.input}
                        />
                        <ErrorMessage component="p" name={name} />
                    </div>
                </>
            )
            break;
        case 'select':
            return (
                <div className={style.field}>
                    <label htmlFor='field-sex'>Sex </label>

                    <FormControl className={style.formControl} sx={{ m: 1, minWidth: 120 }} color='grey' name='sex'>
                        <Select
                            className={style.select}
                            id={style['field-sex']}
                            onChange={handler}
                            displayEmpty
                            defaultValue=''
                        >
                            <MenuItem className={style.option} value="" disabled selected>
                                <p>Не выбрано</p>
                            </MenuItem>
                            <MenuItem className={style.option} value={"man"}>man</MenuItem>
                            <MenuItem className={style.option} value={"woman"}>woman</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <Field name="sex" component={CustomizedSelectForFormik}>
                            <MenuItem value={60}>01</MenuItem>
                            <MenuItem value={120}>02</MenuItem>
                        </Field>
                    </FormControl>
                </div>
            )
            break;
        case 'advantages':
            return (

                <FieldArray name={name} >

                    {({ push, remove }) => (
                        <div className={style.containerAdvantages}>
                            <label htmlFor="advantages">Advantages</label>
                            {value.advantages.map((_, index) => (
                                <div key={index} className="advantages">
                                    <div className={style.lineAdvantages}>
                                        <Field
                                            name={`${name}[${index}].advantage`}
                                            type="text"
                                            placeholder='Placeholder'
                                            id={`field-advantages-${index + 1}`}
                                            required
                                        />
                                        <button
                                            id={`button-remove-${index + 1}`}
                                            type="button"
                                            onClick={() => remove(index)}
                                            className={style.btnRemove}
                                        >
                                            <img src={trash} />
                                        </button>
                                        <ErrorMessage component="p" name={`${name}[${index}].advantage`} id={`field-advantages-${index + 1}`} />
                                    </div>
                                </div>
                            ))}
                            <button
                                className={style.btnAdd}
                                type="button"
                                onClick={() => push({ advantage: '' })}
                            >
                                <img src={plus} />
                            </button>
                        </div>
                    )}
                </FieldArray>
            )
            break;
        case 'checkbox':
            return (
                <div className={style.checkboxGroup}>
                    <p>Checkbox group</p>
                    <div className={style.formCheck}>
                        <Field name='checkbox'
                            className={style.customControl} type="checkbox" value="one" id="flexCheckDefault-1" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            1
                        </label>
                    </div>
                    <div className={style.formCheck}>
                        <Field name='checkbox'
                            className={style.customControl} type="checkbox" value="two" id="flexCheckChecked-2" />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            2
                        </label>
                    </div>
                    <div className={style.formCheck}>
                        <Field name='checkbox'
                            className={style.customControl} type="checkbox" value="three" id="flexCheckChecked-3" />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            3
                        </label>
                    </div>
                </div>
            )
            break;
        case 'radio':
            return (
                <div className={style.checkboxGroup}>
                    <p>Radio group</p>
                    <label className={style.formCheck}>
                        <Field value="one" className={style.customControl} type="radio" name="radio" id="flexRadioDefault" />
                        1
                    </label>
                    <label className={style.formCheck} >
                        <Field value="two" className={style.customControl} type="radio" name="radio" id="flexRadioDefault" />
                        2
                    </label>
                    <label className={style.formCheck} >
                        <Field value="three" className={style.customControl} type="radio" name="radio" id="flexRadioDefault" />
                        3
                    </label>
                </div>
            )
            break;
        case 'textarea':
            return (
                <>
                    <label htmlFor={name} className={style.textarea}>
                        About
                        <Field as='textarea' name={name} />
                    </label>
                </>
            )
            break;

    }
}