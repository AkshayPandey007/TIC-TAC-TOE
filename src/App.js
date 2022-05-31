import React ,{useEffect,useState} from 'react';
import './App.css';
import Square from './components/ttt';

const clearState = ["", "", "", "", "", "", "", "", "", ""];

function App() {

  const [gameState, updateGameState] = useState(clearState)
    const [Chance, updateChance] = useState(false)

    const Clicked = (index) => {
        let strings = Array.from(gameState);
        if (strings[index])
            return;
        strings[index] = Chance ? "X" : "0";
        updateChance(!Chance)
        updateGameState(strings)
    }

    const clearGame = () => {
        updateGameState(clearState)
    }
    useEffect(() => {
        let winner = checkWinner();
        if (winner) {
            clearGame();
            alert(` ${winner} won the Game !`)
        }
    }, [gameState])

    const checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a];
            }
        }
        return null;
    }

  return (
    <div className="app-header">
    <p className="top"> Tic Tac Toe </p>
            <div className="row">
                <Square className="right" onClick={() => Clicked(0)} state={gameState[0]}/>
                <Square className="right" onClick={() => Clicked(1)} state={gameState[1]}/>
                <Square className="bottom" onClick={() => Clicked(2)} state={gameState[2]}/>
            </div>
            <div className="row">
                <Square className="right" onClick={() => Clicked(3)} state={gameState[3]}/>
                <Square className="right" onClick={() => Clicked(4)} state={gameState[4]}/>
                <Square className="bottom" onClick={() => Clicked(5)} state={gameState[5]}/>
            </div>
            <div className="row">
                <Square className="Lright" onClick={() => Clicked(6)} state={gameState[6]}/>
                <Square className="Lright" onClick={() => Clicked(7)} state={gameState[7]}/>
                <Square onClick={() => Clicked(8)} state={gameState[8]}/>
            </div>
            <button className="btn" onClick={clearGame}>Clear Game</button>
    </div>
  );
}

export default App;
