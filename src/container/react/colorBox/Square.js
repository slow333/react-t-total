import GetContrastColor from './GetContrastColor';

function Square({ colorValue , hexValue}) {
  const textColor = GetContrastColor(hexValue);

  return (
    <div className='square__box' style={{background: colorValue, color: textColor}}>
      <p>{colorValue ? colorValue : 'no color value'}</p>
      <p>{hexValue}</p>
    </div>
  )
}

Square.defaultProps = {
  colorValue: '선택한 색상이 없습니다.'
}

export default Square
