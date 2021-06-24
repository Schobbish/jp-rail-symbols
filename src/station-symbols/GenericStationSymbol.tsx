import { CSSProperties } from "react";
import { GeneralRailSymbol, RailSymbolProps } from "../GeneralRailSymbol";


/**
 * Boring default station symbol also used as base for other station symbols.
 *
 * Based on https://en.wikipedia.org/wiki/Template:RouteBox
 */
export class GenericStationSymbol extends GeneralRailSymbol<StationSymbolProps> {
    /** `this.props.number` formatted as two-digit string. */
    // this is also done for consistency so `this.props` is not needed anymore.
    number: string;

    /** Constructor only needed to set `this.number`. */
    constructor(props: StationSymbolProps) {
        super(props);

        this.number = this.props.number.toString().padStart(2, "0");
    }

    render(): JSX.Element {
        const backgroundSpanStyle: CSSProperties = {
            display: "inline",
            fontFamily: "sans-serif",
            fontSize: this.size,
            backgroundColor: this.lineColor,
            border: `0.1em solid`,
            borderColor: this.lineColor
        };
        const textSpanStyle: CSSProperties = {
            fontWeight: "bold",
            color: this.textColor,
            whiteSpace: "nowrap"
        };

        return (
            <div>
                <div className="station-symbol generic-station-symbol">
                    <span style={backgroundSpanStyle}>
                        &nbsp;
                        <span style={textSpanStyle}>{this.line[1] + this.number}</span>
                        &nbsp;
                    </span>
                </div>
                <div className="debug-info" style={{ marginTop: "3rem" }}>
                    <h2>GenericStationSymbol Info</h2>
                    <ul>
                        <li>Full line string: {this.props.line}</li>
                        <li>Company: {this.line[0]}</li>
                        <li>Line: {this.line[1]}</li>
                        <li>Number: {this.number}</li>
                        <li>Line Color: {this.lineColor}</li>
                        <li>Text Color: {this.textColor}</li>
                        <li>Size: {this.size}</li>
                    </ul>
                </div>
            </div>
        );
    }
}
// extend RailSymbolProps to require a station number
type StationSymbolProps = RailSymbolProps & {
    /** Two-digit number for the station (may need to be changed to string) */
    number: number;
};


export default GenericStationSymbol;
