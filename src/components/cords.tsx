import { useSelector } from "react-redux";
import { PirateState } from "../features/pirateSlice";
import CordFormatter from "./cordFormatter";

function CordDisplay() {
    const hist = useSelector((state: PirateState) => state.history);
    return (
        <div className='cords'>
            <CordFormatter x={hist[0]?.x} y={hist[0]?.y} />
        </div>
    )
}

export default CordDisplay