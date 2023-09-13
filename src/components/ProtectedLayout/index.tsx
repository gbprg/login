import { useAuth } from "../../context/AuthProvider/useAuth";

export function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const auth = useAuth();

  if (!auth.email) {
    return <h1>Você não tem acesso!</h1>;
  }
  return children;
}
