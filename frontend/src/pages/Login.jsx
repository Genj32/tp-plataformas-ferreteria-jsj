import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

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
  <div className="login-page">
    <form className="login-card" onSubmit={manejarSubmit}>
      <img src="/img/logo.png" alt="JSJ" className="login-logo" />
      <h2>Iniciar sesión</h2>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Contraseña</label>
      <input
        id="password"
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="login-error">{error}</p>}
      <button type="submit">Ingresar</button>
    </form>
  </div>
);
}