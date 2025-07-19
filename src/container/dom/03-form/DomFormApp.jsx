import './DomForm.css';
import PropertyMethod from './elements/PropertyMethod'
import FocusBlur from './elements/FocusBlur'
import EventChangeInput from './elements/EventChangeInput';
import SubmitEvent from './elements/SubmitEvent'

function DomFormApp() {
  return (
    <div>
      <PropertyMethod />
      <FocusBlur />
      <EventChangeInput />
      <SubmitEvent />
    </div>
  )
}

export default DomFormApp
