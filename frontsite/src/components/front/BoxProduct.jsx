import { Link } from "react-router-dom";
import share from "../../assets/img/share icon.svg";
import comparison from "../../assets/img/compare icon.svg";
import like from "../../assets/img/like icon.svg";

export default function BoxProduct({ image, name, description, price, sale }) {
    return (
        <div className="box bg-[#F4F5F7] group relative">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="description p-3">
                <div className="name font-semibold text-lg lg:text-xl mb-1">{name}</div>
                <div className="desc text-xs lg:text-sm mb-2">{description}</div>
                <div className="pricess flex flex-col">
                    <div className="price lg:text-xl font-semibold">Rp {price}</div>
                    <div className="sale text-gray-400 lg:text-xl line-through"> {sale ? `Rp` + sale : ``}</div>
                </div>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity w-full text-center" >
                    <div className="mb-5 lg:mb-10">
                        <Link to={''} className=" bg-white text-sm text-[#B88E2F] font-semibold p-2 lg:p-4 lg:text-[1.1rem]">Add To Cart</Link>
                    </div>
                    <div className="flex flex-col items-center gap-5 text-white font-semibold text-sm">
                        <Link to={''} className="flex gap-1 lg:text-xl">
                            <img src={share} alt="" />Share</Link>
                        <Link to={''} className="flex gap-1 lg:text-xl"><img src={comparison} alt="" />Compare</Link>
                        <Link to={''} className="flex gap-1 lg:text-xl"><img src={like} alt="" />Like</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}