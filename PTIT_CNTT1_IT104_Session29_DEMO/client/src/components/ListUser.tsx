import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useDebouce } from "../hooks/useDebouce";

interface User {
  id?: number;
  name?: string;
  dateOfBirth?: string;
  email?: string;
  status?: "active" | "inactive";
}

export default function ListUser() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [mode, setMode] = useState<"add" | "edit">("add");
  const [user, setUser] = useState<User>({
    name: "",
    dateOfBirth: "",
    email: "",
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [totalRecord, setTotalRecord] = useState<number>(0);
  const [status, setStatus] = useState<"active" | "inactive" | "">("");

  // Gọi custom hook useDebounce
  const debouceSearch = useDebouce(searchValue, 500);

  const loadUsers = async () => {
    // Hiển thị hiệu ứng loading
    setIsLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:8080/users?name_like=${debouceSearch}&_page=${currentPage}&_limit=${pageSize}${
          status ? `&status=${status}` : ""
        }`
      );

      // Lấy ra tổng số bản ghi
      setTotalRecord(+response.headers["x-total-count"]);

      setUsers(response.data);
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      // Ẩn hiệu ứng loading
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // // Hiển thị hiệu ứng loading
    // setIsLoading(true);
    // // Gọi API lấy danh sách user
    // axios
    //   .get(`http://localhost:8080/users?name_like=${searchValue}`)
    //   .then((response) => {
    //     setUsers(response.data);
    //   })
    //   .catch((error) => console.log("Error: ", error))
    //   .finally(() => {
    //     // Ẩn hiệu ứng loading
    //     setIsLoading(false);
    //   });

    loadUsers();
  }, [debouceSearch, currentPage, pageSize, status]);

  // Hàm xóa user
  const handleDelete = async (id: number) => {
    try {
      const response = await axios.delete(`http://localhost:8080/users/${id}`);

      if (response.status === 200) {
        // Hiển thị thông báo
        alert("Xóa thành công");

        // Load lại dữ liệu
        loadUsers();
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // Lấy giá trị trong input và cập nhật cho State
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // Hàm submit form
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      if (mode === "add") {
        // Gọi API thêm mới dữ liệu
        const response = await axios.post("http://localhost:8080/users", user);

        if (response.status === 201) {
          // Hiển thị thông báo
          // Load lại dữ liệu
        }
      } else {
        // Gọi API thêm mới dữ liệu
        const response = await axios.put(
          `http://localhost:8080/users/${user.id}`,
          user
        );

        if (response.status === 200) {
          // Hiển thị thông báo
        }
      }

      loadUsers();
      // Reset lại form
      setUser({
        name: "",
        email: "",
        dateOfBirth: "",
      });

      // Cập nhật lại mode
      setMode("add");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // Lấy thông tin của user và fill lên form
  const handleGetUser = (userInfo: User) => {
    setMode("edit");

    setUser({
      ...userInfo,
      dateOfBirth: dayjs(userInfo.dateOfBirth).format("YYYY-MM-DD"),
    });
  };

  // Hàm chuyển qua trang khi được click vào
  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  // Hàm quay lại trang trước
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // Hàm chuyển tới trang tiếp theo
  const handleNext = () => {
    if (currentPage < Math.ceil(totalRecord / pageSize)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Render danh sách các trang
  const renderPage = () => {
    const pages = [];

    const totalPage = Math.ceil(totalRecord / pageSize);

    for (let i = 1; i <= totalPage; i++) {
      pages.push(i);
    }

    // Duyệt và reder các nút
    return pages.map((page) => (
      <button
        className={`${page === currentPage ? "btn-active" : ""}`}
        onClick={() => handleChangePage(page)}
      >
        {page}
      </button>
    ));
  };

  return (
    <div>
      <h3>Danh sách người dùng</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={user.name}
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Họ và tên"
        />
        <input
          value={user.dateOfBirth}
          onChange={handleChange}
          name="dateOfBirth"
          type="date"
          placeholder="Ngày sinh"
        />
        <input
          value={user.email}
          onChange={handleChange}
          name="email"
          type="text"
          placeholder="Email"
        />
        <button type="submit">{mode === "add" ? "Thêm" : "Lưu"}</button>
      </form>

      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        type="text"
        placeholder="Tìm kiếm theo tên"
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">All</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              {users.map((user) => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.dateOfBirth}</td>
                  <td>{user.email}</td>
                  <td>{user.status}</td>
                  <td>
                    <button onClick={() => handleGetUser(user)}>Sửa</button>
                    <button onClick={() => handleDelete(user.id)}>Xóa</button>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
      <div>
        <button onClick={handlePrevious}>Prev</button>
        {renderPage()}
        <button onClick={handleNext}>Next</button>
      </div>
      <div>
        <select value={pageSize} onChange={(e) => setPageSize(+e.target.value)}>
          <option value="10">Hiển thị 10 bản ghi / trang</option>
          <option value="20">Hiển thị 20 bản ghi / trang</option>
          <option value="30">Hiển thị 30 bản ghi / trang</option>
          <option value="50">Hiển thị 50 bản ghi / trang</option>
          <option value="100">Hiển thị 100 bản ghi / trang</option>
        </select>
      </div>
    </div>
  );
}