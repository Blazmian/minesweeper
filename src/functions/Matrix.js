const Matrix = (rows, cols) => {
    return Array.from({ length: rows }, () => Array.from({ length: cols }, () => ({
        open: false,
        mine: false,
        flagged: false,
    })));
}

export default Matrix;