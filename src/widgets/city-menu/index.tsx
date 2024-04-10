import AddCity from "../../features/add-city";
import ClearCity from "../../features/clear-city";
import './index.css'
export default function (){
    return(
        <div className={'city-menu-container'}>
            <AddCity/>
            <ClearCity/>
        </div>
    )
}