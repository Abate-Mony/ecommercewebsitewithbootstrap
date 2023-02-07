import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom'

import {Header,Footer,Layout} from './components'

import {Home,About,Notfound,Contact,OurBlog,Product} from './pages'

function App() {
    return ( 
    <div className = "bg-light fw-lighter" style={{overflowX:"hidden"}}>

    <Header/>
    
    <Routes path="/" element={Layout}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path='our-store' element={<OurBlog/>}/>
    
    <Route path='product/:id' element={<Product/>}/>
    <Route path="*" element={<Notfound/>}/>
    </Routes>
    
    <Footer/>
    
    </div>
    );
}

export default App;