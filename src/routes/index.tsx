import { Routes, Route, Navigate } from "react-router-dom";

export const appRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<p>Home</p>} />

      
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  );
};
