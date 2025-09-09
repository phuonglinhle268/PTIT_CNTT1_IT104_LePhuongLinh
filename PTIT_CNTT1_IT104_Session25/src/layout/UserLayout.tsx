import React from "react";

import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <div>
      <menu>Menu</menu>
      <header>Header</header>
      <main>
        <h1>Main</h1>
        {/* Hiển thị ra nội dung của các trang con */}
        <Outlet />
      </main>
    </div>
  );
}