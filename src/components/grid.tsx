import { useSelector } from "react-redux";
import { PirateState } from "../features/pirateSlice";
import GridRow from "./gridRow"
import LabelRow from "./labelRow";

function Grid() {
    const gridSize = useSelector((state: PirateState) => state.gridSize);

    return (<>
        <LabelRow gridSize={gridSize} />
        {
            Array.from({ length: gridSize }).map(function (e, i) {
                return <GridRow gridSize={gridSize} rowNum={i} key={i} />
            })
        }
    </>
    )
}

export default Grid