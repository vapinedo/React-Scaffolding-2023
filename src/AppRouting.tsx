import { Route, Routes } from "react-router-dom";
import Navbar from "./shared/components/Navbar/Navbar";
import HomePage from "./feature/home/pages/home/HomePage";
import ProductPage from "./feature/product/pages/product-page/ProductPage";

export default function AppRouting() {
    return (
        <section className="container">
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductPage />} />
            </Routes>
        </section>
    )
}