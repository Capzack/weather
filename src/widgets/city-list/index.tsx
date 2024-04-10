import './index.css'
import CityCard from "../city-card";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../shared/store";
import CityMenu from "../city-menu";
import React from "react";

export default function (){
    const cityList = useSelector((state: RootState) => state.cityListReducer)

    const dispatch = useDispatch()
    function onCloseClickHandler(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        console.log(123)
        if(!(e.target as Element).id) return
        const [target, id] = (e.target as Element).id.split('-')
        dispatch({type: 'cityList/remove', payload: id})
    }

    return(
        <div className={'city-list-container'}>
            <div className='city-list-container__list' onClick={onCloseClickHandler}>
                {cityList.map(
                    city => <CityCard {...city}/>
                )}
            </div>
            <CityMenu/>
        </div>
    );
}
