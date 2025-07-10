import React from 'react'

function FetchButton({buttonText, fetchEndpoint, setFetchEndpoint}) {
  return (
    <button 
      className={buttonText === fetchEndpoint ? 'fetch__button-selected' : 'fetch__button'}
      onClick={() => setFetchEndpoint(buttonText)}
    >
      {buttonText}
    </button>
  )
}

export default FetchButton
