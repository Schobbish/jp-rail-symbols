import { CSSProperties } from "react";
import GenericLineSymbol from "./GenericLineSymbol";


/**
 * Line symbols for JR East
 *
 * Based on https://en.wikipedia.org/wiki/Template:JRE_Line_Symbol
 */
export class JRLineSymbol extends GenericLineSymbol {
    render(): JSX.Element {
        const borderStyle: CSSProperties = {
            display: "inline-block",
            position: "relative",
            width: `calc(${this.height} * 4 / 5)`,
            height: `calc(${this.height} * 4 / 5)`,
            fontSize: `calc(${this.height} / 2)`,
            fontFamily: "sans-serif",
            fontWeight: "bold",
            verticalAlign: "middle",
            color: this.textColor,
            backgroundColor: "#FFF",
            border: `calc(${this.height} / 10) solid`,
            borderRadius: "10%",
            borderColor: this.lineColor
        };
        const lineSpanStyle: CSSProperties = {
            position: "absolute",
            top: `calc(${this.height} * 3 / 20)`,
            left: 0,
            width: `calc(${this.height} * 4 / 5)`,
            height: `calc(${this.height} / 2)`,
            fontSize: this.line[1] && this.line[1][1] ? "80%" : "inherit",
            lineHeight: `calc(${this.height} / 2)`,
            textAlign: "center",
            whiteSpace: "nowrap"
        };

        return (
            <div>
                <div className="line-symbol JR-line-symbol" style={borderStyle}>
                    <span style={lineSpanStyle}>{this.line[1]}</span>
                </div>
                {this.DebugInfo("JRLineSymbol")}
            </div>
        );
    }
}


export default JRLineSymbol;
