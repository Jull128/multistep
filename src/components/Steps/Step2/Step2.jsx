import React, { useContext } from 'react'
import { StepperContext } from '../../../context/StepperContext';
import style from './style.module.css'
import plus from './Plus.svg'
import trash from './trash.svg'

export const Step2 = () => {
    const { advantagesList, setAdvantagesList, isChecked, setIsChecked, isRadio, setIsRadio } = useContext(StepperContext)

    const handleAdvantagesChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...advantagesList];
        list[index][name] = value;
        setAdvantagesList(list);
    };

    const handleAdvantagesRemove = (index) => {
        const list = [...advantagesList];
        list.splice(index, 1);
        setAdvantagesList(list);
    };

    const handleAdvantagesAdd = () => {
        setAdvantagesList([...advantagesList, { advantages: "" }]);
    };

    const handleChangeCheckbox = (e) => {
        setIsChecked({
            ...isChecked,
            [e.target.name]: e.target.checked,
        });
    };
    const { one, two, three } = isChecked;

    const handleChangeRadio = (e) => {
        setIsRadio(e.target.value);
    };

    return (
        <div className={style.container}>
            <div className={style.containerAdvantages}>
                <label htmlFor="advantages">Advantages</label>
                {advantagesList.map((singleAdvantages, index) => (
                    <div key={index} className="advantages">
                        <div className={style.lineAdvantages}>
                            <input
                                name={'advantages'}
                                type="text"
                                placeholder='Placeholder'
                                id={`field-advantages-${index + 1}`}
                                value={singleAdvantages.advantages}
                                onChange={(e) => handleAdvantagesChange(e, index)}
                                required
                            />
                            {advantagesList.length !== 0 && (
                                <button
                                    id={`button-remove-${index + 1}`}
                                    type="button"
                                    onClick={() => handleAdvantagesRemove(index)}
                                    className={style.btnRemove}
                                >
                                    <img src={trash} />
                                </button>
                            )}
                        </div>
                    </div>
                ))}
                <button
                    className={style.btnAdd}
                    type="button"
                    onClick={handleAdvantagesAdd}
                >
                    <img src={plus} />
                </button>
            </div>

            <div className={style.checkboxGroup}>
                <p>Checkbox group</p>
                <div className={style.formCheck}>
                    <input checked={one} name='one'
                        onChange={handleChangeCheckbox} className={style.customControl} type="checkbox" value="" id="flexCheckDefault-1" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        1
                    </label>
                </div>
                <div className={style.formCheck}>
                    <input checked={two} name='two'
                        onChange={handleChangeCheckbox} className={style.customControl} type="checkbox" value="" id="flexCheckChecked-2" />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        2
                    </label>
                </div>
                <div className={style.formCheck}>
                    <input checked={three} name='three'
                        onChange={handleChangeCheckbox} className={style.customControl} type="checkbox" value="" id="flexCheckChecked-3" />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        3
                    </label>
                </div>
            </div>

            <div className={style.checkboxGroup}>
                <p>Radio group</p>
                <div className={style.formCheck}>
                    <input onChange={handleChangeRadio} checked={isRadio === 'a'} value="a" className={style.customControl} type="radio" name="flexRadioDefault" id="flexRadioDefault" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        1
                    </label>
                </div>
                <div className={style.formCheck}>
                    <input onChange={handleChangeRadio} checked={isRadio === 'b'} value="b" className={style.customControl} type="radio" name="flexRadioDefault" id="flexRadioDefault" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        2
                    </label>
                </div>
                <div className={style.formCheck}>
                    <input onChange={handleChangeRadio} checked={isRadio === 'c'} value="c" className={style.customControl} type="radio" name="flexRadioDefault" id="flexRadioDefault" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        3
                    </label>
                </div>
            </div>
        </div>
    )
}

