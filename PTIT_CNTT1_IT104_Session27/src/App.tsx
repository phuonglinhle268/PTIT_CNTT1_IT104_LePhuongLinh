import './App.css'
import {Route, Routes, Link} from 'react-router-dom'
import About from './pages/PTIT_CNTT1_IT104_Ss27_01/About'
import Contact from './pages/PTIT_CNTT1_IT104_Ss27_01/Contact'
import Home from './pages/PTIT_CNTT1_IT104_Ss27_01/Home'
import ProductDetail from './pages/PTIT_CNTT1_IT104_Ss27_02/ProductDetail'
import ProductList from './pages/PTIT_CNTT1_IT104_Ss27_02/ProductList'
import TaskList from './pages/PTIT_CNTT1_IT104_Ss27_03/TaskList'
import TaskDetail from './pages/PTIT_CNTT1_IT104_Ss27_03/TaskDetail'
import ProductInfo from './pages/PTIT_CNTT1_IT104_Ss27_04/ProductInfo'
import Header from './layout/Header'
import Home1 from './pages/PTIT_CNTT1_IT104_Ss27_06/Home1'
import Product from './pages/PTIT_CNTT1_IT104_Ss27_06/Product'
import Detail from './pages/PTIT_CNTT1_IT104_Ss27_06/Detail'
import Login from './pages/PTIT_CNTT1_IT104_Ss27_08/Login'
import Register from './pages/PTIT_CNTT1_IT104_Ss27_08/Register'
import Posts from './pages/PTIT_CNTT1_IT104_Ss27_05/Posts'
import PostDetail from './pages/PTIT_CNTT1_IT104_Ss27_05/PostDetail'
import BlogLayout from './pages/PTIT_CNTT1_IT104_Ss27_05/BlogLayout'
import Home2 from './pages/PTIT_CNTT1_IT104_Ss27_07/Home2'
import About2 from './pages/PTIT_CNTT1_IT104_Ss27_07/About2'
import NotFound from './pages/PTIT_CNTT1_IT104_Ss27_07/NotFound'

function App() {
  

  return (
    <>
    <nav className="ex1">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    </nav>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
        <Route path="/tasks" element={<TaskList/>}/>
        <Route path="/tasks/:id" element={<TaskDetail/>}/>
        <Route path="/productinfo" element={<ProductInfo/>}/>
        <Route path="/home1" element={<Home1/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        
        <Route path="/blog" element={<BlogLayout />}>
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<PostDetail />} />
        </Route>

        <Route path="/home2" element={<Home2/>}/>
        <Route path="/about2" element={<About2/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

    </>
  )
}

export default App
