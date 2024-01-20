import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="flex flex-col p-5">
            <div className="logo font-bold text-2xl mb-5">
                Furniro.
            </div>
            <div className="address text-gray-500 mb-10">
                400 University Drive Suite 200 Coral Gables,<br /> FL 33134 USA
            </div>
            <div className="navigation mb-10">
                <div className="links mb-10">
                    <h1 className="text-gray-500 mb-4">Links</h1>
                    <div className="link flex gap-5">
                        <Link className="cursor-pointer" to="/">Home</Link>
                        <Link className="cursor-pointer" to="/shop">Shop</Link>
                        <Link className="cursor-pointer" to="/About">About</Link>
                        <Link className="cursor-pointer" to="/Contact">Contact</Link>
                    </div>
                </div>
                <div className="help mb-10">
                    <h1 className="text-gray-500 mb-4">Help</h1>
                    <div className="link flex gap-5">
                        <Link className="cursor-pointer" to="/">Payment Options</Link>
                        <Link className="cursor-pointer" to="/shop">Returns</Link>
                        <Link className="cursor-pointer" to="/About">Privacy Policies</Link>
                    </div>
                </div>
                <div className="newslatter">
                    <h1 className="text-gray-500 mb-4">Newslatter</h1>
                    <div className="link flex flexcol gap-5 items-center">
                        <input className="w-full p-2 focus:outline-none text-black border-b border-b-black" type="text" placeholder="Enter Your Email Address" />
                        <button className="bg-white p-2 font-semibold border-b border-b-black" type="submit">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="line w-full h-[3px] bg-gray-300 mb-5"></div>
            <div className="text-center">
                2023 furino. All rights reverved
            </div>
        </div>
    )
}