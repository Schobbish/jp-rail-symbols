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
            width: `calc(${this.size} * 21 / 25)`,
            height: `calc(${this.size} * 21 / 25)`,
            fontFamily: "sans-serif",
            fontWeight: "bold",
            verticalAlign: "middle",
            backgroundColor: "#FFF",
            border: `solid calc(${this.size} * 2 / 25)`,
            borderColor: this.symbolColor
        };
        const lineBackgroundSpanStyle: CSSProperties = {
            position: "absolute",
            top: `calc(${this.size} * -1 / 25)`,
            left: `calc(${this.size} * -1 / 25)`,
            width: `calc(${this.size} * 23 / 25)`,
            height: `calc(${this.size} * 37 / 100)`,
            backgroundColor: this.symbolColor,
        };
        const lineSpanStyle: CSSProperties = {
            position: "absolute",
            top: `calc(${this.size} * -1 / 100)`,
            left: `calc(${this.size} * 13 / 100)`,
            width: `calc(${this.size} * 33 / 50)`,
            height: `calc(${this.size} * 17 / 50)`,
            fontSize: `calc(${this.size} * 17 / 50)`,
            lineHeight: `calc(${this.size} * 17 / 50)`,
            textAlign: "center",
            color: this.textColor
        };
        const numberSpanStyle: CSSProperties = {
            position: "absolute",
            bottom: `calc(${this.size} / 50)`,
            left: 0,
            width: `calc(${this.size} * 21 / 25)`,
            height: `calc(${this.size} * 12 / 25)`,
            fontSize: `calc(${this.size} * 3 / 5)`,
            lineHeight: `calc(${this.size} /2)`,
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
                <div className="debug-info" style={{ marginTop: "3rem" }}>
                    <h2>JRCStationSymbol Info</h2>
                    <ul>
                        <li>Full line string: {this.props.line}</li>
                        <li>Company: {this.line[0]}</li>
                        <li>Line: {this.line[1]}</li>
                        <li>Number: {this.number}</li>
                        <li>Symbol Color: {this.symbolColor}</li>
                        <li>Text Color: {this.textColor}</li>
                        <li>Size: {this.size}</li>
                    </ul>
                </div>
            </div>
        );
    }
}


export default JRCStationSymbol;
