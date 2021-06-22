import * as React from "react";
import stationSymbolsIndex from "./station-symbols";
import GenericStationSymbol from "./station-symbols/GenericStationSymbol";
import GeneralRailSymbol from "./GeneralRailSymbol";

export class StationSymbol extends GenericStationSymbol {
    render() {
        let SelectedCompanyStationSymbol = stationSymbolsIndex[this.line[0]];
        return(
            <SelectedCompanyStationSymbol
                line={this.props.line}
                number={this.props.number}
                background={this.props.background}
                color={this.props.color}
            />
        );
    }
}

export default StationSymbol;
