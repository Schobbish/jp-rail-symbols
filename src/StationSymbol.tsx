import * as React from "react";
import stationSymbolsIndex from "./station-symbols";

export class StationSymbol extends React.Component {
    render() {
        let ts = "generic"
        let Comp = stationSymbolsIndex[ts];
        return(
            <Comp line="ts:c" number={0}></Comp>
        );
    }
}

export default StationSymbol;
