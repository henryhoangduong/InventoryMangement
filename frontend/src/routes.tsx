import { Routes, Route } from "react-router";
import SignIn from "./views/SignIn/SignIn";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
};
