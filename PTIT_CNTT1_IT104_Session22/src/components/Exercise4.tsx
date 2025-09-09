import React from "react";
import { Dropdown } from "react-bootstrap";

export default function Exercise4() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Nguyễn Văn Nam
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/settings">Cài đặt</Dropdown.Item>
        <Dropdown.Item href="#/change-password">Đổi mật khẩu</Dropdown.Item>
        <Dropdown.Item href="#/logout">Đăng xuất</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
