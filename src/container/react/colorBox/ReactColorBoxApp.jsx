import React,{useState} from 'react'
import '../ReactApp.css';
import Square from './Square';
import ColorInput from './ColorInput';

function ReactColorBoxApp() {

  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');

  return (
    <div className='square__container'>
      <div id='react-color-box-index' className="for-space"></div>
      <h1>Color Box</h1>
      <Square colorValue={colorValue}
        hexValue={hexValue}
      />
      <ColorInput 
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
      />
    </div>
  )
}

export default ReactColorBoxApp
