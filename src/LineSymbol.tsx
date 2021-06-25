import lineSymbolsIndex from "./line-symbols";
import GenericLineSymbol from "./line-symbols/GenericLineSymbol";


/**
 * This special line symbol component chooses which company line symbol to
 *  use based on the `companyAbbr` component of prop `line`.
 *
 * If `companyAbbr` is omitted or is not in `lineSymbolsIndex`,
 *  `GenericLineSymbol` is selected.
 */
export class LineSymbol extends GenericLineSymbol {
    render(): JSX.Element {
        let SelectedLineSymbol = lineSymbolsIndex[this.line[0]]
            ? lineSymbolsIndex[this.line[0]] : lineSymbolsIndex.generic;

        return (
            <SelectedLineSymbol
                line={this.props.line}
                lineColor={this.props.lineColor}
                textColor={this.props.textColor}
                height={this.props.height}
            />
        );
    }
}


export default LineSymbol;
