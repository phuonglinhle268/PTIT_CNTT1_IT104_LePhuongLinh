import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks/useRedux";
import { toggleMenu } from "../redux/slices/menu.slice";

// Import icon từ Ant Design
import {
  DashboardOutlined,
  UserOutlined,
  DollarOutlined,
  BarChartOutlined,
  FileTextOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

export default function SidebarMenu() {
  const { collapsed } = useAppSelector((state) => state.menu);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div
      style={{
        width: collapsed ? "60px" : "200px",
        background: "#001f3f",
        color: "#fff",
        minHeight: "100vh",
        transition: "all 0.3s",
        paddingTop: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: collapsed ? "center" : "flex-start",
          padding: "0 10px",
          
        }}
      >
        <div>{collapsed ? <DashboardOutlined /> : <> <DashboardOutlined /> Bảng điều khiển</>}</div>
        <div>{collapsed ? <UserOutlined /> : <> <UserOutlined /> Tài khoản</>}</div>
        <div>{collapsed ? <DollarOutlined /> : <> <DollarOutlined /> Tài sản</>}</div>
        <div>{collapsed ? <BarChartOutlined /> : <> <BarChartOutlined /> Thống kê</>}</div>
        <div>{collapsed ? <FileTextOutlined /> : <> <FileTextOutlined /> Tài liệu</>}</div>

        <div onClick={handleToggle} style={{ cursor: "pointer" }}>
          {collapsed ? <RightOutlined /> : <> <LeftOutlined /> Thu gọn</>}
        </div>
      </div>
    </div>
  );
}
