

import './App.css';
import { Routes, Route } from 'react-router-dom'

import { Layout } from './components'

import { Home, About, Notfound, Contact, Product, User, Auth, Blog, Categories,Cart } from './pages'
import { useState } from 'react'

import "/node_modules/flag-icons/css/flag-icons.min.css"

function App() {
    const [toggleSideBar, setToggleSideBar] = useState(false)

    return (
        <div className={`bg-light fw-lighter ${toggleSideBar ? "overflow-hidden" : "overflow-auto"}`} style={{
            overflowX: "hidden !important"
        }} >
            <Routes>
                <Route path="/" element={<Layout
                    setToggleSideBar={setToggleSideBar
                    } toggleSideBar={toggleSideBar} />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path='product/:id' element={<Product />} />
                    <Route path='blog' element={<Blog />} />
                    <Route path="*" element={<Notfound />} />
                </Route>
                <Route path="/categories/:name" element={<Categories />}>
                    
                </Route>
                <Route path='/our-store' element={<Categories />}></Route>
                
                <Route path='/user' element={<User setToggleSideBar={setToggleSideBar
                } />}>
                </Route>
                <Route path='/auth' element={<Auth />}>
                </Route>
                <Route path='/cart' element={<Cart />}>
                </Route>

         

            </Routes>



        </div>
    );
}

export default App;