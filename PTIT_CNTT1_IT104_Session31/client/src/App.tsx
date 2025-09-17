import { Routes, Route, Link } from "react-router-dom"
import PostList from "./pages/PostList"
import Home from "./pages/Home"

const App = () => {
  return (
    <div>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Trang chủ</Link>
        <Link to="/list-post">Danh sách bài viết</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list-post" element={<PostList />} />
      </Routes>
    </div>
  )
}

export default App
