export const railData: { [key: string]: { [key: string]: LineDataType } } = {
    ts: {
        c: { background: "#00BB85" },
        f: { background: "#9C5E31" },
        g: { background: "#FF9500" },
        z: { background: "#8F76D6" },
        h: { background: "#B5B5AC" },
        m: { background: "#F62E36" },
        mb: { background: "#F62E36" },
        n: { background: "#00AC9B" },
        t: { background: "#009BBF" },
        y: { background: "#C1A470" },
        a: { background: "#EC6E65" },
        i: { background: "#006CB6" },
        e: { background: "#CE045B" },
        s: { background: "#B0C124" },
        sr: { background: "#345CAA" }
    },
    kq: {
        all: { background: "#0096D5" }
    }
}
type LineDataType = {
    background: string,
    color?: string
};

export default railData;
