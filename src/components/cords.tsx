import { useSelector } from "react-redux";
import { PirateState } from "../features/pirateSlice";

function CordDisplay() {
    const hist = useSelector((state: PirateState) => state.history);
    return (
        <div className='cords'>{hist[0]?.x}{hist[0]?.y}</div>
    )
}

export default CordDisplay