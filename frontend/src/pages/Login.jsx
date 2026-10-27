import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function manejarSubmit(e) {
    e.preventDefault();

    // 1. llamar a login(email  , password) y guardar lo que devuelve
    const isLogged = login(email, password);
    // 2. si devuelve true: navigate("/")
    if (isLogged) {
      navigate("/");
    } else {
      // 3. si devuelve false: setError("Email o contraseña incorrectos")
      setError("Email o contraseña incorrectos");
    }
  }

  return (
    <form onSubmit={manejarSubmit}>
      <h2>Iniciar sesión</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* input de la contraseña: igual al de email, pero ¿qué type le toca? */}
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button type="submit">Ingresar</button>
    </form>
  );
}