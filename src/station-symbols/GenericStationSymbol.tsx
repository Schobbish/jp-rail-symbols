import * as React from "react";
import { railData } from "../railData";


export class GenericStationSymbol extends React.Component<StationSymbolProps> {
    /** Part before 1st colon is the company; rest is the line */
    line: Array<string>;
    background: string;
    color: string;
    size: string;

    constructor(props: StationSymbolProps) {
        super(props);

        this.line = this.props.line.split(":");
        this.background = this.props.background ? this.props.background : "#000";
        this.color = this.props.color ? this.props.color : "#FFF";
        this.size = this.props.size ? this.props.size : "1rem";

        let companyData = railData[this.line[0]];
        if (companyData && (!this.props.background || !this.props.color)) {
            // if company is in railData and both background and color props not assigned,
            // try "all" key then specified line
            let lineData = companyData.all ? companyData.all : companyData[this.line[1]];

            if (lineData) {
                // if something worked back there then overwrite background and color
                if (!this.props.background)
                    this.background = lineData.background;
                if (!this.props.color && lineData.color)
                    this.color = lineData.color;
            }
        }
    }
    render() {
        return (
            <ul>
                <li>Company: {this.line[0]}</li>
                <li>Line: {this.line[1]}</li>
                <li>Background: {this.background}</li>
                <li>Color: {this.color}</li>
                <li>Size: {this.size}</li>
            </ul>
        );
    }
}
type StationSymbolProps = {
    /** String representing the company and the line of the station */
    line: string,
    /** Two-digit number for the station (may need to be changed to string) */
    number: number,
    /** CSS value to assign the background @default #000 or inferred from `line` */
    background?: string,
    /** CSS color value to assign the text color @default #FFF or inferred from `line` */
    color?: string,
    /** CSS length value to assign the height of the symbol @default 1rem */
    size?: string
}


export default GenericStationSymbol;
