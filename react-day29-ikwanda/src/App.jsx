import { useState } from 'react'
import './App.css'
import Header from './components/header'
import ContentSection from './components/contentSection'
import Footer from './components/footer'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('HOME')
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='font-[Inter]'>
      <Header 
        isOpen={isOpen}  
        toggleMenu={toggleMenu}
        title={title}
        setTitle={setTitle}
      />
      <ContentSection/>
      <Footer/>    
    </div>
  )
}

export default App
