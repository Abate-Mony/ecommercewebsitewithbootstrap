

import './App.css';
import { Routes, Route } from 'react-router-dom'

import { Header, Footer, Layout } from './components'

import { Home, About, Notfound, Contact, OurBlog, Product } from './pages'
import { useState } from 'react'
function App() {
    const [toggleSideBar, setToggleSideBar] = useState(false)

    return (
        <div className={`bg-light fw-lighter ${toggleSideBar ? "overflow-hidden" : "overflow-auto"}`} style={{
            overflowX: "hidden",
            height: "100vh"
        }}>

            <Header toggleSideBar={toggleSideBar} setToggleSideBar={setToggleSideBar} />


            <Routes path="/" element={Layout}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path='our-store' element={<OurBlog />} />

                <Route path='product/:id' element={<Product />} />
                <Route path="*" element={<Notfound />} />
            </Routes>

            <Footer setToggleSideBar={setToggleSideBar} />

        </div>
    );
}

export default App;