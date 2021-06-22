import * as React from "react";
import stationSymbolsIndex from "./station-symbols";
import GenericRailSymbol from "./GenericRailSymbol";

export class StationSymbol extends React.Component {
    render() {
        let ts = "generic"
        let Comp = stationSymbolsIndex[ts];
        return(
            <Comp line="ts:c" number={1}></Comp>
        );
    }
}

export default StationSymbol;
