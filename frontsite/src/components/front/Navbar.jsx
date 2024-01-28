import {
    Link
} from "react-router-dom";
import logo from '../../assets/img/logo.png';
import navUser from '../../assets/img/nav-user.svg';
import navSearch from '../../assets/img/nav-search.svg';
import navFavourite from '../../assets/img/nav-favorite.svg';
import navCart from '../../assets/img/nav-cart.svg';
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setmenuOpen] = useState(false)
    const [searchOnBar, setsearchOnBar] = useState(false)
    const handleMenuOpen = () => {
        setmenuOpen(!menuOpen)
    }
    const handleSearchOnBar = () => {
        setsearchOnBar(!searchOnBar)
    }
    return (
        <div className="px-4 py-4 lg:px-16 lg:py-7 flex justify-between items-center">
            <div className="logo">
                <img src={logo} alt="" className='w-36' />
            </div>
            <div className="link hidden lg:flex lg:gap-[60px]">
                <Link className="cursor-pointer lg:font-semibold lg:text-md" to="/">Home</Link>
                <Link className="cursor-pointer lg:font-semibold lg:text-md" to="/shop">Shop</Link>
                <Link className="cursor-pointer lg:font-semibold lg:text-md" to="/about">About</Link>
                <Link className="cursor-pointer lg:font-semibold lg:text-md" to="/contact">Contact</Link>
            </div>
            <div className="icon hidden lg:flex gap-[40px]">
                <img className="cursor-pointer" src={navUser} alt="" />
                <img className="cursor-pointer" src={navSearch} alt="" />
                <img className="cursor-pointer" src={navFavourite} alt="" />
                <img className="cursor-pointer" src={navCart} alt="" />
            </div>
            <div className={`${menuOpen ? "top-0 bottom-0" : "top-[-500px]"} listMenu fixed right-0 z-10 bg-[#B88E2F] text-white py-10 w-full flex flex-col justify-center transition-all`}>
                <div className="buttonClose flex justify-center mb-5">
                    <div onClick={() => {
                        handleMenuOpen()
                        setsearchOnBar(false)
                    }}>
                        <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48" d="M368 368L144 144M368 144L144 368" /></svg>
                    </div>
                </div>
                <div className="icon flex justify-center gap-4 mb-5">
                    <img className="cursor-pointer" src={navUser} alt="" />
                    <img className="cursor-pointer" src={navSearch} alt="" onClick={handleSearchOnBar} />
                    <img className="cursor-pointer" src={navFavourite} alt="" />
                    <img className="cursor-pointer" src={navCart} alt="" />
                </div>
                <form className={`${searchOnBar ? "" : "hidden"} mb-5 flex flex-col items-center`}>
                    <input className="w-3/4 p-2 focus:outline-none text-black mb-2 " type="text" />
                    <button className="bg-white text-[#B88E2F] px-2 py-1 font-semibold" type="submit">Search</button>
                </form>
                <div className="link flex flex-col items-center gap-8 text-2xl font-semibold">
                    <Link className="cursor-pointer" to="/">Home</Link>
                    <Link className="cursor-pointer" to="/shop">Shop</Link>
                    <Link className="cursor-pointer" to="/about">About</Link>
                    <Link className="cursor-pointer" to="/contact">Contact</Link>
                </div>
            </div>
            <div className="menu lg:hidden" onClick={handleMenuOpen}>
                <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48" d="M88 152h336M88 256h336M88 360h336" /></svg>
            </div>
        </div>
    )
}