import { useSelector } from "react-redux"
import { PirateState } from "../features/pirateSlice"

function History() {
    const hist = useSelector((state: PirateState) => state.history);
    return (
        <div className="history">
            {
                hist.slice(1,hist.length).map((elm, i) => {
                    return <div key={i}>{elm.x}{elm.y}</div>
                })
            }
        </div>
    )
}

export default History