import GenericStationSymbol from "./GenericStationSymbol";
import JRCStationSymbol from "./JRCStationSymbol";
import TNStationSymbol from "./TNStationSymbol";
import TSStationSymbol from "./TSStationSymbol";

/** Big ol' object of all the available station symbols */
export const stationSymbolsIndex: { [key: string]: typeof GenericStationSymbol; } = {
    generic: GenericStationSymbol,
    JRC: JRCStationSymbol,
    TN: TNStationSymbol,
    TS: TSStationSymbol,
};

export default stationSymbolsIndex;
