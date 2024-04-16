
import Home from "../Pages/Home";
import Carts from "../Pages/Carts";
import MealsCategoryList from "../Pages/MealsCategoryList";
import MealsDetails from "../Pages/MealsDetails";
import Orders from "../Pages/Orders";

import { Routes, Route } from "react-router-dom";
import NotFound from "../Pages/NotFound";
import App from "../Pages/App/App";


function Router() {
    return (
        <App>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/card'} element={<Carts />} />
                <Route path={'/catogory/:categoryitem'} element={<MealsCategoryList />} />
                <Route path={'/catogoryDetails/:id'} element={<MealsDetails />} />
                <Route path={'/orders'} element={<Orders />} />
                <Route path={'*'} element={<NotFound />} />
            </Routes>
        </App>
    )
}

export default Router

