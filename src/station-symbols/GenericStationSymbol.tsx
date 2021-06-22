import * as React from "react";
import { GenericRailSymbol, RailSymbolProps } from "../GenericRailSymbol";


export class GenericStationSymbol extends GenericRailSymbol<StationSymbolProps> {
    render() {
        return (
            <div>
                <h1>STATION</h1>
                <ul>
                    <li>Company: {this.line[0]}</li>
                    <li>Line: {this.line[1]}</li>
                    <li>Number: {this.props.number}</li>
                    <li>Background: {this.background}</li>
                    <li>Color: {this.color}</li>
                    <li>Size: {this.size}</li>
                </ul>
            </div>
        );
    }
}
type StationSymbolProps = RailSymbolProps & {
    /** Two-digit number for the station (may need to be changed to string) */
    number: number
}


export default GenericStationSymbol;
