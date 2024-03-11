import bgTitle from "../../assets/img/bg-title-shop.png"
import { Link } from "react-router-dom";

export default function HeadingTitle({ title }) {
    return (
        <>
            <div className="title-bar relative h-[100px] flex flex-col justify-center items-center">
                <img src={bgTitle} alt="" className="absolute bg-cover w-full h-full -z-10" />
                <div className="text-2xl text-black font-semibold">{title}</div>
                <div className="text-xs"><Link to={"/"} className="text-gray-800">Home</Link> | <span className="text-gray-400">{title}</span></div>
            </div>
        </>
    )
}