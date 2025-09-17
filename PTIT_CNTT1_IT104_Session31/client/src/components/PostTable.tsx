import { useEffect, useState } from "react";
import axios from "axios";
import PostForm from "./PostForm";

const PostTable = () => {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // Gọi API lấy danh sách
  const fetchPosts = async (keyword = "") => {
    try {
      setLoading(true);
      let url = "http://localhost:3000/posts";
      if (keyword.trim()) {
        // json-server hỗ trợ query _like (tìm gần đúng)
        url += `?title_like=${keyword}`;
      }
      const res = await axios.get(url);
      setPosts(res.data);
    } catch (err) {
      console.error("Lỗi khi gọi API:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Thêm mới
  const handleAdd = () => {
    setEditingPost(null);
    setShowForm(true);
  };

  // Sửa
  const handleEdit = (post) => {
    setEditingPost(post);
    setShowForm(true);
  };

  // Xử lý tìm kiếm
  const handleSearch = (e) => {
    const keyword = e.target.value;
    setSearch(keyword);
    fetchPosts(keyword);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Quản lý bài viết</h1>

      {/* Thanh tìm kiếm */}
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="🔍 Tìm kiếm bài viết theo tiêu đề..."
          value={search}
          onChange={handleSearch}
          style={{ padding: "8px", width: "300px" }}
        />
        <button
          onClick={handleAdd}
          style={{
            background: "blue",
            color: "white",
            padding: "8px 12px",
            border: "none",
            borderRadius: "5px",
            marginLeft: "10px",
          }}
        >
          ➕ Thêm mới bài viết
        </button>
      </div>

      {/* Loading */}
      {loading && <p>⏳ Đang tải...</p>}

      {/* Bảng danh sách */}
      {posts.length > 0 ? (
        <table
          border="1"
          width="100%"
          cellPadding="10"
          style={{ borderCollapse: "collapse" }}
        >
          <thead style={{ background: "#f2f2f2" }}>
            <tr>
              <th>STT</th>
              <th>Tiêu đề</th>
              <th>Hình ảnh</th>
              <th>Ngày viết</th>
              <th>Trạng thái</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={post.id}>
                <td>{index + 1}</td>
                <td>{post.title}</td>
                <td>
                  <img src={post.image} alt="post" width="50" />
                </td>
                <td>{post.date}</td>
                <td>
                  <span
                    style={{
                      padding: "3px 6px",
                      background:
                        post.status === "Đã xuất bản" ? "#d4f5d0" : "#fddede",
                      borderRadius: "5px",
                    }}
                  >
                    {post.status}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => handleEdit(post)}
                    style={{ marginRight: "5px" }}
                  >
                    Sửa
                  </button>
                  <button
                    style={{ marginRight: "5px", background: "orange" }}
                  >
                    Chặn
                  </button>
                  <button style={{ background: "red", color: "white" }}>
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && <p>❌ Không có kết quả tìm kiếm</p>
      )}

      {/* Form thêm/cập nhật */}
      {showForm && (
        <PostForm
          posts={posts}
          editingPost={editingPost}
          onClose={() => setShowForm(false)}
          onSuccess={() => fetchPosts(search)}
        />
      )}
    </div>
  );
};

export default PostTable;
