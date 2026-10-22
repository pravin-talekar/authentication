
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, LockKeyhole } from "lucide-react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  const serverUrl = import.meta.env.VITE_SERVER_URL;

  if (!serverUrl) {
    alert("Server URL is not configured.");
    return;
  }

  try {
    const res = await axios.post(
      `${serverUrl}/api/auth/login`,
      {
        email,
        password,
      }
    );

    console.log("Login response:", res.data);
    alert("User logged in successfully!");

    setEmail("");
    setPassword("");
    navigate("/");
  } catch (error) {
    console.error(
      "Login failed:",
      error.response?.status,
      error.response?.data || error.message
    );

    if (error.response?.status === 404) {
      alert("Login API route not found. Check your backend routes.");
    } else if (error.response?.status === 401) {
      alert("Invalid email or password.");
    } else {
      alert("An error occurred during login.");
    }
  }
};

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">N</div>
          <h1>Welcome back</h1>
          <p>Login in to continue to your account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>

            <div className="input-wrapper">
              <Mail size={19} className="input-icon" />

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>

            <div className="input-wrapper">
              <LockKeyhole
                size={19}
                className="input-icon"
              />

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
              >
                {showPassword
                  ? <EyeOff size={19} />
                  : <Eye size={19} />}
              </button>
            </div>
          </div>

          <div className="login-options">
            <label className="remember-label">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>

            <Link to="/forgot-password" className="forgot-link">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="login-button">
            LogIn <span>→</span>
          </button>
        </form>

        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/register">Create account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
