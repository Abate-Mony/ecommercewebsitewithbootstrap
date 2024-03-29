

import './App.css';
import { Routes, Route } from 'react-router-dom'

import { Layout } from './components'

import { Home, About, Notfound, Contact
, Product, User, Auth, Blog, Categories, Cart,Checkout } from './pages'
import { useState } from 'react'

import "/node_modules/flag-icons/css/flag-icons.min.css"
import { CartProvider } from './components/CardData';
function App() {
    const [_, setToggleSideBar] = useState(false)
    const [toggleRightSideBar, setToggleRightSideBar] = useState(false)

    return (
        <div className={`bg-light fw-lighter`} style={{
            overflowX: "hidden !important"
        }} >

            <CartProvider>
                <Routes>
                    <Route path="/" element={<Layout
                        setToggleRightSideBar={setToggleRightSideBar}
                        toggleRightSideBar={toggleRightSideBar}
                    />}>
                        <Route index element={<Home
                        />} />
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
                    <Route path='/checkout' element={<Checkout />}>
                    </Route>
                    {/* <Route path='/news' element={<News />}>
                    </Route> */}



                </Routes>
            </CartProvider>



        </div>
    );
}

export default App;