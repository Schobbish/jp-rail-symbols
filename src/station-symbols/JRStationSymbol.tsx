import { CSSProperties } from "react";
import GenericStationSymbol from "./GenericStationSymbol";


/**
 * Station symbols for JR East
 *
 * The `line` prop may optionally have an additional component which specifies a
 *  station abbreviation to put on top of the symbol. This component is also
 *  separated by a colon. Note that symbols with a header station are normally
 *  150% taller than those without.
 *
 * Based on https://en.wikipedia.org/wiki/Template:JRE_Station_Numbering
 */
export class JRStationSymbol extends GenericStationSymbol {
    render(): JSX.Element {
        // decide whether to render header station or not
        // due to different heights, borderStyle, lineSpanStyle,
        // numberSpanStyle are slightly different (unfortunately).
        if (this.line[2]) {
            const headerBorderStyle: CSSProperties = {
                display: "inline-block",
                position: "relative",
                margin: "1px",
                width: `calc(${this.height} * 4 / 5)`,
                height: this.height,
                fontFamily: "sans-serif",
                fontSize: `calc(${this.height} * 1 / 5)`,
                fontWeight: "bold",
                lineHeight: "100%",
                textAlign: "center",
                verticalAlign: "middle",
                backgroundColor: "#000",
                borderRadius: `calc(${this.height} * 2 / 15)`
            };
            const stationSpanStyle: CSSProperties = {
                position: "absolute",
                top: `calc(${this.height} / 30)`,
                left: `calc(${this.height} / 15)`,
                width: `calc(${this.height} * 2 / 3)`,
                fontSize: "110%",
                color: "#FFF",
            };
            const borderStyle: CSSProperties = {
                position: "absolute",
                top: `calc(${this.height} * 4 / 15)`,
                left: `calc(${this.height} / 15)`,
                height: `calc(${this.height} * 8 / 15)`,
                width: `calc(${this.height} * 8 / 15)`,
                fontWeight: "bold",
                textAlign: "center",
                verticalAlign: "middle",
                background: "#FFF",
                border: `calc(${this.height} / 15) solid`,
                borderColor: this.lineColor,
                borderRadius: "10%"
            };
            const lineSpanStyle: CSSProperties = {
                position: "absolute",
                top: `calc(${this.height} / 75)`,
                left: 0,
                width: `calc(${this.height} * 8 / 15)`,
                height: `calc(${this.height} / 5)`,
                fontSize: `calc(${this.height} / 5)`,
                lineHeight: `calc(${this.height} / 5)`,
                textAlign: "center",
                color: this.textColor
            };
            const numberSpanStyle: CSSProperties = {
                position: "absolute",
                bottom: `calc(${this.height} / 75)`,
                left: 0,
                width: `calc(${this.height} * 8 / 15)`,
                height: `calc(${this.height} * 8 / 25)`,
                fontSize: `calc(${this.height} * 8 / 25)`,
                lineHeight: `calc(${this.height} * 8 / 25)`,
                textAlign: "center",
                color: this.textColor
            };
            return (
                <div>
                    <div
                        className="station-symbol JR-station-symbol JR-major-station-symbol"
                        style={headerBorderStyle}
                    >
                        <span style={stationSpanStyle}>{this.line[2]}</span>
                        <span style={borderStyle}>
                            <span style={lineSpanStyle}>{this.line[1]}</span>
                            <span style={numberSpanStyle}>{this.number}</span>
                        </span>
                    </div>
                    {this.DebugInfo("JRStationSymbol")}
                </div>
            );
        } else {
            const borderStyle: CSSProperties = {
                display: "inline-block",
                position: "relative",
                margin: "1px",
                height: `calc(${this.height} * 4 / 5)`,
                width: `calc(${this.height} * 4 / 5)`,
                fontFamily: "sans-serif",
                fontWeight: "bold",
                textAlign: "center",
                verticalAlign: "middle",
                background: "#FFF",
                border: `calc(${this.height} / 10) solid`,
                borderColor: this.lineColor,
                borderRadius: "10%"
            };
            const lineSpanStyle: CSSProperties = {
                position: "absolute",
                top: `calc(${this.height} / 50)`,
                left: 0,
                width: `calc(${this.height} * 4 / 5)`,
                height: `calc(${this.height} * 3 / 10)`,
                fontSize: `calc(${this.height} * 3 / 10)`,
                lineHeight: `calc(${this.height} * 3 / 10)`,
                textAlign: "center",
                color: this.textColor
            };
            const numberSpanStyle: CSSProperties = {
                position: "absolute",
                bottom: `calc(${this.height} / 50)`,
                left: 0,
                width: `calc(${this.height} * 4 / 5)`,
                height: `calc(${this.height} * 12 / 25)`,
                fontSize: `calc(${this.height} * 12 / 25)`,
                lineHeight: `calc(${this.height} * 12 / 25)`,
                textAlign: "center",
                color: this.textColor
            };
            return (
                <div>
                    <div className="station-symbol JR-station-symbol" style={borderStyle}>
                        <span style={lineSpanStyle}>{this.line[1]}</span>
                        <span style={numberSpanStyle}>{this.number}</span>
                    </div>
                    {this.DebugInfo("JRStationSymbol")}
                </div>
            );
        }
    }
}


export default JRStationSymbol;
