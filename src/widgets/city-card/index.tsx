import {ICity} from "../../shared/types/types";
import './index.css'
import {useGetForecastQuery} from "../../shared/api/weather-api";
import Preloader from "../../shared/ui/preloader";
import {kelvinToCelsius} from "../../shared/utils/weatherConverter";

export default function (props: ICity){
    const {data = {}, isLoading} = useGetForecastQuery({lat: props.lat, lon: props.lon})
    if(isLoading)
        return <Preloader/>

    return(
        <article className={'city-card-container'}>
            <button className={'city-close-button'} id={`cityClose-${props.district + props.name}`}>x</button>
            <h1 className='city-card-container__header'>{props.name}</h1>
            <h2 className='city-card-container__sub-header'>{kelvinToCelsius(data.list[0].main.temp).toFixed(1)}°</h2>
            <div className={'city-card-container__forecast city-forecast-container'}>
                {Array(4).fill(null).map((v, i) =>
                    <div key={i} className='city-forecast-container__forecast'>
                        {new Date(data.list[8*(i+1)].dt * 1000).toLocaleDateString()}
                        <br/>
                        {kelvinToCelsius(data.list[8*(i+1)].main.temp).toFixed(1)}°
                    </div>
                )}
            </div>
        </article>
    )
}