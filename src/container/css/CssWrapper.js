import React from 'react'
import CssNav from './CssNav';
import  {CssBasic,CssColor,CssMedium,CssAlignElements} from './';
import MainWrapper from '../../MainWrapper';
import TwWrapper from './tailwind/TwWrapper';

function CssWrapper() {
  return (
    <MainWrapper aside={<CssNav/>}>
      <CssBasic />
      <CssColor />
      <CssMedium />
      <CssAlignElements />
      <TwWrapper />
    </MainWrapper>
  )
}

export default CssWrapper
