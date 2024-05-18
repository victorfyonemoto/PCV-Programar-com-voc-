import React from 'react'
import { useState } from "react";

export function Toggle(){
  const[showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  }

  return (
    <div>
      <button onClick={toggleList}>Toggle List</button>
      {showList && <ul>
        <li>Frutas</li>
        <li>Verduras</li>
        <li>Carnes</li>
      </ul>}
    </div>
  )
}
