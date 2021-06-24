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
    /** Actual line color to use based on default value, props, and line. */
    lineColor: string;
    /** Actual text color to use based on default value, props, and line. */
    textColor: string;
    /** Actual height to use based on default value and props. */
    height: string;

    /** Constructor determines colors and height to use based on props. */
    constructor(props: T) {
        super(props);

        this.line = this.props.line.split(":");
        this.lineColor = this.props.lineColor ? this.props.lineColor : "#000";
        this.textColor = this.props.textColor ? this.props.textColor : "#FFF";
        this.height = this.props.height ? this.props.height : "1rem";

        let companyData = railData[this.line[0]];
        // if company is in railData and one of color props not assigned,
        // try "all" key then specified line
        if (companyData && (!this.props.lineColor || !this.props.textColor)) {
            let lineData = companyData.lines.all ? companyData.lines.all : companyData.lines[this.line[1]];

            // if something worked back there then overwrite colors
            if (lineData) {
                if (!this.props.lineColor)
                    this.lineColor = lineData.lineColor;
                if (!this.props.textColor)
                    this.textColor = lineData.textColor;
            }
        }
    }
}
export type RailSymbolProps = {
    /**
     * String representing the company and the line of the station.
     *  Must use format `<companyAbbr>:<lineAbbr>` (@see rail-data.ts ).
     *  JRE station symbols may have another component `stationAbbr` to render
     *  the station header used for major stations (@see JRStationSymbol ).
     *
     * In `StationSymbol` and `LineSymbol`, `companyAbbr` will determine which
     *  component is ultimately used to render the symbol. If omitted,
     *  `GenericStationSymbol` or `GenericLineSymbol`will be used.
     *
     * `lineAbbr` determines the letters shown on the symbol as well as its
     *  colors. The colors can usually be overwritten by props `lineColor` and
     *  `textColor`.
     */
    line: string,

    /**
     * CSS color value to assign to the background or border color.
     *  @default #000 or inferred from prop `line` (so this can overwrite that).
     *
     * Some symbols (mainly the ones for small companies) use more than one
     *  color, and only one (if any) of those colors can be overriden here.
     */
    lineColor?: string,

    /**
     * CSS color value to assign to the text color.
     *  @default #FFF or inferred from prop `line` (so this can overwrite that).
     *
     * If the line name and number are different colors, this prop determines
     *  the line name color.
     */
    textColor?: string,

    /** CSS length value to assign to the height of the symbol. @default 1rem */
    height?: string;
};


export default GeneralRailSymbol;
