import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Todo from "../pages/todo";

const Navigation = () => {
    return (
        <Routes>
            <Route
                path={"/"}
                element={<Home />}
            />
            <Route 
                path={"/about"}
                element={<About />}
            />
            <Route
                path={"/todo"}
                element={<Todo />}
            />
        </Routes>
    );
};

export default Navigation;
