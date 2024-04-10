import React, {useState} from "react";
import cities from '../../shared/consts/russian-cities.json'
import './index.css'
import {useDispatch} from "react-redux";

export default function (){
    const [value, setValue] =useState('')
    const dispatch = useDispatch()
    function onHintClickHandler(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
        if(!(e.target as Element).id) return
        const [target, id] = (e.target as Element).id.split('-')
        const targetCity = cities
            .find((city) => id === city.district + city.name)
        if(!targetCity) return

        dispatch({
            type: 'cityList/add',
            payload: {
                name: targetCity.name,
                district: targetCity.district,
                lat: targetCity.coords.lat,
                lon: targetCity.coords.lon,
            }
        })
        setValue('')
    }

    return (
        <div className='add-city-container'>
            <input {...{
                className: 'add-city-container__input',
                value: value,
                onChange: e => setValue(e.target.value)
            }}/>
            <div className={'add-city-container__hint'} onClick={onHintClickHandler}>
                {value && cities
                    .filter((city => city.name.toLowerCase().match(value.toLowerCase())))
                    .slice(0, 10)
                    .map((city, index) =>
                        <div id={`hint-${city.district + city.name}`} key={city.district + city.name}>
                            {city.name}
                        </div>
                )}
            </div>
        </div>
    )
}