import GenericLineSymbol from "./GenericLineSymbol";

/** Big ol' object of all the available line symbols */
export const lineSymbolsIndex: { [companyAbbr: string]: typeof GenericLineSymbol; } = {
    generic: GenericLineSymbol,
};

export default lineSymbolsIndex;
