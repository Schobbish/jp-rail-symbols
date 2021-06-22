import * as React from "react";
import * as ReactDOM from "react-dom";
import LineSymbol from "./LineSymbol";
import StationSymbol from "./StationSymbol";

// this is for testing only
ReactDOM.render(
    <React.StrictMode>
        <StationSymbol line="ts" number={0}></StationSymbol>
    </React.StrictMode>,
    document.getElementById('root')
);
