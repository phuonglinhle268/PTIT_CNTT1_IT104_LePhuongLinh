import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

interface User {
  id?: number;
  name?: string;
  dateOfBirth?: string;
  email?: string;
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

  const loadUsers = async () => {
    // Hiển thị hiệu ứng loading
    setIsLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:8080/users?name_like=${searchValue}`
      );

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
  }, [searchValue]);

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
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
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
        <button>Prev</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>Next</button>
      </div>
    </div>
  );
}