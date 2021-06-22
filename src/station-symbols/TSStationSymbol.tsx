import { CSSProperties } from "react";
import GenericStationSymbol from "./GenericStationSymbol"


/**
 * Station symbols for Tokyo Subway
 *
 * Based on https://en.wikipedia.org/wiki/Template:Tokyo_Subway_Station_Numbering
 */
export class TSStationSymbol extends GenericStationSymbol {
    render() {
        const borderSpanStyle: CSSProperties = {
            display: "inline-block",
            position: "relative",
            margin: "1px",
            width: `calc(${this.size} * 3 / 4)`,
            height: `calc(${this.size} * 3 / 4)`,
            fontSize: `calc(${this.size} * 3 / 8)`,
            fontFamily: "sans-serif",
            lineHeight: "100%",
            verticalAlign: "middle",
            background: "#FFF",
            border: `calc(${this.size} / 8) solid`,
            borderRadius: "50%",
            borderColor: this.symbolColor
        }
        const lineSpanStyle: CSSProperties = {
            position: "absolute",
            top: this.line[1] && this.line[1][1]
                ? `calc(${this.size} / 25)` : `calc(${this.size} / 50)`,
            left: 0,
            width: `calc(${this.size} * 3 / 4)`,
            height: this.line[1] && this.line[1][1]
                ? `calc(${this.size} * 3 / 10)` : `calc(${this.size} * 8 / 25)`,
            fontSize: this.line[1] && this.line[1][1]
                ? `calc(${this.size} * 3 / 10)` : `calc(${this.size} * 8 / 25)`,
            fontWeight: "bold",
            lineHeight: this.line[1] && this.line[1][1]
                ? `calc(${this.size} * 3 / 10)` : `calc(${this.size} * 8 / 25)`,
            textAlign: "center",
            color: this.textColor
        }
        const numberSpanStyle: CSSProperties = {
            position: "absolute",
            bottom: `calc(${this.size} / 20)`,
            left: 0,
            width: `calc(${this.size} * 3 / 4)`,
            height: `calc(${this.size} * 19 / 50)`,
            fontSize: `calc(${this.size} * 19 / 50)`,
            fontWeight: "bold",
            lineHeight: `calc(${this.size} * 19 / 50)`,
            textAlign: "center",
            color: this.textColor
        }

        return (
            <div>
                <h1>TSStationSymbol Info</h1>
                <ul>
                    <li>Company: {this.line[0]}</li>
                    <li>Line: {this.line[1]}</li>
                    <li>Number: {this.number}</li>
                    <li>Symbol Color: {this.symbolColor}</li>
                    <li>Text Color: {this.textColor}</li>
                    <li>Size: {this.size}</li>
                </ul>
                <div className="station-symbol TS-station-symbol">
                    <span style={borderSpanStyle}>
                        <span style={lineSpanStyle}>{this.line[1]}</span>
                        <span style={numberSpanStyle}>{this.number}</span></span>
                </div>
            </div>
        )
    }
}


export default TSStationSymbol;
