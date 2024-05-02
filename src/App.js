import { useState } from "react";
import TextController from "./components/TextController";
import Timer from "./components/Timer";
import MinesRemaining from "./components/MinesRemaining";
import GenerateMinesweeperGrid from "./functions/GenerateMinesweeperGrid";
import Grid from "./components/Grid";

const App = () => {

  const [mines, setMines] = useState(50);
  const [minesRemaining, setMinesRemaining] = useState(50);
  const [cols, setCols] = useState(25);
  const [rows, setRows] = useState(15);
  const [grid, setGrid] = useState(GenerateMinesweeperGrid(rows, cols, mines));

  return (
    <div className="w-full h-screen bg-white dark:bg-gray-700 p-5">
      <div className="bg-gray-500 p-3 border-4 border-gray-400">
        <div className="border-4 border-gray-700 flex justify-between mb-3">
          <TextController>
            <MinesRemaining
              mines={minesRemaining}
              className="text-2xl font-bold font-mono select-none text-red-600 m-0"
            />
          </TextController>
          <div className="m-0 text-xl">
            😉
          </div>
          <TextController>
            <Timer
              className="text-2xl font-bold font-mono select-none text-red-600 m-0"
            />
          </TextController>
        </div>
        <div className="flex justify-center">
          <Grid {...{ grid, setGrid, setMinesRemaining }} />
        </div>
      </div>
    </div>
  );
}

export default App;