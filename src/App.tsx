import { Login } from "./components/Login";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/profile" element={<ProtectedLayout children />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
