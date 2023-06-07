import React, { useState } from 'react';

const TableGenerator = () => {
  const [number, setNumber] = useState(0);

  const handleNumberChange = (event) => {
    const newNumber = parseInt(event.target.value);
    setNumber(newNumber);
  };

  const generateTable = (number) => {
    const table = [];

    for (let i = 1; i <= number; i++) {
      table.push(
        <tr key={i}>
          <td>{i}</td>
        </tr>
      );
    }

    return table;
  };

  return (
    <div>
      <input type="number" value={number} onChange={handleNumberChange} />
      <table>
        <tbody>{generateTable(number)}</tbody>
      </table>
    </div>
  );
};

export default TableGenerator;
