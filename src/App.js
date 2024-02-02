import React, { useState,useEffect } from 'react';
import './App.css';

const App = () => {
  const [board, setBoard] = useState([]);
  const [sign, setSign] = useState('X');
  var i=0;

  const handleButtonClick = (index) => {
      const newBoard = [...board];
      newBoard[index] = sign;
      setBoard(newBoard);
      setSign(sign === 'X' ? 'O' : 'X');
      checkwin();
  };
  const checkwin=()=>{
      win(0,1,2,'X');
      win(3,4,5,'X');
      win(6,7,8,'X');
      win(0,3,6,'X');
      win(1,4,7,'X');
      win(2,5,8,'X');
      win(0,4,8,'X');
      win(2,4,6,'X');

      win(0,1,2,'O');
      win(3,4,5,'O');
      win(6,7,8,'O');
      win(0,3,6,'O');
      win(1,4,7,'O');
      win(2,5,8,'O');
      win(0,4,8,'O');
      win(2,4,6,'O');
      if (!board.includes('')) {
        alert("Game Draw..!");
      }
      
  }
  const win=(start,mid,end,sign)=>{
    let winBoard = [...board];
    if(i==1){
      resetGame();
    }else{
      if(winBoard[start]==sign && winBoard[mid]==sign && winBoard[end]==sign){
        alert(sign+" is Win");
        i++;
      }
    }
  }
  useEffect(() => {
    resetGame();
  }, []);
  const resetGame = () => {
    setBoard(Array(9).fill(''));
  };

  return (
    <>
    <div className="main">
      {board.map((value, index) => (
        <button key={index} onClick={() => handleButtonClick(index)} className="btn">{value}</button>
      ))}
    </div>
    <div className='btn'>
      <button className='reset' onClick={resetGame}>RESET</button>
    </div>
      </>
  )
};

export default App;
