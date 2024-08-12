const input = [
    "FBFFBFFRLL",
    "BFFFFBBRLR",
    "FFFBBBBRLR",
    "FBFFFBFLRL",
    "FFBFBFFRRL",
    "FFBBBBFRRR",
    "FBFFBFBLRR",
    "FFBBFBFRRL",
    "FFFFBBFRRL",
    "BFBBBBBLLL",
    "FFBFBFBLLL",
    "FFBFFFBLLL",
    "FBBBFBFRLL",
    "BBFFFBFRRR",
    "FFFBFBBLLR",
    "FBFBFBFRRR",
    "BBFFBFBRLL",
    "FBFBBBBLRL",
    "FBFFFFFLLL",
    "BFFFFFFRLL",
    "BFFFBFBLRL",
    "BFBBBFBRRL",
    "BFFFBFFRRL",
    "FBFFFFFRRR",
    "FFBBBBBLLR",
    "BFBBFFBLRL",
    "FBBFBBBRLR",
    "BFBFBFFRLL",
    "BFBFBFBRLL",
    "BFFBFBFLLL",
    "FFBBFFBLRL",
    "FBBFFBFLRR",
    "FBBBFBBRRR",
    "BFBFFBFRLR",
    "BFBBBFBLLL",
    "FFBFBBBLRR",
    "BFBFFBFLLL",
    "FBFBFBBLLL",
    "BFBBBFBLRL",
    "FBFBFBFLRL",
    "FFBFFBFRRL",
    "FBBFFBFLLL",
    "BFBBBBBLRL",
    "FBBBBBFRLR",
    "BFFFBBFRLL",
    "FBBBBFFLLR",
    "FBBBBBFRLL",
    "BFBBBFFRLR",
    "BFBBBFBRLL",
    "BFFFBFFLLL",
    "FFFBFBFLRL",
    "BFFBBFFLRL",
    "BBFFFBFRLL",
    "BFBBFFBRLR",
    "BFBFBFBRRL",
    "BBFFFBFRRL",
    "FBBFBBBLRR",
    "FFBFBBBLLL",
    "BFFFBFBRLR",
    "FFBBFBBLLL",
    "FBFBBFBLLL",
    "BFBBFBFLLR",
    "FFBFBBBRRL",
    "FFBFFFFLRL",
    "FFFBBFFLRR",
    "FBBBBBFRRR",
    "FFFFBBBRLL",
    "BFBFBBBRRR",
    "BBFFBFBRRL",
    "FBFBBFFRLR",
    "FBBFFBFRRR",
    "BBFFBFBRRR",
    "FBFBBFBLRR",
    "FBBFFBBLRR",
    "FBBBBFFRLL",
    "BFBFFFBRLR",
    "FBFBBFBRRL",
    "FFBFBBFRRR",
    "FBFBFFFRLL",
    "BFBBFFBLLR",
    "FBFFFFBRLR",
    "BFBBBFFRLL",
    "FFBBFFBRLR",
    "FFFBBFBRLL",
    "FBBBBBBLRR",
    "FBFFBBBLRR",
    "BFFFFBFLRL",
    "BBFFFFFLRR",
    "BFFBFFBLLR",
    "FFBBBFFRLL",
    "BFBFBFBRLR",
    "FBBFBFBLRR",
    "FBFBBBFRLR",
    "FBFFBBBRRR",
    "FBBFFBFRLL",
    "FBBBFFFRLR",
    "BFBBBBFLLR",
    "BFFFBFFLLR",
    "FFBFFFBRRR",
    "FBFFFBFLLR",
    "FFFFBBBLLR",
    "BFBFFFBRLL",
    "BFFBBFBLRL",
    "BFFBFBFLLR",
    "FFBFFBFRLR",
    "BFBFFFBRRL",
    "FFBBFBFLLL",
    "BFBBBBBRLR",
    "BFBFBFBLRR",
    "FBFFBFBLLR",
    "FBFBFBBRRL",
    "BFBFBBBLLL",
    "FFBBFBBLRL",
    "FBFFFBFRRL",
    "BFBBFFFLRR",
    "BFBFBBFRRR",
    "FBFFFFBLRL",
    "BBFFBBFRRR",
    "FFBFFBBRLR",
    "FBBFBFBLRL",
    "BFBFFFBRRR",
    "FFFBBBFLRL",
    "BFFBFFBRLL",
    "FBFBFFBLRR",
    "FFBFBBFLLL",
    "FFBBBFFLRL",
    "FFBBFFFRLR",
    "BBFFBFBLRL",
    "FFFFBBFRLR",
    "FFFBFFBLRR",
    "BFFBBBFLLR",
    "BFFFBBBRRL",
    "FBBFBFBRLL",
    "BFFBFFFRRR",
    "BBFFFFFLRL",
    "BBFFFBBRLL",
    "BFFFBBBRRR",
    "BFFFBBBLRL",
    "BBFFBFFRRR",
    "BFFBFFBLRL",
    "FBBBBFBRLR",
    "FFFBFBFRRL",
    "BFFBBBBRRL",
    "FBBBBBFLRR",
    "FBFBBBBLLR",
    "FBBBBFBLRR",
    "FFFBFFBRLL",
    "FFBBBBFLLR",
    "FFBBBBBRRL",
    "FBBFFFFLLL",
    "FBFFBBBRLL",
    "FBFBFFBLLR",
    "FBBBBBFRRL",
    "BFFFBFBLLL",
    "FFFBFFFLRL",
    "FFFFBBFRLL",
    "BFBBFFFRLR",
    "BFFFBBBRLR",
    "FFBBBFBLLR",
    "BFFFBFBRRR",
    "BFFBFBBLRL",
    "FFBFBFBLRR",
    "FBBBBFBRRR",
    "FFBFBFFLLR",
    "BBFFFFFLLR",
    "FBBBFBFRRR",
    "BBFFFFBRRL",
    "FBFBFBBLRL",
    "BFBBBFFLLR",
    "BBFFBBFLRL",
    "BFBFFBBRLR",
    "FBFBBBFRRL",
    "FBBBFFBRLL",
    "BBFFFFBLLR",
    "FFBBFBBLRR",
    "FBBBBBBRLR",
    "FFFFBBBRRL",
    "FBFBBBBRLR",
    "BBFFBFFRRL",
    "FBBBFFBLRL",
    "FFBBBFBLRR",
    "BFBFBBBRLL",
    "FBFFFBBLRL",
    "FBFBBBBRLL",
    "BBFFFBBLLL",
    "BFBBFFBLLL",
    "BFFBBBBRRR",
    "FBFBFFBLLL",
    "FBFBFBFRRL",
    "FBBFFFBLLL",
    "BBFFFBFRLR",
    "FBBBBFFLRR",
    "FBFFFBBRLL",
    "FFBBFBFRRR",
    "FBFFFFFLRR",
    "BFBFFBBLRR",
    "FFBFBFFRRR",
    "BFBFFBBRLL",
    "FBBFFFFRRL",
    "BFFBBFBRLL",
    "BFFFFFBLLR",
    "FBFBBFBLLR",
    "BFFBBFBRLR",
    "BFFBFBFRRR",
    "FFBFBBFRLL",
    "FFFBBBBLRR",
    "BFFFBFBLLR",
    "FBBBBFBLRL",
    "FBFBBFFLRL",
    "FFFBFFFRLL",
    "BFFFFBBRRL",
    "FBBFFFBRRR",
    "FBBFBFFLLR",
    "BFBBBBBRRR",
    "BFFBFBFRLL",
    "FFBFBBFRRL",
    "BFBFBFBLLR",
    "FFBFBBFLLR",
    "FFBFFFFLRR",
    "FBBBFBBRRL",
    "BFFBFBFRLR",
    "BFFBFFBRRL",
    "BFBBBFBRLR",
    "BBFFFFBLRL",
    "FBBBFFBRRL",
    "FBFFFBBRRL",
    "FBBBBBBLLL",
    "FFFBFFBLLL",
    "BFBBFBFRLL",
    "FBFBFFBRLR",
    "FFFFBBBRRR",
    "BBFFFBBRLR",
    "BFBBBBFRLR",
    "FBFFBBFLRR",
    "BFFFBFFRLR",
    "FFFBBBBLLR",
    "FBFFFFBLRR",
    "FBFBFBBRLL",
    "FBFFBBBRLR",
    "BFFFFFFLRR",
    "FBFFFFFRLL",
    "FFBFBFFRLL",
    "FFFBBFFRLR",
    "FBBFBFFRRL",
    "FBBBBBBRRR",
    "BFBFBBBLRL",
    "BBFFFFBRRR",
    "FFBFFBBLRL",
    "FBBBBBBLLR",
    "FFBBFFFLRL",
    "FBBBFBBLRR",
    "FFBBBBBRLR",
    "BFBFFFFLLR",
    "BFFBBBBRLL",
    "BFBFBFFLRL",
    "FBBFFFBLRL",
    "BFBFBBBRRL",
    "BFBFBFBLRL",
    "BFBBFBFLRR",
    "BFFFFBFRLR",
    "BFFFBFBRLL",
    "FBFBFBFLLL",
    "FBFFBFFLRL",
    "BFFFFFFRRL",
    "FBBFBFFRLR",
    "FFBBBFFLLR",
    "FBBBBFFLRL",
    "FBBBFBBRLR",
    "BFBBBFFLRL",
    "FBFFBBBLRL",
    "BFFFFBFRRL",
    "BFFFBFFLRR",
    "FFBFBBFLRL",
    "BFBFFFBLRL",
    "BFFFFFBLLL",
    "FBFFBFBLLL",
    "FBFBBBBRRL",
    "FBBFFBBRLR",
    "BFFFBBFRRL",
    "BFBBFBBRLR",
    "FFFBFBBLRR",
    "FFFBFBFRLR",
    "FBFBFBFRLR",
    "BFBFBBBRLR",
    "BFFFFBBLLL",
    "BFFBBFBRRR",
    "BFFBBBFLLL",
    "FFBBBFFRRL",
    "BFBBBFBLLR",
    "FBBFFBBLLR",
    "FBBFBBFLRL",
    "BFFFFFBRRR",
    "FBBBFBBRLL",
    "FBFBFFBRRR",
    "BFFBBBFRRR",
    "FBBBBBBLRL",
    "FFBBBFFLRR",
    "BFFBBBFRLL",
    "BBFFBBFRLL",
    "FBBFBBFRLR",
    "BFBFBFFRRR",
    "BFBFBBFLRL",
    "BFFFFBFRLL",
    "FFBBFBFLLR",
    "BFFBFBBLRR",
    "FBFFBBBRRL",
    "FBBFBBFRLL",
    "FBFFFBBLLR",
    "FFFBBBBRRR",
    "FFFFBBBLRL",
    "FFBBFFFRRL",
    "BFFBBFFRRL",
    "BFFFBBFLRL",
    "BFFFFBBLRR",
    "BBFFBBBLRR",
    "BFBFFFFLRR",
    "FBFBBBBLLL",
    "BBFFFBBLRR",
    "FFFBFBFLRR",
    "FBBFFFFLRL",
    "FFBBBBFRLL",
    "FBFFBFBLRL",
    "BFBBFBBLLL",
    "FBBFBBFLLL",
    "FFBFFBBRLL",
    "BFBFFFFRLR",
    "FBFFBBFRRR",
    "FFFBBFFRRR",
    "FFFBFFBRLR",
    "FBBBBBFLLL",
    "FBBBFFFLRL",
    "FFBBFFFLRR",
    "FFFBBBBRRL",
    "BFBFBBFRLL",
    "BFBFFBBRRL",
    "FBBFBBFRRL",
    "BFBFBBFLLR",
    "BBFFBBBRRR",
    "BFFFBBFRLR",
    "FFFBBBFRLR",
    "BFFBFFFRLL",
    "BFBFFFFRRL",
    "FFBBFFFLLL",
    "FBFBBBBLRR",
    "FBFBFFFLRR",
    "BBFFBFFLRR",
    "FBBBFBBLRL",
    "BFBFBFBLLL",
    "FBFBFFFLLR",
    "BFFBBFBLRR",
    "FBBFFFBRRL",
    "BFFBBFFRRR",
    "FBBFBBBRRL",
    "BFFFFBBLLR",
    "FFBBBBFLLL",
    "BFFBFFBRRR",
    "BFFFFBFRRR",
    "FFFBBBFRRR",
    "FBFBFFFRLR",
    "FBBBFBFLLR",
    "FFBBFFBRLL",
    "FBFBFFFLLL",
    "BFFBFBFRRL",
    "BFBFFBFRRL",
    "BFBBBBFLLL",
    "FBBBFBFRRL",
    "FFBFBFFLLL",
    "BFBBFFFRRL",
    "FFBBFFBLLR",
    "BFFBBBBRLR",
    "FFBBBBBLRR",
    "BFFBFFFRRL",
    "BFFBFBBRLL",
    "FBBBFBFRLR",
    "FBBFFFFLRR",
    "BFFFBBFLLR",
    "FFFBBFBRRL",
    "FFBBFFBLRR",
    "FBBFFFBRLR",
    "BFBBBBBRLL",
    "BBFFFFFRRL",
    "FFBFFBBRRL",
    "BFBFFBFLLR",
    "FBFBBBFLLL",
    "FBFFFFFRRL",
    "BFFFBFBLRR",
    "FBFFFFBLLR",
    "FBBFBFBRRR",
    "FBBBFFFLLR",
    "BBFFBFBLRR",
    "BBFFFBFLLL",
    "FBFFFBFRLR",
    "BFFFBFFLRL",
    "BBFFBFFLRL",
    "BFFFFFFLLR",
    "BBFFBBBLLL",
    "FFBFBBBLLR",
    "FBBFBBBLRL",
    "BFBBFBBLRR",
    "FFBFBFBLLR",
    "FFBFBFBRRL",
    "BFBBFBBRRL",
    "BFFBFFFLLR",
    "FFBBFFBRRL",
    "BBFFBBBRRL",
    "FFFBBFBRLR",
    "BFBBFBFRRR",
    "BFFFFFFRRR",
    "FBBBFFBLLL",
    "BFBFFFFLLL",
    "BBFFBFBLLR",
    "BFBFBBFRLR",
    "FFBFBBBRRR",
    "BFFFBBFLLL",
    "FBFFBBFRLL",
    "FFBBFBFRLL",
    "BFBFBBBLLR",
    "FBBFBFBLLL",
    "BBFFFFBRLL",
    "BBFFBFBLLL",
    "BFFBFFBLRR",
    "BFFBBFBLLL",
    "FFBFFFBLRR",
    "FBBFFBFRRL",
    "FBBBBFBLLL",
    "FFBFFBBLLR",
    "BFFBBBFLRR",
    "FBFBFFBRLL",
    "FFBFFFBRLL",
    "FFBFFBFLLL",
    "FBFBBFBLRL",
    "FBBFBFFRRR",
    "BFBFBFFLLR",
    "FBBFFFBLLR",
    "BFBBBBFRRR",
    "FBBFBBFRRR",
    "BBFFBFFRLR",
    "FBFBBBFRLL",
    "FBBFBBBLLR",
    "BFFFFFFLRL",
    "BFBFFBBRRR",
    "BFFFBFFRLL",
    "BFBBFBFLRL",
    "FFBFFFFRRR",
    "BFFBBFFRLR",
    "FBBBBBFLLR",
    "FBFBFFBLRL",
    "FFFBBFBLLR",
    "FBBFBFBLLR",
    "FFFBFFBRRR",
    "FBFFFFFRLR",
    "FBFBBFBRLR",
    "FBBBFBFLRR",
    "FBFBBBFLRL",
    "BFFBFFFLRL",
    "FFBBBFFRRR",
    "FFBBBBBLLL",
    "FBFFBBFLLR",
    "FFBFBFFLRR",
    "FFFBBBFLRR",
    "BFBFBBFLLL",
    "BBFFBFFLLR",
    "FFBBFBBRLL",
    "FBBFFBBLLL",
    "FBFFBFBRLL",
    "BFBFBFFLRR",
    "FBBBFFBRLR",
    "FFBFFBFRLL",
    "FFFFBBBLLL",
    "FFBFFBBRRR",
    "FBBBBFBRLL",
    "BFFFFBBRRR",
    "FFBBFFFRLL",
    "FFBFBFBRLL",
    "BBFFFFBLLL",
    "FFBBBFBRRL",
    "BFFFFBBLRL",
    "FBBBFBBLLR",
    "FBBBFBBLLL",
    "FFBFBFBLRL",
    "FBBBBFFRRR",
    "FBBFFFFRLR",
    "FFBFFFBRLR",
    "BFBFBFBRRR",
    "FFFBFBBRLL",
    "FBBBFFBRRR",
    "FBBFBFFRLL",
    "BFFBFBFLRR",
    "BFBBBFFRRL",
    "BFFBBFBLLR",
    "FFBBBFBRLL",
    "FBFBFBBLRR",
    "BFBBFFFLRL",
    "BFBFBBFLRR",
    "BFBBBFFRRR",
    "FBBBFFFRRL",
    "FBFBFBFLLR",
    "FBBFFFFLLR",
    "FFBFBBFRLR",
    "FFFBFBBLRL",
    "BBFFFBBLLR",
    "BFFBBBFRLR",
    "FFFFBBBRLR",
    "BBFFBBFRLR",
    "FBFFFFBRLL",
    "FBFBFFFRRR",
    "FBFFFBBLLL",
    "BFBBBBFRLL",
    "FBFBFFBRRL",
    "FFFBFFFRLR",
    "BFBBFBFRRL",
    "FBFFBFFLRR",
    "FBFFFBBLRR",
    "FFBFBBBRLR",
    "FBBFBFFLRR",
    "FBFFFBBRRR",
    "FFBFBBBRLL",
    "FFBBBBBRRR",
    "BFFBBFFLLL",
    "BFBBBBBRRL",
    "BBFFBBBRLL",
    "FBFFFFFLRL",
    "BFFBBFFLRR",
    "FBFFBBFLRL",
    "BFBFFBFRRR",
    "FBFBBFBRLL",
    "BFFFBFBRRL",
    "FBBFFBFLLR",
    "BFFFFFFLLL",
    "FBFBFBFRLL",
    "FBBBBFFRRL",
    "BFBFFBBLLR",
    "FBBFBFBRRL",
    "FFFBFFFLLR",
    "FFBBBBBLRL",
    "FFBFFBBLRR",
    "FFFBFBFRRR",
    "BFBBFBBRLL",
    "BFBBBFBLRR",
    "FFBBBBFLRR",
    "FBBBFFBLLR",
    "BBFFBBBLLR",
    "FBFBBFFRRL",
    "FBBBBBFLRL",
    "FFFBBFFRRL",
    "BFFBBBBLRR",
    "FFFFBBBLRR",
    "FFFFBBFLRR",
    "FBFFFBFLLL",
    "FBFBFBBLLR",
    "BFFBBBBLLL",
    "FFBFFFFRLR",
    "BFBBFFBLRR",
    "FFBBFBFLRL",
    "BFBFBFFLLL",
    "BFFBFBBLLR",
    "BFBBFBBLRL",
    "FFBBBBFLRL",
    "FBBBFFFLLL",
    "FFFBFFBRRL",
    "BFFFFBBRLL",
    "BFFFBBBRLL",
    "BFFBFFFLRR",
    "FFBFBFBRRR",
    "BBFFBBFLLR",
    "FFBBFBBLLR",
    "FFBFFBFRRR",
    "FFBBBFFRLR",
    "BFFBBBBLLR",
    "FFFBFFFLRR",
    "FBFFFFFLLR",
    "FBFFBBBLLL",
    "BBFFBBFLLL",
    "FFBBFBFLRR",
    "BFFBFBFLRL",
    "FBFBBBFRRR",
    "BFBBFBBLLR",
    "FBFFFFBRRL",
    "FFFBBFBLRR",
    "BBFFFFBLRR",
    "BFBBBBFRRL",
    "FFBBBFBLLL",
    "BFBBFBFRLR",
    "BFBBFFBRRL",
    "BFBFBFFRRL",
    "FBBFFBBLRL",
    "FFFBFFBLRL",
    "BFFBBFFRLL",
    "FBBBFFFRLL",
    "FBBFBBFLLR",
    "FFBFFFFLLR",
    "FBBBFBFLRL",
    "BFFFBBBLLR",
    "FBFBBBBRRR",
    "FBBFBFBRLR",
    "FFFBFBFLLR",
    "FFFFBBFRRR",
    "FFFBBFFLRL",
    "BFBFFBFRLL",
    "FFFBFFBLLR",
    "FBBFFFBRLL",
    "FFBBBFBRRR",
    "FFBBFBBRLR",
    "BBFFFFFRRR",
    "FFBFFFFRLL",
    "FBBFFBBRRL",
    "BBFFFBFLRR",
    "FBBFFFFRRR",
    "FFBFFFBRRL",
    "BFBBFBFLLL",
    "BFFFFBFLRR",
    "BBFFFFFLLL",
    "FFBBFBBRRL",
    "FFBFBFFLRL",
    "FBFFBBFRRL",
    "BBFFBFBRLR",
    "BBFFBBFLRR",
    "FBFFBFBRRR",
    "FBBFBBFLRR",
    "FBFFFBFRLL",
    "BFBFFFFLRL",
    "FFFBBFBRRR",
    "BFBBBBBLLR",
    "FBBFFBBRRR",
    "FFBBBFFLLL",
    "FBBBBFBLLR",
    "BBFFFFFRLL",
    "FFBBBBFRLR",
    "FBFBFBBRRR",
    "FBFFBFFLLL",
    "FBFFBBBLLR",
    "FBBBBFBRRL",
    "BFBFBFFRLR",
    "FBBFBBBRLL",
    "BFBBFFFRLL",
    "FBBBFBFLLL",
    "FFBFFFFRRL",
    "FBFBBFFRRR",
    "FBFFFFBLLL",
    "FBBBBBBRLL",
    "BFFBFBBRRR",
    "BBFFBBFRRL",
    "FBBFBFFLRL",
    "FBFFFFBRRR",
    "FBBFFFFRLL",
    "FFFBFFFRRR",
    "FBFFBBFLLL",
    "BFFFFBFLLL",
    "BFFFFBFLLR",
    "FFBFFBFLLR",
    "FFBFFBFLRR",
    "BFFBBBBLRL",
    "FFBBFFBLLL",
    "FBBFBBBLLL",
    "FBFBBBFLLR",
    "BFFBBBFLRL",
    "BFBBFFBRLL",
    "FBFFBFFRRR",
    "FFBFFFBLRL",
    "FFFBBBFRRL",
    "FFBFBBFLRR",
    "FFFBBBBLRL",
    "FFFBBFFLLL",
    "FFFBFBBRRR",
    "FBBFBFFLLL",
    "BFFFBBBLLL",
    "BFFBFFFRLR",
    "FFFBBBBLLL",
    "BFFFFFBRRL",
    "FFBBFFFLLR",
    "BFBBFFFRRR",
    "BFBFFBFLRR",
    "FFFBBBFLLR",
    "FBFBBBFLRR",
    "BBFFBBBRLR",
    "FBFBBFFLRR",
    "FFBBBFBLRL",
    "FFFBBBFRLL",
    "BFFBFFBRLR",
    "BBFFFBBRRR",
    "BFBBBBFLRL",
    "BFBBBFBRRR",
    "FBBBBFFLLL",
    "FFFBFBBLLL",
    "BBFFFFFRLR",
    "BBFFBFFLLL",
    "FFBFBBBLRL",
    "FFBBFBFRLR",
    "BFBBBBBLRR",
    "FFBFFFBLLR",
    "FFBFFBFLRL",
    "BFFBFBBRLR",
    "FBFBFFFRRL",
    "FBBBFFFLRR",
    "FFFBBFFLLR",
    "FBBBBFFRLR",
    "FFBBFBBRRR",
    "BFBBFBBRRR",
    "BFBFBBFRRL",
    "BFFBBBFRRL",
    "FFFBFFFLLL",
    "FBBFFBFLRL",
    "FFFBFBBRLR",
    "BFBBFFFLLR",
    "BFBBFFBRRR",
    "FBFFBFBRRL",
    "FFBBBBBRLL",
    "BFFBFFBLLL",
    "BFFFBBFRRR",
    "FBFFFBFRRR",
    "FFBFBFBRLR",
    "FBFBBFFLLR",
    "FBBFBBBRRR",
    "BFBFFFFRRR",
    "FFBFFFFLLL",
    "FBFBBFFRLL",
    "BFBFFBFLRL",
    "BFBBFFFLLL",
    "FBFBBFBRRR",
    "BFBFFFBLLR",
    "BFBFFFBLLL",
    "BBFFFBFLLR",
    "BBFFBFFRLL",
    "FFBBBBFRRL",
    "BBFFFBFLRL",
    "BBFFBBBLRL",
    "BFBFFFBLRR",
    "FFFBFBFRLL",
    "BFBFFBBLLL",
    "BBFFFBBRRL",
    "BFBBBFFLLL",
    "BFFBBFFLLR",
    "FFBFFBBLLL",
    "BFFBBFBRRL",
    "BFFFFFBLRL",
    "BBFFFFBRLR",
    "FBFBBFFLLL",
    "FFBBBFBRLR",
    "FFFBBFBLLL",
    "FBFFFBBRLR",
    "FFBFBFFRLR",
    "BFFFFFBLRR",
    "FFFBBBBRLL",
    "FFBBFFFRRR",
    "BFFFFFBRLR",
    "FBBBFFBLRR",
    "FBFBFBBRLR",
    "FBBFFFBLRR",
    "BFBFFBBLRL",
    "FBFFBFBRLR",
    "FBFBFFFLRL",
    "BFFFFFBRLL",
    "BFBBBBFLRR",
    "BFFBFFFLLL",
    "FBFFBFFRRL",
    "FFFBBFFRLL",
    "BFFFBFFRRR",
    "FBFFBFFLLR",
    "FFFBBBFLLL",
    "FBFFFBFLRR",
    "BFFBFBBLLL",
    "BFFFBBBLRR",
    "FBBBBBBRRL",
    "FBFFBFFRLR",
    "FBBFFBBRLL",
    "FBBBFFFRRR",
    "BFFBFBBRRL",
    "FFBBFFBRRR",
    "BFBBBFFLRR",
    "FFFBFBBRRL",
    "BFBFBBBLRR",
    "FFFBBFBLRL",
    "FBFFBBFRLR",
    "BFFFBBFLRR",
    "BBFFFBBLRL",
    "FBBFFBFRLR",
    "FFFBFBFLLL",
    "FFFBFFFRRL",
    "BBFBFFFLLL",
    "FBFBFBFLRR",
    "BFBFFFFRLL",
  ];
function highestLowest(input){
    var allGrids = []
    input.forEach(function(id) {
        var row = id.substring(0,7)
        var column = id.substring(7)
        var rowValue = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
            16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
            32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
            48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
            64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
            80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
            96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111,
            112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127
        ];
        colValue = [0,1,2,3,4,5,6,7]
        for(x in row){
            row[x] == "F" ? rowValue = rowValue.slice(0, rowValue.length/2) : rowValue = rowValue.slice(rowValue.length/2)
        }
        for(x in column){
            column[x] == "L" ? colValue = colValue.slice(0, colValue.length/2) : colValue = colValue.slice(colValue.length/2)
        }
        rowValue = Number(rowValue)
        colValue = Number(colValue)
        allGrids.push(rowValue*8 + colValue)
    })
    console.log("Highest: "+ Math.max(...allGrids) + " Lowest: "+ Math.min(...allGrids))
}
highestLowest(input)

function missingGrids(input){
    
}
missingGrids(input)
