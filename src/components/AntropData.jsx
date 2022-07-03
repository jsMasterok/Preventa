import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { randomColor } from 'randomcolor'
import Logo from '../icon.svg'
import Trash from '../trash.svg'

// get data of localStorage
const dataFromlocal = () => {
    const localData = localStorage.getItem('data')
    if (localData) {
        return (
            JSON.parse(localData)
        )
    } else {
        return []
    }
}

export default function AntropData() {

    const [visibleForm, setVisibleForm] = useState(false);

    // main array
    const [data, setData] = useState(dataFromlocal())

    // State for inputs
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [input3, setInput3] = useState('')
    const [input4, setInput4] = useState('')
    const [input5, setInput5] = useState('')
    const [input6, setInput6] = useState('')
    const [input7, setInput7] = useState('')
    const [input8, setInput8] = useState('')
    const [input9, setInput9] = useState('')

    // Submit
    const addData = (e) => {
        e.preventDefault();
        // create object with data in inputs
        let today = new Date()
        let rowData = {
            id: uuidv4(),
            date: today.toLocaleDateString(),
            time: today.getHours(),
            min: today.getMinutes(),
            sec: today.getSeconds(),
            color: randomColor({
                luminosity: 'light',
                hue: 'white'
            }),
            input1,
            input2,
            input3,
            input4,
            input5,
            input6,
            input7,
            input8,
            input9
        }
        setData([...data, rowData])
        setInput1('')
        setInput2('')
        setInput3('')
        setInput4('')
        setInput5('')
        setInput6('')
        setInput7('')
        setInput8('')
        setInput9('')
    }

    // save data in localStorage
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data))
    }, [data])

    // delete from LS
    const deleteData = (id) => {
        const filterData = data.filter((element, index) => {
            return element.id !== id
        })
        setData(filterData)
    }

    return (
        <div className='container'>
            <div className='AntropData'>
                <div className='Heading-row'>
                    <img src={Logo} alt="Sorry not found" />
                    <h2 className='Heading-row__title'>Антропометрические данные</h2>
                    <button className='Heading-row__add' onClick={() => setVisibleForm(!visibleForm)}>+</button>
                </div>
                {visibleForm &&
                    <form className='Addinfo' onSubmit={addData}>
                        <div className='Addinfo__data-wrapper'>
                            <div className='Infoblock'>
                                <h4 className='Infoblock__caption'>Рост</h4>
                                <div className='Infoblock__data-wrapper'>
                                    <input
                                        className='Infoblock__data-wrapper--input'
                                        type="text"
                                        maxLength={3}
                                        onChange={(e) => setInput1(e.target.value)}
                                        value={input1}
                                    />
                                    <span className='Infoblock__data-wrapper--unit'>см</span>
                                </div>
                            </div>
                            <div className='Infoblock'>
                                <h4 className='Infoblock__caption'>Вес</h4>
                                <div className='Infoblock__data-wrapper'>
                                    <input
                                        className='Infoblock__data-wrapper--input'
                                        type="text"
                                        required
                                        maxLength={3}
                                        onChange={(e) => setInput2(e.target.value)}
                                        value={input2}
                                    />
                                    <span className='Infoblock__data-wrapper--unit'>кг</span>
                                </div>
                            </div>
                            <div className='Infoblock'>
                                <h4 className='Infoblock__caption'>Сатурации</h4>
                                <div className='Infoblock__data-wrapper'>
                                    <input
                                        className='Infoblock__data-wrapper--input Infoblock__data-wrapper--input_sat'
                                        type="text"
                                        maxLength={3}
                                        required
                                        onChange={(e) => setInput3(e.target.value)}
                                        value={input3}
                                    />
                                    <span className='Infoblock__data-wrapper--unit'>%</span>
                                </div>
                            </div>
                            <div className='Infoblock'>
                                <h4 className='Infoblock__caption'>ИМТ</h4>
                                <div className='Infoblock__data-wrapper'>
                                    <input
                                        className='Infoblock__data-wrapper--input'
                                        type="text"
                                        required
                                        maxLength={3}
                                        onChange={(e) => setInput4(e.target.value)}
                                        value={input4}
                                    />
                                    <span className='Infoblock__data-wrapper--unit'>имт</span>
                                </div>
                            </div>
                            <div className='Infoblock'>
                                <h4 className='Infoblock__caption'>АД,ЧСС</h4>
                                <div className='Infoblock__data-wrapper'>
                                    <input
                                        className='Infoblock__data-wrapper--adinput'
                                        type="text"
                                        required
                                        maxLength={3}
                                        onChange={(e) => setInput5(e.target.value)}
                                        value={input5}
                                    />
                                    <span className='Infoblock__data-wrapper--unit'>/</span>
                                    <input
                                        type="text"
                                        className='Infoblock__data-wrapper--adinput'
                                        required
                                        maxLength={3}
                                        onChange={(e) => setInput6(e.target.value)}
                                        value={input6}
                                    />
                                    <span className='Infoblock__data-wrapper--unit'>мм.рт.ст.</span>
                                    <input
                                        type="text"
                                        className='Infoblock__data-wrapper--adinput'
                                        required
                                        maxLength={3}
                                        onChange={(e) => setInput7(e.target.value)}
                                        value={input7}
                                    />
                                    <span className='Infoblock__data-wrapper--unit'>уд.мин.</span>
                                </div>
                            </div>
                            <div className='Infoblock'>
                                <h4 className='Infoblock__caption'>ОБ / ОТ</h4>
                                <div className='Infoblock__data-wrapper'>
                                    <input
                                        className='Infoblock__data-wrapper--input'
                                        type="text"
                                        required
                                        maxLength={3}
                                        onChange={(e) => setInput8(e.target.value)}
                                        value={input8}
                                    />
                                    <span className='Infoblock__data-wrapper--unit'>/</span>
                                    <input
                                        className='Infoblock__data-wrapper--input'
                                        type="text"
                                        required
                                        maxLength={3}
                                        onChange={(e) => setInput9(e.target.value)}
                                        value={input9}
                                    />
                                    <span className='Infoblock__data-wrapper--unit'>см</span>
                                </div>
                            </div>
                        </div>
                        <div className='Addinfo__buttons'>
                            <button className='Addinfo__buttons--btn Addinfo__buttons--btn_save' type='submit'>Сохранить</button>
                            <button className='Addinfo__buttons--btn Addinfo__buttons--btn_cancel' onClick={() => setVisibleForm(!visibleForm)}>Отмена</button>
                        </div>
                    </form>
                }
                <div className='Data-table'>
                    {data.length > 0 && <h3>История антропометрических данных</h3>}
                    {data.length > 0 &&
                        <div className='Count-wrapper'>
                            <button onClick={() => setData([])}>Удалить все записи</button>
                            <h3>Количество записей: {data.length}</h3>
                        </div>
                    }
                    {data.length < 1 &&
                        <div className='Empty'>
                            Записи отсусвуют
                            <span>Введите данные в форму </span>
                        </div>}
                    {data.length > 0 &&
                        <div className='List-wrapper'>
                            <div className='test'>
                                <span>Рост</span>
                                <span>Вес</span>
                                <span>Сатурации</span>
                                <span>ИМТ</span>
                                <span className='test_ad'>АД, ЧСС</span>
                                <span className='test_ob'>ОБ / ОТ</span>
                            </div>
                            {data.map(info => (
                                <div key={info.id} className='List-row'>
                                    <div className='List-row__data'>
                                        <span className='List-row__data--date'>{info.date}</span>
                                        <span className='List-row__data--time'>{info.time}:{info.min}:{info.sec}</span>
                                    </div>
                                    <form className='List-row__data List-row__data_antrop'>
                                        <span className='List-row__data--info'>{info.input1} см</span>
                                    </form>
                                    <div className='List-row__data List-row__data_antrop'>
                                        <span className='List-row__data--info'>{info.input2} кг</span>
                                    </div>
                                    <div className='List-row__data List-row__data_antrop'>
                                        <span className='List-row__data--info'>{info.input3} %</span>
                                    </div>
                                    <div className='List-row__data List-row__data_antrop'>
                                        <span className='List-row__data--info'>{info.input4} имт</span>
                                    </div>
                                    <div className='List-row__data List-row__data_antrop'>
                                        <span className='List-row__data--info'>{info.input5}/</span>
                                        <span className='List-row__data--info'> {info.input6} мм.рт.ст.</span>
                                        <span className='List-row__data--info'>{info.input7} уд.мин</span>
                                    </div>
                                    <div className='List-row__data List-row__data_antrop'>
                                        <span className='List-row__data--info'>{info.input8}/</span>
                                        <span className='List-row__data--info'>{info.input9} см</span>
                                    </div>
                                    <button className='Delete-row' onClick={() => deleteData(info.id)}>
                                        <img src={Trash} alt="Undefined" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}
