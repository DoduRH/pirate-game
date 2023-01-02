import { useSelector } from "react-redux"
import { PirateState } from "../features/pirateSlice"
import CordFormatter from "./cordFormatter";

function History() {
    const hist = useSelector((state: PirateState) => state.history);
    return (
        <div className="history monospace">
            {
                hist.slice(1,hist.length).map((elm, i) => {
                    return <div key={i}><CordFormatter x={elm.x} y={elm.y} /></div>
                })
            }
        </div>
    )
}

export default History