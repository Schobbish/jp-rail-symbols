import * as React from "react";
import { railData } from "./rail-data";


/**
 * This class contains the shared functions for `GenericStationSymbol` and
 *  `GenericLineSymbol` (currently only the constructor).
 */
// https://stackoverflow.com/a/39124219 but lazy
export class GeneralRailSymbol<T extends RailSymbolProps> extends React.Component<T> {
    /** `this.props.line` separated into company (0) and line (1) components. */
    line: Array<string>;
    /** Actual symbol color to use based on default value, props, and line. */
    symbolColor: string;
    /** Actual text color to use based on default value, props, and line. */
    textColor: string;
    /** Actual size to use based on default value and props. */
    size: string;

    /** Constructor determines colors and size to use based on props. */
    constructor(props: T) {
        super(props);

        this.line = this.props.line.split(":", 2);
        this.symbolColor = this.props.symbolColor ? this.props.symbolColor : "#000";
        this.textColor = this.props.textColor ? this.props.textColor : "#FFF";
        this.size = this.props.size ? this.props.size : "1rem";

        let companyData = railData[this.line[0]];
        // if company is in railData and one of color props not assigned,
        // try "all" key then specified line
        if (companyData && (!this.props.symbolColor || !this.props.textColor)) {
            let lineData = companyData.lines.all ? companyData.lines.all : companyData.lines[this.line[1]];

            // if something worked back there then overwrite colors
            if (lineData) {
                if (!this.props.symbolColor)
                    this.symbolColor = lineData.symbolColor;
                if (!this.props.textColor)
                    this.textColor = lineData.textColor;
            }
        }
    }
}
export type RailSymbolProps = {
    /**
     * String representing the company and the line of the station.
     * Must use format `<companyAbbr>:<lineAbbr>` (@see rail-data.ts ).
     *
     * In `StationSymbol` and `LineSymbol`, `companyAbbr` will determine which
     *  component is ultimately used to render the symbol. If omitted,
     *  `GenericStationSymbol` or `GenericLineSymbol`will be used.
     *
     * `lineAbbr` determines the letters shown on the symbol as well as its
     *  colors. The colors can usually be overwritten by props `symbolColor` and
     *  `textColor`.
     */
    line: string,

    /**
     * CSS color value to assign to the background or border color.
     *  @default #000 or inferred from prop `line` (so this can overwrite that).
     *
     * Some symbols (mainly the ones for small companies) use custom or more
     *  complex backgrounds, and those can't be overriden here.
     */
    symbolColor?: string,

    /**
     * CSS color value to assign to the text color.
     *  @default #FFF or inferred from prop `line` (so this can overwrite that).
     */
    textColor?: string,

    /** CSS length value to assign to the height of the symbol. @default 1rem */
    size?: string
}


export default GeneralRailSymbol;
