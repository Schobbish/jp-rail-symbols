import { CSSProperties } from "react";
import GenericStationSymbol from "./GenericStationSymbol";


/**
 * Station symbols for JR Central
 *
 * Based on https://en.wikipedia.org/wiki/Template:JRC_Station_Numbering
 */
export class JRCStationSymbol extends GenericStationSymbol {
    render(): JSX.Element {
        const borderSpanStyle: CSSProperties = {
            display: "inline-block",
            position: "relative",
            width: `calc(${this.height} * 21 / 25)`,
            height: `calc(${this.height} * 21 / 25)`,
            fontFamily: "sans-serif",
            fontWeight: "bold",
            verticalAlign: "middle",
            backgroundColor: "#FFF",
            border: `solid calc(${this.height} * 2 / 25)`,
            borderColor: this.lineColor
        };
        const lineBackgroundSpanStyle: CSSProperties = {
            position: "absolute",
            top: `calc(${this.height} * -1 / 25)`,
            left: `calc(${this.height} * -1 / 25)`,
            width: `calc(${this.height} * 23 / 25)`,
            height: `calc(${this.height} * 37 / 100)`,
            backgroundColor: this.lineColor,
        };
        const lineSpanStyle: CSSProperties = {
            position: "absolute",
            top: `calc(${this.height} * -1 / 100)`,
            left: `calc(${this.height} * 13 / 100)`,
            width: `calc(${this.height} * 33 / 50)`,
            height: `calc(${this.height} * 17 / 50)`,
            fontSize: `calc(${this.height} * 17 / 50)`,
            lineHeight: `calc(${this.height} * 17 / 50)`,
            textAlign: "center",
            color: this.textColor
        };
        const numberSpanStyle: CSSProperties = {
            position: "absolute",
            bottom: `calc(${this.height} / 50)`,
            left: 0,
            width: `calc(${this.height} * 21 / 25)`,
            height: `calc(${this.height} * 12 / 25)`,
            fontSize: `calc(${this.height} * 3 / 5)`,
            lineHeight: `calc(${this.height} /2)`,
            textAlign: "center",
            color: "#000"
        };

        return (
            <div>
                <div className="station-symbol TN-station-symbol">
                    <span style={borderSpanStyle}>
                        <span style={lineBackgroundSpanStyle}>
                            <span style={lineSpanStyle}>{this.line[1]}</span>
                        </span>
                        <span style={numberSpanStyle}>{this.number}</span>
                    </span>
                </div>
                {this.DebugInfo("JRCStationSymbol")}
            </div>
        );
    }
}


export default JRCStationSymbol;
