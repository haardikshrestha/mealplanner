import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import MealSuggestion from "../Pages/User/Test";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/test" element={<MealSuggestion/>} />

      </Routes>
    </Router>
  );
};

export default AppRouter;
