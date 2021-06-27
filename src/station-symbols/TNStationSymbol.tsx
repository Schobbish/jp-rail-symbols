import { CSSProperties } from "react";
import GenericStationSymbol from "./GenericStationSymbol";


/**
 * Station symbols for Toei Nippori-Toneri Liner
 *
 * Based on https://en.wikipedia.org/wiki/Template:Toei_Nippori-toneri_Station_Numbering
 */
export class TNStationSymbol extends GenericStationSymbol {
    render(): JSX.Element {
        const outerborderStyle: CSSProperties = {
            display: "inline-block",
            position: "relative",
            width: `calc(${this.height} * 21 / 25)`,
            height: `calc(${this.height} * 21 / 25)`,
            fontFamily: "sans-serif",
            fontWeight: "bold",
            textAlign: "center",
            color: this.textColor,
            verticalAlign: "middle",
            border: `calc(${this.height} * 2 / 25) solid`,
            backgroundColor: "#FFF",
            borderColor: this.lineColor,
            borderRadius: `calc(${this.height} * 3 / 20)`
        };
        const innerBorderStyle: CSSProperties = {
            position: "absolute",
            top: `calc(${this.height} * 3 / 50)`,
            left: `calc(${this.height} * 3 / 50)`,
            width: `calc(${this.height} * 16 / 25)`,
            height: `calc(${this.height} * 16 / 25)`,
            backgroundColor: "#FFF",
            border: `calc(${this.height} * 2 / 50) solid #6EBE44`,
            borderRadius: `calc(${this.height} / 50`
        };
        const lineSpanStyle: CSSProperties = {
            position: "absolute",
            top: 0,
            left: 0,
            width: `calc(${this.height} * 16 / 25)`,
            height: `calc(${this.height} * 6 / 25)`,
            fontSize: `calc(${this.height} * 6 / 25)`,
            lineHeight: `calc(${this.height} * 6 / 25)`,
            textAlign: "center",
            color: this.textColor
        };
        const numberSpanStyle: CSSProperties = {
            position: "absolute",
            bottom: `calc(${this.height} / 80)`,
            left: 0,
            width: `calc(${this.height} * 16 / 25)`,
            height: `calc(${this.height} * 11 / 25)`,
            fontSize: `calc(${this.height} * 11 / 25)`,
            lineHeight: `calc(${this.height} * 11 / 25)`,
            color: this.textColor
        };

        return (
            <div>
                <div className="station-symbol TN-station-symbol" style={outerborderStyle}>
                    <span style={innerBorderStyle}>
                        <span style={lineSpanStyle}>NT</span>
                        <span style={numberSpanStyle}>{this.number}</span>
                    </span>
                </div>
                {this.DebugInfo("TNStationSymbol")}
            </div>
        );
    }
}


export default TNStationSymbol;
