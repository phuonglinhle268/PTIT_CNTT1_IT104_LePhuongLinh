import axios from "axios";

export const getAllStudent = async () => {
  try {
    const response = await axios.get("http://localhost:8080/student");
    return response.data;
  } catch (error) {
    console.error("Loi sinh vien:", error);
    return [];
  }
};

export const getStudentById = async (id) => {
  try {
    const response = await axios.get(`"http://localhost:8080/student"/${id}`);
    return response.data || null;
  } catch (error) {
    console.error("Không tìm thấy bản ghi", error);
    return null;
  }
};

export const createStudent = async (student) => {
  try {
    const response = await axios.post("http://localhost:8080/student", student);
    console.log("Them sinh vien thanh cong", response.data);
    return response.data;
  } catch (error) {
    console.error("Loi sinh vien: ", error);
    return null;
  }
};

export const deleteStudent = async (id) => {
  try {
    await axios.delete(`"http://localhost:8080/student"/${id}`);
    console.log(`Xoa thanh cong`);
    return true;
  } catch (error) {
    console.error("Loi sinh vien: ", error);
    return false;
  }
};
