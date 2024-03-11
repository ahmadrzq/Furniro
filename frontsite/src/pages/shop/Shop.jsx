import FrontLayout from "../../layouts/FrontLayout";
import HeadingTitle from "../../components/front/HeadingTitle";
import iconFilter from "../../assets/img/filter-shop.svg"
import iconBoxLayout from "../../assets/img/box-show-shop.svg"
import iconListLayout from "../../assets/img/list-show-shop.svg"
import quality from "../../assets/img/quality-shop.svg"
import warranty from "../../assets/img/guarantee-shop.svg"
import shipping from "../../assets/img/shipping-shop.svg"
import support from "../../assets/img/customer-support-shop.svg"
import BoxProduct from "../../components/front/BoxProduct";
import { products } from "../../services/data";


export default function Shop() {
    return (
        <FrontLayout>
            <HeadingTitle title={"Shop"} />
            <div className="setting bg-[#F9F1E7] px-3 py-3">
                <div className="left flex items-center gap-3">
                    <div className="filter flex justify-center items-center gap-1 cursor-pointer">
                        <img src={iconFilter} alt="" className="w-4" />
                        <div className="text-[1rem]">Filter</div>
                    </div>
                    <div className="layout flex justify-center items-center gap-2">
                        <img src={iconBoxLayout} alt="" className="w-4 cursor-pointer" />
                        <img src={iconListLayout} alt="" className="w-4 cursor-pointer" />
                    </div>
                    <div>|</div>
                    <div className="text-xs">Showing 1-16 of 32 results</div>
                </div>
                <div className="right hidden">
                    <div className="show">
                        <div>Show</div>
                        <div>16</div>
                    </div>
                    <div className="sort">
                        <div>Short By</div>
                        <div>Default</div>
                    </div>
                </div>
            </div>
            <div className="wrapper grid grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-5 mb-5">
                {
                    products.map((product, index) => {
                        return (
                            <BoxProduct
                                image={product.image}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                sale={product.sale}
                                key={index}
                            />
                        )
                    })
                }
            </div>
            <div className="pagination flex items-center justify-center gap-3 mx-auto w-full mb-5">
                <div className="w-[40px] h-[40px] cursor-pointer rounded-md flex justify-center items-center bg-[#B88E2F]">1</div>
                <div className="w-[40px] h-[40px] cursor-pointer rounded-md flex justify-center items-center bg-[#F9F1E7]">2</div>
                <div className="w-[40px] h-[40px] cursor-pointer rounded-md flex justify-center items-center bg-[#F9F1E7]">3</div>
                <div className="h-[40px] cursor-pointer rounded-md flex justify-center items-center bg-[#F9F1E7] px-3">Next</div>
            </div>
            <div className="benefit bg-[#F9F1E7] px-5 py-5 flex flex-col items-center text-center gap-5">
                <div className="quality">
                    <img src={quality} alt="" className="mx-auto w-10" />
                    <div>
                        <div className="font-semibold">High Quality</div>
                        <div className="text-gray-500 text-xs">Crafted from top materials</div>
                    </div>
                </div>
                <div className="quality">
                    <img src={warranty} alt="" className="mx-auto w-10" />
                    <div>
                        <div className="font-semibold">Warranty Protection</div>
                        <div className="text-gray-500 text-xs">Over 2 years</div>
                    </div>
                </div>
                <div className="quality">
                    <img src={shipping} alt="" className="mx-auto w-10" />
                    <div>
                        <div className="font-semibold">Free Shipping</div>
                        <div className="text-gray-500 text-xs">Order over 150$</div>
                    </div>
                </div>
                <div className="quality">
                    <img src={support} alt="" className="mx-auto w-10" />
                    <div>
                        <div className="font-semibold">24 / 7 Support</div>
                        <div className="text-gray-500 text-xs">Dedicated support</div>
                    </div>
                </div>
            </div>
        </FrontLayout>
    )
}