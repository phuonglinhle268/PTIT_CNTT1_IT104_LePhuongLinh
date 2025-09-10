import './App.css'
import React, { Suspense, lazy } from "react"
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'
import StudentInfo from './pages/StudentInfo'
import Student from './pages/Student'
import Login from './pages/Login'
import Account from './pages/Account'
import PrivateRouter from './pages/PrivateRouter'
import Teams from './pages/Teams'

const LazyLoadComp = lazy(() => import("./pages/LazyLoadComp"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              
            }}
          >
            <img
              src="https://i.stack.imgur.com/kOnzy.gif"
              width="80"
            />
          </div>
        }
      >
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="studentinfo/:name" element={<StudentInfo />} />
          <Route path="student" element={<Student />} />

          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRouter />}>
            <Route path="/account" element={<Account />} />
          </Route>
          <Route path="*" element={<Login />} />
          <Route path="/teams" element={<Teams />} />

          <Route path="/lazy" element={<LazyLoadComp />} />
        </Routes>

       
      </Suspense>
    </>
  )
}

export default App
