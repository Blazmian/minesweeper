const Matrix = (cols, rows) => {
    return Array.from({ length: rows }, () => Array.from({ length: cols }));
}

export default Matrix;