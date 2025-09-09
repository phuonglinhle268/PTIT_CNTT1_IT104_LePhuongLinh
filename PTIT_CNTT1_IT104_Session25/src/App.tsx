import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./layout/Header";
import Detail from "./pages/Detail";
import Product from "./pages/Product";
import CustomLink from "./pages/CustomLink";
import ListUser from "./pages/ListUser";
import UserDetail from "./pages/UserDetail";

function App() {
  return (
    <>
    <Header/>
    <CustomLink/>
      <Routes>
        
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="*" element={<NotFound />} />
        <Route path="/detail" element={<Detail/>}/>
        <Route path="product" element={<Product/>}/>
        <Route path="listuser" element={<ListUser/>}/>
        <Route path="/userdetail/:id" element={<UserDetail/>}/>
      </Routes>
    </>
  );
}


// function App() {
//   return (
//     <>
//       {/* Phần navbar chuyển hướng trang */}
//       <nav>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/contact">Contact</NavLink>
//         <NavLink to="/about">About</NavLink>
//         <NavLink to="/user">User</NavLink>
//         <NavLink to="/user/profile">Profile</NavLink>
//       </nav>

//       {/* Định nghĩa danh sách các đường dẫn của ứng dụng */}
//       <Routes>
//         {/* Định nghĩa từng route tương ứng với từng Component */}
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/user" element={<UserLayout />}>
//           {/* Định nghĩa danh sách các route con của user */}
//           <Route path="profile" element={<Profile />} />
//           <Route path="change-password" element={<ChangePassword />} />
//           <Route path="bank" element={<Bank />} />
//         </Route>

//         <Route path="/product" element={<Product />} />
//         <Route
//           path="/product-detail/:productId/:productName"
//           element={<ProductDetail />}
//         />

//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </>
//   );
// }
export default App;
