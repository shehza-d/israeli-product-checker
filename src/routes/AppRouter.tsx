import { Routes, Route, Navigate } from "react-router-dom";
import Main from "../pages/Main";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
}
