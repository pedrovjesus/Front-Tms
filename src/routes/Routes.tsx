import { Routes, Route, Navigate } from "react-router-dom";

import { useDrawerContext } from "../shared/contexts/DrawerContext";
import { useEffect } from "react";
import { Dashboard } from "../pages";

export const AppRoutes = () => {
  const { /*toggleDrawerOpen,*/ setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: "Home",
        icon: "home",
        path: "home",
      },
      {
        label: "Veiculos",
        icon: "garage",
        path: "veiculos",
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/home" element={<Dashboard></Dashboard>} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
