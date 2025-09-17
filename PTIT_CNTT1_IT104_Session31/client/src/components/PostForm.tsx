import React, { useState } from "react";
import axios from "axios";

const PostForm = ({ onClose, onSuccess, posts, editingPost }) => {
  const [title, setTitle] = useState(editingPost ? editingPost.title : "");
  const [image, setImage] = useState(editingPost ? editingPost.image : "");
  const [content, setContent] = useState(editingPost ? editingPost.content : "");
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const [error, setError] = useState("");

  // Validate dữ liệu
  const validate = () => {
    if (!title.trim() || !image.trim() || !content.trim()) {
      setError("⚠️ Vui lòng nhập đầy đủ thông tin!");
      return false;
    }
    const isDuplicate = posts.some(
      (p) =>
        p.title.toLowerCase() === title.toLowerCase() &&
        (!editingPost || p.id !== editingPost.id)
    );
    if (isDuplicate) {
      setError("⚠️ Tên bài viết đã tồn tại!");
      return false;
    }
    setError("");
    return true;
  };

  // Submit form
  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      if (editingPost) {
        // Cập nhật
        await axios.put(`http://localhost:3000/posts/${editingPost.id}`, {
          title,
          image,
          content,
          date: editingPost.date,
          status: editingPost.status,
        });
      } else {
        // Thêm mới
        await axios.post("http://localhost:3000/posts", {
          title,
          image,
          content,
          date: new Date().toLocaleDateString("vi-VN"),
          status: "Đã xuất bản",
        });
      }
      onSuccess(); // reload danh sách
      onClose();   // đóng form
    } catch (err) {
      console.error("Lỗi khi lưu:", err);
    }
  };

  // Reset dữ liệu
  const handleReset = () => {
    setTitle("");
    setImage("");
    setContent("");
    setShowConfirmReset(false);
  };

  return (
    <div className="modal">
      <div className="modal-content" style={{ width: "600px" }}>
        <div className="modal-header">
          <h2>{editingPost ? "Cập nhật bài viết" : "Thêm mới bài viết"}</h2>
          <button onClick={onClose} className="btn-close">✖</button>
        </div>

        <div className="modal-body">
          {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}

          <label>📝 Tên bài viết</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nhập tên bài viết"
          />

          <label>🖼 Hình ảnh (URL)</label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Nhập link hình ảnh"
          />

          <label>📄 Nội dung</label>
          <textarea
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Nhập nội dung bài viết"
          />
        </div>

        <div className="modal-footer">
          <button onClick={() => setShowConfirmReset(true)}>Làm mới</button>
          <button
            onClick={handleSubmit}
            style={{ background: "blue", color: "white" }}
          >
            {editingPost ? "Cập nhật" : "Xuất bản"}
          </button>
        </div>
      </div>

      {/* Modal xác nhận làm mới */}
      {showConfirmReset && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>Bạn có chắc muốn xóa hết dữ liệu?</p>
            <button onClick={() => setShowConfirmReset(false)}>Hủy</button>
            <button
              onClick={handleReset}
              style={{ background: "red", color: "white" }}
            >
              Xác nhận
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostForm;
