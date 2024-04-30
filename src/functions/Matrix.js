const Matrix = (rows, cols) => {
    return Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));
}

export default Matrix;