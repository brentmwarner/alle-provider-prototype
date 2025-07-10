import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Element } from "./screens/Element";
import { Analytics } from "./screens/Analytics";
import { Reports } from "./screens/Reports";
import { Patient360 } from "./screens/Patient360";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Element />} />
        <Route path="/patient-360" element={<Patient360 />} />
        <Route path="/insights/analytics" element={<Analytics />} />
        <Route path="/insights/reports" element={<Reports />} />
        
        {/* Placeholder routes for other menu items */}
        <Route path="/marketing" element={<Element />} />
        <Route path="/store" element={<Element />} />
        <Route path="/insights" element={<Navigate to="/insights/analytics" replace />} />
        <Route path="/settings" element={<Element />} />
      </Routes>
    </BrowserRouter>
  );
};