import * as React from "react";
import * as ReactDOM from "react-dom"; // eslint-disable-next-line
import LineSymbol from "./LineSymbol";
import StationSymbol from "./StationSymbol";

// this is for testing only
ReactDOM.render(
    <React.StrictMode>
        <StationSymbol line="TS:H" number={7} size="10rem" />
    </React.StrictMode>,
    document.getElementById('root')
);
