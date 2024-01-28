import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="px-5 py-5 lg:px-28">
            <div className="flex flex-col lg:flex-row gap-12">
                <div>
                    <div className="logo font-bold text-2xl mb-5">
                        Furniro.
                    </div>
                    <div className="address text-gray-500 mb-10">
                        400 University Drive Suite 200 Coral Gables,<br /> FL 33134 USA
                    </div>
                </div>
                <div className="navigation mb-10 lg:flex lg:gap-10">
                    <div className="links mb-10 lg:basis-1/3">
                        <h1 className="text-gray-500 mb-4 lg:mb-8">Links</h1>
                        <div className="link flex lg:flex-col gap-5 lg:gap-10">
                            <Link className="cursor-pointer" to="/">Home</Link>
                            <Link className="cursor-pointer" to="/shop">Shop</Link>
                            <Link className="cursor-pointer" to="/About">About</Link>
                            <Link className="cursor-pointer" to="/Contact">Contact</Link>
                        </div>
                    </div>
                    <div className="help mb-10 lg:basis-1/3">
                        <h1 className="text-gray-500 mb-4 lg:mb-8 ">Help</h1>
                        <div className="link flex lg:flex-col gap-5 lg:gap-10">
                            <Link className="cursor-pointer" to="/">Payment Options</Link>
                            <Link className="cursor-pointer" to="/shop">Returns</Link>
                            <Link className="cursor-pointer" to="/About">Privacy Policies</Link>
                        </div>
                    </div>
                    <div className="newslatter lg:basis-1/2">
                        <h1 className="text-gray-500 mb-4 lg:mb-8">Newslatter</h1>
                        <div className="link flex flex-col lg:flex-row gap-5 lg:gap-2 items-center">
                            <input className="w-full p-2 focus:outline-none text-black border-b border-b-black" type="text" placeholder="Enter Your Email Address" />
                            <button className="bg-white p-2 font-semibold border-b border-b-black" type="submit">Subscribe</button>
                        </div>
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