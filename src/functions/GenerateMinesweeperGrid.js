import AddNumbers from "./AddNumbers";
import Matrix from "./Matrix";
import PlaceMines from "./PlaceMines";

const CreateMinesweeperGrid = (rows, cols, numMines) => {
    let grid = Matrix(rows, cols);
    let gridWithMines = PlaceMines(grid, numMines);
    return AddNumbers(gridWithMines);
};

export default CreateMinesweeperGrid;