export const railData: RailDataType = {
    ts: {
        fullCompanyName: "Tokyo Subway",
        lines: {
            c: { fullLineName: "Tokyo Metro Chiyoda Line", background: "#00BB85" },
            f: { fullLineName: "Tokyo Metro Fukutoshin Line", background: "#9C5E31" },
            g: { fullLineName: "Tokyo Metro Ginza Line", background: "#FF9500" },
            z: { fullLineName: "Tokyo Metro Hanz\u014Dmon Line", background: "#8F76D6" },
            h: { fullLineName: "Tokyo Metro Hibiya Line", background: "#B5B5AC" },
            m: { fullLineName: "Tokyo Metro Marunouchi Line", background: "#F62E36" },
            mb: { fullLineName: "Tokyo Metro Marunouchi Line Honancho Branch", background: "#F62E36" },
            n: { fullLineName: "Tokyo Metro Namboku Line", background: "#00AC9B" },
            t: { fullLineName: "Tokyo Metro Tozai Line", background: "#009BBF" },
            y: { fullLineName: "Tokyo Metro Y\u016Brakuch\u014D Line", background: "#C1A470" },
            a: { fullLineName: "Toei Asakusa Line", background: "#EC6E65" },
            i: { fullLineName: "Toei Mita Line", background: "#006CB6" },
            e: { fullLineName: "Toei \u014Cedo Line", background: "#CE045B" },
            s: { fullLineName: "Toei Shinjuku Line", background: "#B0C124" },
            sr: { fullLineName: "Saitama Rapid Railway Line", background: "#345CAA" }
        }
    },
    tn: {
        fullCompanyName: "Toei",
        lines: {
            all: { fullLineName: "Nippori-Toneri Liner", background: "#E53A7F"}
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
    background: string,
    color?: string
};

export default railData;
