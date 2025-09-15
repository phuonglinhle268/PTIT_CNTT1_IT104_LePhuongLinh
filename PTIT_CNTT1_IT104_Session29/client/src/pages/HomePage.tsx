export const getAllProduct = async () => {
  try {
    const response = await fetch("http://localhost:8080/product");
    const data = await response.json();
    console.log("Danh sach san pham:", data); 
    return data;
  } catch (error) {
    console.error("Loi san pham:", error);
    return [];
  }
};
