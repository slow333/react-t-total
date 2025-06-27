import React, { useEffect, useState } from 'react';

function Header() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {show && (
        <div className='text-xl text-amber-600 text-center font-semibold'>
          npm run tailwind, npm start 둘다해야함
        </div>
      )}
    </>
  );
}

export default Header