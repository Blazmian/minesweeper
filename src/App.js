import { useState } from "react";
import TextController from "./components/TextController";
import Timer from "./components/Timer";
import MinesRemaining from "./components/MinesRemaining";
import GenerateMinesweeperGrid from "./functions/GenerateMinesweeperGrid";
import Grid from "./components/Grid";
import MineDetector from "./components/MineDetector";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

const App = () => {
  const [time, setTime] = useState(0);
  const [difficulty, setDifficulty] = useState("Fácil");
  const [mines, setMines] = useState(10);
  const [minesRemaining, setMinesRemaining] = useState(10);
  const [cols, setCols] = useState(8);
  const [rows, setRows] = useState(8);
  const [grid, setGrid] = useState(GenerateMinesweeperGrid(rows, cols, mines));
  const [gameInitialized, setGameInitialized] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [clicking, setClicking] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const difficultyOptions = ["Fácil", "Intermedio", "Experto"]

  const handleDifficultyChange = (e) => {
    const selectedDifficulty = e.target.value;
    setDifficulty(selectedDifficulty);
    generateGrid(selectedDifficulty);
  };

  const generateGrid = (inputChange) => {
    setGameInitialized(false);
    setGameOver(false);
    setGameWon(false);
    let selectedDifficulty = difficulty;
    if (difficultyOptions.includes(inputChange)) selectedDifficulty = inputChange;
    const settings = getDifficultySettings(selectedDifficulty);
    setRows(settings.rows);
    setCols(settings.cols);
    setMines(settings.mines);
    setGrid(GenerateMinesweeperGrid(settings.rows, settings.cols, settings.mines));
    setMinesRemaining(settings.mines);
  }

  const getDifficultySettings = (difficulty) => {
    switch (difficulty) {
      case "Fácil":
        return { rows: 8, cols: 8, mines: 10 };
      case "Intermedio":
        return { rows: 16, cols: 16, mines: 40 };
      case "Experto":
        return { rows: 16, cols: 33, mines: 99 };
      default:
        return { rows: 8, cols: 8, mines: 10 };
    }
  };

  const handleMouseDown = () => {
    setClicking(true);
  };

  const handleMouseUp = () => {
    setClicking(false);
  };

  const handleBlur = () => {
    setClicking(false);
  };

  return (
    <div className="w-full h-screen bg-white dark:bg-gray-700">
      <div className="mb-5 flex items-center space-x-4 pt-5 px-5">
        <p className="text-lg font-semibold text-gray-300 mb-0">Dificultad</p>
        <select
          className="py-3 px-4 pe-9 border-transparent rounded-lg font-semibold text-sm bg-neutral-400 text-neutral-700 focus:ring-neutral-600"
          value={difficulty}
          onChange={(e) => handleDifficultyChange(e)}
        >
          {difficultyOptions.map(option => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="bg-gray-500 m-5 p-3 border-4 border-gray-400">
        <div className="border-4 border-gray-700 flex justify-between mb-3">
          <TextController>
            <MinesRemaining
              mines={minesRemaining}
              className="text-2xl font-bold font-mono select-none text-red-600 m-0"
            />
          </TextController>
          <div className="m-0 text-xl cursor-pointer" onClick={generateGrid}>
            <MineDetector {...{ gameWon, gameOver, clicking }} />
          </div>
          <TextController>
            <Timer
              className="text-2xl font-bold font-mono select-none text-red-600 m-0"
              time={time}
              setTime={setTime}
              started={gameInitialized}
              gameOver={gameOver}
              gameWon={gameWon}
            />
          </TextController>
        </div>
        <div className="flex justify-center">
          <Grid
            {...{ grid, setGrid, rows, cols, mines }}
            {...{ setMinesRemaining, gameInitialized, setGameInitialized, gameOver, setGameOver }}
            {...{ gameWon, setGameWon, handleMouseUp, handleMouseDown, handleBlur, onOpen }}
          />
        </div>
      </div>
      <Modal {...{ isOpen, onClose, gameWon, gameOver, time }} />
      <Footer />
    </div>
  );
}

export default App;