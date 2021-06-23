// TODO: documentation for this
export const railData: RailDataType = {
    TS: {
        fullCompanyName: "Tokyo Subway",
        lines: {
            C: {
                fullLineName: "Tokyo Metro Chiyoda Line",
                symbolColor: "#00BB85",
                textColor: "#000"
            },
            F: {
                fullLineName: "Tokyo Metro Fukutoshin Line",
                symbolColor: "#9C5E31",
                textColor: "#000"
            },
            G: {
                fullLineName: "Tokyo Metro Ginza Line",
                symbolColor: "#FF9500",
                textColor: "#000"
            },
            Z: {
                fullLineName: "Tokyo Metro Hanz\u014Dmon Line",
                symbolColor: "#8F76D6",
                textColor: "#000"
            },
            H: {
                fullLineName: "Tokyo Metro Hibiya Line",
                symbolColor: "#B5B5AC",
                textColor: "#000"
            },
            M: {
                fullLineName: "Tokyo Metro Marunouchi Line",
                symbolColor: "#F62E36",
                textColor: "#000"
            },
            Mb: {
                fullLineName: "Tokyo Metro Marunouchi Line Honancho Branch",
                symbolColor: "#F62E36",
                textColor: "#000"
            },
            N: {
                fullLineName: "Tokyo Metro Namboku Line",
                symbolColor: "#00AC9B",
                textColor: "#000"
            },
            T: {
                fullLineName: "Tokyo Metro Tozai Line",
                symbolColor: "#009BBF",
                textColor: "#000"
            },
            Y: {
                fullLineName: "Tokyo Metro Y\u016Brakuch\u014D Line",
                symbolColor: "#C1A470",
                textColor: "#000"
            },
            A: {
                fullLineName: "Toei Asakusa Line",
                symbolColor: "#EC6E65",
                textColor: "#000"
            },
            I: {
                fullLineName: "Toei Mita Line",
                symbolColor: "#006CB6",
                textColor: "#000"
            },
            E: {
                fullLineName: "Toei \u014Cedo Line",
                symbolColor: "#CE045B",
                textColor: "#000"
            },
            S: {
                fullLineName: "Toei Shinjuku Line",
                symbolColor: "#B0C124",
                textColor: "#000"
            },
            SR: {
                fullLineName: "Saitama Rapid Railway Line",
                symbolColor: "#345CAA",
                textColor: "#000"
            }
        }
    },
    TN: {
        fullCompanyName: "Toei Nippori-Toneri Liner",
        lines: {
            all: {
                fullLineName: "Nippori-Toneri Liner",
                symbolColor: "#E53A7F",
                textColor: "#000"
            }
        }
    }
}
type RailDataType = {
    [companyAbbr: string]: CompanyDataType
}
type CompanyDataType = {
    fullCompanyName: string,
    lines: {
        [lineAbbr: string]: LineDataType
    }
}
type LineDataType = {
    fullLineName: string,
    symbolColor: string,
    textColor: string
};

export default railData;
