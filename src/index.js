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
    { sudoku.rows.map((row, idx) => (
        <tr key={idx}>
            { row.map(cell => (
                <td key={cell.col}>
                    <Square/>
                </td>
            )) }
        </tr>
    )) }
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
