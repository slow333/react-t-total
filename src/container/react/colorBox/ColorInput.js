import React from 'react'
import '../ReactApp.css';
import colorNames from 'colornames'; // node libray

function ColorInput({colorValue, setColorValue, setHexValue}) {
  return (
    <div className='square__input-container'>
      <form onSubmit={(e) => e.preventDefault()}>
        <input 
          className='square__input' 
          id='square__input'
          name='colorSet'
          value={colorValue}
          onChange={(e) => {
            setColorValue(e.target.value);
            setHexValue(colorNames(e.target.value));
          }}
          placeholder='색상이름을 적어 주세요'
        />
      </form>
    </div>
  )
}

export default ColorInput
