

import './App.css';
import { Routes, Route } from 'react-router-dom'

import { Layout } from './components'

import { Home, About, Notfound, Contact, OurBlog, Product, User, Auth, Blog } from './pages'
import { useState } from 'react'
// import News from './Container/News/News'

import "/node_modules/flag-icons/css/flag-icons.min.css"

function App() {
    const [toggleSideBar, setToggleSideBar] = useState(false)
   
    return (
        <div className={`bg-light fw-lighter ${toggleSideBar ? "overflow-hidden" : "overflow-auto"}`} style={{
            overflowX: "hidden !important"
        }} >
        {/* <span className='fi fi-af'></span> */}
        {/* <span className='fi fi-gr fis'></span> */}
            <Routes>
                <Route path="/" element={<Layout
                    setToggleSideBar={setToggleSideBar
                    } toggleSideBar={toggleSideBar} />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path='our-store' element={<OurBlog />} />
                    <Route path='product/:id' element={<Product />} />
                    <Route path='blog' element={<Blog />} />
                    <Route path="*" element={<Notfound />} />
                </Route>
                <Route path='/user' element={<User setToggleSideBar={setToggleSideBar
                } />}>
                </Route>
                <Route path='/auth' element={<Auth />}>
                </Route>

            </Routes>



        </div>
    );
}

export default App;