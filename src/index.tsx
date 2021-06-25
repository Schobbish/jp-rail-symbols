import * as React from "react";
import * as ReactDOM from "react-dom";
import $ from "jquery";              // jquery only needed for test website
import LineSymbol from "./LineSymbol";
import StationSymbol from "./StationSymbol";
import railData from "./rail-data"; // also only needed for test website

/**
 * Gets the value of a `select` element, taking the "other" field into account.
 * Assuming that
 *  - The other `option` element has "other" as its value and
 *  - The other `input` element has id `other-<name>`
 * @param name The name/id of the `select` element.
 */
function getSelectValue(name: string): string {
    // use template to lazily force convert to string
    return `${$("#" + name).val() === "other"
        ? $("#other-" + name).val() : $("#" + name).val()}`;
}

/**
 * Uses the values in the test website form to render a symbol
 *  Only needed for test website.
 *  Renders a line symbol only if the `number` field is set.
 */
function renderSymbolFromForm(): void {
    // only render if line is not other or other field has a value
    if ($("#line").val() !== "other" || $("#other-line").val()) {
        let SymbolToRender: React.ReactElement;
        // build components of line prop
        let companyAbbr = getSelectValue("company");
        let lineAbbr = getSelectValue("line");
        let stationAbbr = "";
        // only fill in stationAbbr if JR is selected and station not none
        if ($("#company").val() === "JR" && $("#station").val() !== "none") {
            stationAbbr = ":" + getSelectValue("station");
        }

        // clear node first
        ReactDOM.unmountComponentAtNode(document.getElementById("root")!);

        // decide between station and line symbol based on number field
        if ($("#number").val()) {
            SymbolToRender = (
                <StationSymbol
                    line={`${companyAbbr}:${lineAbbr}${stationAbbr}`}
                    number={parseInt(`${$("#number").val()}`)}
                    lineColor={`${$("#line-color").val()}`}
                    textColor={`${$("#text-color").val()}`}
                    height={`${$("#height").val()}`}
                />
            );
        } else {
            SymbolToRender = (
                <LineSymbol
                    line={`${companyAbbr}:${lineAbbr}${stationAbbr}`}
                    lineColor={`${$("#line-color").val()}`}
                    textColor={`${$("#text-color").val()}`}
                    height={`${$("#height").val()}`}
                />
            );
        }

        ReactDOM.render(SymbolToRender, document.getElementById("root"));
    } else {
        alert("Line is required!");
    }
}

/**
 * Dynamically updates the choices for lines based on the selected company.
 *  Only needed for testing website.
 */
function updateLineChoices(): void {
    // empty current choices first
    $("#line").empty();

    // don't try if generic company is selected
    if ($("#company").val() !== "generic" && $("#company").val() !== "other") {
        for (const line in railData[`${$("#company").val()}`].lines) {
            let lineData = railData[`${$("#company").val()}`].lines[line];

            // yamanote line is default so it gets a `selected` attribute
            $("#line").append(`<option value="${line}" ${line === "JY" ? "selected" : ""}>${line} - ${lineData.fullLineName}</option>`);
        }
    }
    // don't forget other option (even if generic is selected)
    $("#line").append("<option value=\"other\">Other...</option>");
}

$(() => {
    // dynamically create company options
    for (const company in railData) {
        // jre is the default choice so it gets a `selected` attribute
        $("#company").append(`<option value="${company}" ${company === "JR" ? "selected" : ""}>${company} - ${railData[company].fullCompanyName}</option>`);
    }
    $("#company").append("<option value=\"generic\">Generic</option>");
    $("#company").append("<option value=\"other\">Other...</option>");

    // do these initially as well
    updateLineChoices();
    renderSymbolFromForm();

    $("#company").on("change", updateLineChoices);
    $("#submit").on("click", renderSymbolFromForm);
});

export { LineSymbol, StationSymbol };
