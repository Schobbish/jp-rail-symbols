import GenericStationSymbol from "./GenericStationSymbol";
import TSStationSymbol from "./TSStationSymbol";

/** Big ol' object of all the available station symbols */
export const stationSymbolsIndex: { [key: string]: typeof GenericStationSymbol } = {
    generic: GenericStationSymbol,
    TS: TSStationSymbol
}

export default stationSymbolsIndex;
