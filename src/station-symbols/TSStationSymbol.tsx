import { CSSProperties } from "react";
import GenericStationSymbol from "./GenericStationSymbol";


/**
 * Station symbols for Tokyo Subway
 *
 * Based on https://en.wikipedia.org/wiki/Template:Tokyo_Subway_Station_Numbering
 */
export class TSStationSymbol extends GenericStationSymbol {
    render(): JSX.Element {
        const borderSpanStyle: CSSProperties = {
            display: "inline-block",
            position: "relative",
            margin: "1px",
            width: `calc(${this.height} * 3 / 4)`,
            height: `calc(${this.height} * 3 / 4 - 2px)`, // off by 2px somehow
            fontSize: `calc(${this.height} * 3 / 8)`,
            fontFamily: "sans-serif",
            lineHeight: "100%",
            verticalAlign: "middle",
            backgroundColor: "#FFF",
            border: `calc(${this.height} / 8) solid`,
            borderRadius: "50%",
            borderColor: this.lineColor
        };
        const lineSpanStyle: CSSProperties = {
            position: "absolute",
            top: this.line[1] && this.line[1][1]
                ? `calc(${this.height} / 25)` : `calc(${this.height} / 50)`,
            left: 0,
            width: `calc(${this.height} * 3 / 4)`,
            height: this.line[1] && this.line[1][1]
                ? `calc(${this.height} * 3 / 10)` : `calc(${this.height} * 8 / 25)`,
            fontSize: this.line[1] && this.line[1][1]
                ? `calc(${this.height} * 3 / 10)` : `calc(${this.height} * 8 / 25)`,
            fontWeight: "bold",
            lineHeight: this.line[1] && this.line[1][1]
                ? `calc(${this.height} * 3 / 10)` : `calc(${this.height} * 8 / 25)`,
            textAlign: "center",
            color: this.textColor
        };
        const numberSpanStyle: CSSProperties = {
            position: "absolute",
            bottom: `calc(${this.height} / 20)`,
            left: 0,
            width: `calc(${this.height} * 3 / 4)`,
            height: `calc(${this.height} * 19 / 50)`,
            fontSize: `calc(${this.height} * 19 / 50)`,
            fontWeight: "bold",
            lineHeight: `calc(${this.height} * 19 / 50)`,
            textAlign: "center",
            color: this.textColor
        };

        return (
            <div>
                <div className="station-symbol TS-station-symbol">
                    <span style={borderSpanStyle}>
                        <span style={lineSpanStyle}>{this.line[1]}</span>
                        <span style={numberSpanStyle}>{this.number}</span></span>
                </div>
                <div className="debug-info" style={{ marginTop: "3rem" }}>
                    <h2>TSStationSymbol Info</h2>
                    <ul>
                        <li>Full line string: {this.props.line}</li>
                        <li>Company: {this.line[0]}</li>
                        <li>Line: {this.line[1]}</li>
                        <li>Number: {this.number}</li>
                        <li>Line Color: {this.lineColor}</li>
                        <li>Text Color: {this.textColor}</li>
                        <li>Height: {this.height}</li>
                    </ul>
                </div>
            </div>
        );
    }
}


export default TSStationSymbol;
