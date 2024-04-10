import './index.css'
import {useDispatch} from "react-redux";

export default function (){
    const dispatch = useDispatch()
    function onClickHandler(){
        dispatch({type: 'cityList/clear'})
    }

    return(
        <button {...{
            className: 'clear-city-button',
            onClick: onClickHandler
        }}>Очистить&nbsp;все</button>
    )
}