import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props){
  return (
    <input
          type="text"
          maxLength = '1'
          value={props.value}
    />
  );
}

function SudokuBoard(sudoku, onCellValueChange) {
  return (
  <table className="sudoku">
    <tbody>
      <tr>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
      </tr>
      <tr>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
      </tr>
      <tr>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
      </tr>
      <tr>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
      </tr>
      <tr>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
      </tr>
      <tr>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
      </tr>
      <tr>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
      </tr>
      <tr>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
      </tr>
      <tr>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
      </tr>
      <tr>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
        <td><Square value={1}/></td>
      </tr>
    </tbody>
  </table>
  );
}

function SudokuGame() {
  return (
    <div className="game">
      <SudokuBoard />
    </div>
  );
}

// ========================================

ReactDOM.render(
  <SudokuGame />,
  document.getElementById('root')
);
