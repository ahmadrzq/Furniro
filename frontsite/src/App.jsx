import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import DetailProduct from "./pages/detailProduct/DetailProduct";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<DetailProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
