import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "@/context/AuthContext";


export default function AuthLayout() {
  const { isAuthenticated, user } = useUserContext();

  return (
    <>
      {isAuthenticated ? (
        // If user hasn't selected gender, redirect to gender selection
        user?.gender ? (
          <Navigate to="/" />
        ) : (
          <Navigate to="/select-gender" />
        )
      ) : (
        <section className="flex flex-1 justify-center items-center flex-col py-10">
          <Outlet />
        </section>
      )}
    </>
  );
}