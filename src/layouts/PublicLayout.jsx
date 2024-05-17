import React from 'react';
import Header from '../components/navbar/Header';

const PublicLayout = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
        {/* <Footer componente Footer her/> */}
    </div>
  )
}

export default PublicLayout
