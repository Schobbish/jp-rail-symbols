import GenericLineSymbol from "./GenericLineSymbol";
import JRCLineSymbol from "./JRCLineSymbol";
import JRLineSymbol from "./JRLineSymbol";
import TNLineSymbol from "./TNLineSymbol";
import TSLineSymbol from "./TSLineSymbol";

/** Big ol' object of all the available line symbols */
export const lineSymbolsIndex: { [companyAbbr: string]: typeof GenericLineSymbol; } = {
    generic: GenericLineSymbol,
    JRC: JRCLineSymbol,
    JR: JRLineSymbol,
    TN: TNLineSymbol,
    TS: TSLineSymbol
};

export default lineSymbolsIndex;
