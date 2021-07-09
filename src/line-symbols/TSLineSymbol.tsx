import { CSSProperties } from "react";
import GenericLineSymbol from "./GenericLineSymbol";


/**
 * Line symbols for JR East
 *
 * Based on https://en.wikipedia.org/wiki/Template:JRE_Line_Symbol
 */
export class TSLineSymbol extends GenericLineSymbol {
    render(): JSX.Element {
        const borderStyle: CSSProperties = {
            display: "inline-block",
            position: "relative",
            width: `calc(${this.height} * 13 / 25)`,
            height: `calc(${this.height} * 13 / 25)`,
            fontSize: `calc(${this.height} * 2 / 5)`,
            fontFamily: "sans-serif",
            fontWeight: "bold",
            verticalAlign: "middle",
            textAlign: "center",
            color: this.textColor,
            backgroundColor: "#FFF",
            border: `calc(${this.height} * 6 / 25) solid`,
            borderRadius: "50%",
            borderColor: this.lineColor
        };
        const lineSpanStyle: CSSProperties = {
            position: "absolute",
            top: `calc(${this.height} * 3 / 50)`,
            left: 0,
            width: `calc(${this.height} * 13 / 25)`,
            height: `calc(${this.height} * 2 / 5)`,
            fontSize: this.line[1] && this.line[1][1] ? "80%" : "inherit",
            lineHeight: `calc(${this.height} * 2 / 5)`,
            textAlign: "center",
            whiteSpace: "nowrap"
        };

        return (
            <div>
                <div className="line-symbol TS-line-symbol" style={borderStyle}>
                    <span style={lineSpanStyle}>{this.line[1]}</span>
                </div>
                {this.DebugInfo("TSLineSymbol")}
            </div>
        );
    }
}


export default TSLineSymbol;
