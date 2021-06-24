import stationSymbolsIndex from "./station-symbols";
import GenericStationSymbol from "./station-symbols/GenericStationSymbol";


/**
 * This special station symbol component chooses which company station symbol to
 *  use based on the `companyAbbr` component of prop `line`.
 *
 * If `companyAbbr` is omitted or is not in `stationSymbolsIndex`,
 *  `GenericStationSymbol` is selected.
 */
export class StationSymbol extends GenericStationSymbol {
    render(): JSX.Element {
        let SelectedStationSymbol = stationSymbolsIndex[this.line[0]]
            ? stationSymbolsIndex[this.line[0]] : stationSymbolsIndex.generic;

        return (
            <SelectedStationSymbol
                line={this.props.line}
                number={this.props.number}
                lineColor={this.props.lineColor}
                textColor={this.props.textColor}
                size={this.props.size}
            />
        );
    }
}


export default StationSymbol;
