import React from 'react'
import IuseStateHook from './hooks/IuseStateHook'
import IuseEffectHook from './hooks/IuseEffectHook'
import MainComp from './components/MainPage'
import Header from './components/Header'
import Footer from './components/Footer'
import Counter from './components/Counter'

const App = () => {
  return (
    <div>

         {/* <IuseStateHook/> */}
          <Header/>
         <MainComp/>
         <Counter/>

         <Footer/>  

    </div>
  )
}

export default App