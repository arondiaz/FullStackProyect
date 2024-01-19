import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
    <h1>Authlayout</h1>

    <Outlet/>
    </>
  )
};

export default AuthLayout;
