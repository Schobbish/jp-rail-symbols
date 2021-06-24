import GenericStationSymbol from "./GenericStationSymbol";
import JRCStationSymbol from "./JRCStationSymbol";
import JRStationSymbol from "./JRStationSymbol";
import TNStationSymbol from "./TNStationSymbol";
import TSStationSymbol from "./TSStationSymbol";

/** Big ol' object of all the available station symbols */
export const stationSymbolsIndex: { [companyAbbr: string]: typeof GenericStationSymbol; } = {
    generic: GenericStationSymbol,
    JR: JRStationSymbol,
    JRC: JRCStationSymbol,
    TN: TNStationSymbol,
    TS: TSStationSymbol,
};

export default stationSymbolsIndex;
