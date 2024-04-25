import { useState } from "react";
import TextController from "./components/TextController";
import Timer from "./components/Timer";
import MinesRemaining from "./components/MinesRemaining";

const App = () => {

  const [mines, setMines] = useState(99);

  return (
    <div className="w-full h-screen bg-white dark:bg-gray-700 p-5">
      <div className="bg-gray-500 p-3 border-4 border-gray-400">
        <div className="border-4 border-gray-700 flex justify-between">
          <TextController>
            <MinesRemaining
              mines={mines}
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
      </div>

      {/*<Grid cols={25} rows={15} />*/}
    </div>
  );
}

export default App;