import Footer from "../components/front/Footer";
import Navbar from "../components/front/Navbar";

export default function FrontLayout({ children }) {
    return (
        <div>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    )
}