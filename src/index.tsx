import * as React from "react";
import * as ReactDOM from "react-dom"; // eslint-disable-next-line
import $ from "jquery"              // jquery only needed for test website
import LineSymbol from "./LineSymbol";
import StationSymbol from "./StationSymbol";
import railData from "./rail-data"; // also only needed for test website

/**
 * Uses the values in the test website form to render a symbol
 *  Only needed for test website.
 *  Renders a line symbol only if the `number` field is set.
 */
function renderSymbolFromForm() {
    // only render if line is not other or other field has a value
    if ($("#line").val() !== "other" || $("#other-line").val()) {
        let symbolToRender: React.ReactElement;

        // clear node first
        ReactDOM.unmountComponentAtNode(document.getElementById("root")!);

        // decide between station and line symbol based on number field
        if ($("#number").val()) {
            symbolToRender = (
                <StationSymbol
                    line={`${$("#company").val()}:${$("#line").val() === "other" ? $("#other-line").val() : $("#line").val()}`}
                    number={parseInt(`${$("#number").val()}`)}
                    symbolColor={`${$("#symbol-color").val()}`}
                    textColor={`${$("#text-color").val()}`}
                    size={`${$("#size").val()}`}
                />
            )
        } else {
            symbolToRender = (
                <p>line symbol support coming later; please fill in station number</p>
            )
        }

        ReactDOM.render(symbolToRender, document.getElementById("root"))
    } else {
        alert("Line is required!");
    }
}

/**
 * Dynamically updates the choices for lines based on the selected company.
 *  Only needed for testing website.
 */
function updateLineChoices() {
    // empty current choices first
    $("#line").empty();

    // don't try if generic company is selected
    if ($("#company").val() !== "generic") {
        for (const line in railData[`${$("#company").val()}`].lines) {
            let lineData = railData[`${$("#company").val()}`].lines[line];

            // shinjuku line is default so it gets a `selected` attribute
            $("#line").append(`<option value="${line}" ${line === "S" ? "selected" : ""}>${line} - ${lineData.fullLineName}</option>`);
        }
    }
    // don't forget other option (even if generic is selected)
    $("#line").append("<option value=\"other\">Other...</option>");
}

$(() => {
    // dynamically create company options
    for (const company in railData) {
        // tokyo subway is the default choice so it gets a `selected` attribute
        $("#company").append(`<option value="${company}" ${company === "TS" ? "selected" : ""}>${company} - ${railData[company].fullCompanyName}</option>`);
    }
    $("#company").append("<option value=\"generic\">Generic</option>");

    // do these initially as well
    updateLineChoices();
    renderSymbolFromForm();

    $("#company").on("change", updateLineChoices);
    $("#submit").on("click", renderSymbolFromForm);
});
