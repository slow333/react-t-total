import './DomEvent.css'
import BrowserEvent from './elements/BrowserEvent'
import DragDropMouseEvent from './elements/DragDropMouseEvent'
import EventBubbling from './elements/EventBubbling'
import KeyUpDown from './elements/KeyUpDown'
import MouseEvent from './elements/MouseEvent'
import ScrollEvent from './elements/ScrollEvent'

function DomEventApp() {
  return (
    <div>
      <BrowserEvent />
      <EventBubbling />
      <MouseEvent />
      <KeyUpDown />
      <DragDropMouseEvent />
      <ScrollEvent />
    </div>
  )
}

export default DomEventApp
