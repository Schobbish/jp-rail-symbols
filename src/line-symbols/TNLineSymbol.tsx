import { CSSProperties } from "react";
import GenericLineSymbol from "./GenericLineSymbol";


/**
 * Line symbols for JR East
 *
 * Based on https://en.wikipedia.org/wiki/Template:JRE_Line_Symbol
 */
export class TNLineSymbol extends GenericLineSymbol {
    render(): JSX.Element {
        const outerBorderStyle: CSSProperties = {
            display: "inline-block",
            position: "relative",
            width: `calc(${this.height} * 21 / 25)`,
            height: `calc(${this.height} * 21 / 25)`,
            fontFamily: "sans-serif",
            fontWeight: "bold",
            textAlign: "center",
            color: this.textColor,
            verticalAlign: "middle",
            backgroundColor: "#FFF",
            border: `calc(${this.height} * 2 / 25) solid`,
            borderColor: this.lineColor,
            borderRadius: `calc(${this.height} * 3 / 20)`
        };
        const innerBorderStyle: CSSProperties = {
            position: "absolute",
            top: `calc(${this.height} * 3 / 50)`,
            left: `calc(${this.height} * 3 / 50)`,
            width: `calc(${this.height} * 16 / 25)`,
            height: `calc(${this.height} * 16 / 25)`,
            border: `calc(${this.height} * 2 / 50) solid #6EBE44`,
            borderRadius: `calc(${this.height} / 50)`
        };
        const lineSpanStyle: CSSProperties = {
            position: "absolute",
            top: `calc(${this.height} / 10)`,
            left: 0,
            width: `calc(${this.height} * 33 / 50)`,
            height: `calc(${this.height} * 11 / 25)`,
            fontSize: `calc(${this.height} * 11 / 25)`,
            lineHeight: `calc(${this.height} * 11 / 25)`,
            textAlign: "center",
            color: this.textColor
        };

        return (
            <div>
                <div className="line-symbol TN-line-symbol" style={outerBorderStyle}>
                    <span style={innerBorderStyle}>
                        <span style={lineSpanStyle}>NT</span>
                    </span>
                </div>
                {this.DebugInfo("TNLineSymbol")}
            </div>
        );
    }
}


export default TNLineSymbol;
