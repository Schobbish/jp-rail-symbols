import GenericLineSymbol from "./GenericLineSymbol";
import JRLineSymbol from "./JRLineSymbol";

/** Big ol' object of all the available line symbols */
export const lineSymbolsIndex: { [companyAbbr: string]: typeof GenericLineSymbol; } = {
    generic: GenericLineSymbol,
    JR: JRLineSymbol
};

export default lineSymbolsIndex;
