import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

export default function PrivateRouter() {
  const [userLogin, setUserLogin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLogin) {
      navigate("/login");
    }
  }, [userLogin, navigate]);

  return <Outlet/>

}
