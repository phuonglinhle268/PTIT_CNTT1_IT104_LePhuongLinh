import axios from "axios";
import { useState } from "react";

const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET;

const URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

export default function UploadSingleFile() {
  const [file, setFile] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  console.log("ENV: ", import.meta.env.VITE_CLOUD_NAME);
  console.log("ENV: ", import.meta.env.VITE_UPLOAD_PRESET);

  // https://api.cloudinary.com/v1_1/<cloud_name>/image/upload

  const handleChange = (event) => {
    setFile(event.target.files[0]);

    // Cập nhật lại đường dẫn preview
    setPreviewImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleUpload = async () => {
    // Kiểm tra dữ liệu đầu vào
    if (!file) {
      alert("File không được để trống");
      return;
    }

    // Hiển thị loaidng
    setLoading(true);

    // Gọi API upload file
    try {
      // Tạo form data
      const formData = new FormData();

      formData.append("file", file);
      formData.append("upload_preset", UPLOAD_PRESET);
      formData.append("cloud_name", CLOUD_NAME);

      const response = await axios.post(URL, formData);

      if (response.status === 200) {
        setImageUrl(response.data.url);
      }

      console.log("Response; ", response);
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Hình ảnh xem trước</h2>

      {loading && <h3>Đang tải lên...</h3>}

      <img height={300} width={500} src={previewImage} alt="" />

      <h2>Hình ảnh đã tải lên</h2>
      <img height={300} width={500} src={imageUrl} alt="" />

      <input onChange={handleChange} type="file" />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}