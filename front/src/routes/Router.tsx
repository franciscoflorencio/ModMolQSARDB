import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Search2 from "../pages/Search2";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import UserRules from "../pages/UserRules";


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element = { <Home /> } path = "/" />
                <Route element = { <Search /> } path = "/Search" />
                <Route element = { <About /> } path = "/About" />
                <Route element = { <Contact /> } path = "/Contact" />
                <Route element = { <Products /> } path = "/Products" />
                <Route element = { <UserRules /> } path = "/UserRules" />
                <Route element = { <Search2 /> } path = "/Search2" />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
