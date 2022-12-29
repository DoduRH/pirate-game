import { useSelector } from "react-redux";
import { PirateState } from "../features/pirateSlice";
import GridRow from "./gridRow"

function Grid() {
    const size = useSelector((state: PirateState) => state.gridSize);

    return (<>
        {
            Array.from({ length: size }).map(function (e, i) {
                return <GridRow size={size} rowNum={i} key={i} />
            })
        }
    </>
    )
}

export default Grid