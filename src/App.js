import "./App.css";
import LoginRegister from "./Pages/LoginRegister";
import HomePage from "./Pages/HomePage";
import { useAuth } from "./context/authContext";



function App() {
  const { loggedIn } = useAuth();
  return (
    <div className="app">
      {loggedIn ? <HomePage /> : <LoginRegister />}
    </div>
  );
}

export default App;
