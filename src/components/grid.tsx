import GridRow from "./gridRow"

interface gridProps {
    size: number,
}

function Grid({ size }: gridProps) {
    return (<>
        {
            Array.from({ length: size }).map(function (e, i) {
                return <GridRow size={size} />
            })
        }
    </>
    )
}

export default Grid