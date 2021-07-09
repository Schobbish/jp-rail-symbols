import { CSSProperties } from "react";
import GenericLineSymbol from "./GenericLineSymbol";


/**
 * Line symbols for JR Central
 *
 * Based on JR East but without a white background
 */
export class JRCLineSymbol extends GenericLineSymbol {
    render(): JSX.Element {
        const borderStyle: CSSProperties = {
            display: "inline-block",
            position: "relative",
            width: `calc(${this.height} * 9 / 10)`,
            height: `calc(${this.height} * 9 / 10)`,
            fontSize: `calc(${this.height} * 3 / 4)`,
            fontFamily: "sans-serif",
            fontWeight: "bold",
            verticalAlign: "middle",
            color: this.textColor,
            backgroundColor: this.lineColor,
            border: `calc(${this.height} / 20) solid`,
            borderColor: this.lineColor
        };
        const lineSpanStyle: CSSProperties = {
            position: "absolute",
            top: `calc(${this.height} * 4 / 20)`,
            left: 0,
            width: `calc(${this.height} * 9 / 10)`,
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
                {this.DebugInfo("JRCLineSymbol")}
            </div>
        );
    }
}


export default JRCLineSymbol;
