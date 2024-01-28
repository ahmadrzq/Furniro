import FrontLayout from "../../layouts/FrontLayout";
import bgBanner from "../../assets/img/banner-homepage.png";
import category1 from "../../assets/img/category-home-1.png";
import category2 from "../../assets/img/category-home-2.png";
import category3 from "../../assets/img/category-home-3.png";
import product1 from "../../assets/img/product-home-1.png";
import product2 from "../../assets/img/product-home-2.png";
import product3 from "../../assets/img/product-home-3.png";
import product4 from "../../assets/img/product-home-4.png";
import product5 from "../../assets/img/product-home-5.png";
import product6 from "../../assets/img/product-home-6.png";
import product7 from "../../assets/img/product-home-7.png";
import product8 from "../../assets/img/product-home-8.png";
import more1 from "../../assets/img/more-home-1.png";
import more2 from "../../assets/img/more-home-2.png";
import more3 from "../../assets/img/more-home-3.png";
import share from "../../assets/img/share icon.svg";
import comparison from "../../assets/img/compare icon.svg";
import like from "../../assets/img/like icon.svg";
import arrow from "../../assets/img/arrow-right.svg";
import arrow2 from "../../assets/img/arrow-right2.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
    const products = [
        {
            name: "Syltherine",
            description: "Stylish cafe chair",
            price: 2500000,
            sale: 3500000,
            image: product1
        },
        {
            name: "Leviosa",
            description: "Stylish cafe chair",
            price: 2500000,
            sale: "",
            image: product2
        },
        {
            name: "Lolito",
            description: "Luxury big sofa",
            price: 7000000,
            sale: 14000000,
            image: product3
        },
        {
            name: "Respira",
            description: "Outdoor bar table and stool",
            price: 500000,
            sale: "",
            image: product4
        },
        {
            name: "Grifo",
            description: "Night Lamp",
            price: 1500000,
            sale: "",
            image: product5
        },
        {
            name: "Muggo",
            description: "Small mug",
            price: 150000,
            sale: "",
            image: product6
        },
        {
            name: "Pingky",
            description: "Cute bed set",
            price: 7000000,
            sale: 14000000,
            image: product7
        },
        {
            name: "Potty",
            description: "Minimalist flower pot",
            price: 500000,
            sale: "3500000",
            image: product8
        },
    ]

    const mores = [
        {
            name: "01. Bed Room",
            description: "Inner Piece",
            image: more1
        },
        {
            name: "02. Kitchen",
            description: "Inner Piece",
            image: more2
        },
        {
            name: "03. Living Room",
            description: "Inner Piece",
            image: more3
        },
        {
            name: "04. Bathroom",
            description: "Inner Piece",
            image: more1
        },
        {
            name: "05. Dining Room",
            description: "Inner Piece",
            image: more2
        },
        {
            name: "06. Bedroom",
            description: "Inner Piece",
            image: more3
        },
    ]

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        const nextIndex = (currentSlide + 1) % mores.length;
        setCurrentSlide(nextIndex);
    };

    return (
        <FrontLayout>
            <div>
                <div className="banner relative w-full lg:h-screen mb-5 lg:mb-10">
                    <img src={bgBanner} alt="" className="bg-cover lg:w-full" />
                    <div className="new m-5 py-6 px-3 bg-[#FFF3E3] lg:absolute lg:top-1/2 lg:right-0 lg:lg:w-[500px] lg:h-[350px] lg:px-12 lg:-translate-y-1/2 lg:flex flex-col justify-center">
                        <div className="text-xs lg:text-sm mb-2 lg:mb-5 font-semibold">New Arrival</div>
                        <div className="text-[#B88E2F] font-bold text-3xl lg:text-[3rem] mb-2 lg:mb-5 lg:leading-none">Discover Our New Collection</div>
                        <div className="text-xs lg:text-xl mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, vel.</div>
                        <Link to="/product/1" className="bg-[#B88E2F] text-white p-3 inline-block hover:bg-white hover:text-[#B88E2F] hover:outline hover:outline-1 hover:outline-[#B88E2F] lg:w-1/3 lg:font-bold text-center lg:p-5 lg:text-xl">Buy Now</Link>
                    </div>
                </div>
                <div className="category px-5 py-5 lg:px-28 mb-5 lg:mb-10">
                    <h1 className="text-center mb-2 font-bold text-xl lg:text-2xl">Browse The Range</h1>
                    <p className="text-center mb-2 lg:mb-5 text-xs lg:text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam molestias temporibus natus.</p>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-5">
                        <div className="box">
                            <img src={category1} alt="" className="mb-2" />
                            <div className="text-center font-semibold">Dining</div>
                        </div>
                        <div className="box">
                            <img src={category2} alt="" className="mb-2" />
                            <div className="text-center font-semibold">Living</div>
                        </div>
                        <div className="box">
                            <img src={category3} alt="" className="mb-2" />
                            <div className="text-center font-semibold">Bedroom</div>
                        </div>

                    </div>
                </div>
                <div className="products px-5 py-5 lg:px-28 mb-5 lg:mb-10">
                    <h1 className="text-center mb-2 lg:mb-5 font-bold text-xl lg:text-2xl">Our Products</h1>
                    <div className="product grid grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-5 mb-5">
                        {
                            products.map((product, index) => {
                                return (
                                    <div className="box bg-[#F4F5F7] group relative" key={index}>
                                        <div>
                                            <img src={product.image} alt="" />
                                        </div>
                                        <div className="description p-3">
                                            <div className="name font-semibold text-lg lg:text-xl mb-1">{product.name}</div>
                                            <div className="desc text-xs lg:text-sm mb-2">{product.description}</div>
                                            <div className="pricess flex flex-col">
                                                <div className="price lg:text-xl font-semibold">Rp {product.price}</div>
                                                <div className="sale text-gray-400 lg:text-xl line-through"> {product.sale ? `Rp` + product.sale : ``}</div>
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
                            )
                        }
                    </div>
                    <div className="text-center">
                        <Link to="/product" className="bg-white outline outline-1 outline-[#B88E2F] text-[#B88E2F] p-3 inline-block hover:bg-[#B88E2F] hover:text-white">Show More</Link>
                    </div>
                </div>
                <div className="more bg-[#FCF8F3] px-5 py-5 lg:px-28 flex flex-col lg:flex-row lg:items-center">
                    <div className="flex flex-col mb-5 lg:me-10">
                        <div className="font-bold text-2xl lg:text-3xl mb-2 lg:mb-5">50+ Beautiful rooms inspiration</div>
                        <div className="text-xs lg:text-[1.2rem] leading-none text-gray-500 mb-2 lg:mb-5" >Our designer already made a lot of beautiful prototipe of rooms that inspire you</div>
                        <div>
                            <Link to="/product" className="bg-[#B88E2F] text-white p-3 inline-block hover:bg-white hover:text-[#B88E2F] hover:outline hover:outline-1 hover:outline-[#B88E2F]">See More</Link>
                        </div>
                    </div>
                    <div className="slider relative lg:max-w-[50%] flex">
                        <div className="overflow-x-scroll no-scrollbar">
                            <div className="flex gap-2">
                                {
                                    mores.map((more, index) => {
                                        return (
                                            <div className={`relative ${index === currentSlide ? '' : 'hidden lg:block'}`}
                                                style={{ minWidth: '300px', width: '300px' }}
                                                key={index}>
                                                <div className="w-[300px] h-[400px] relative">
                                                    <img src={more.image} alt="" className="w-[280px] h-[400px] bg-cover bg-no-repeat" />
                                                    <div className="absolute bottom-5 left-5 flex items-end">
                                                        <div className="bg-white py-4 px-8 opacity-70">
                                                            <div className="text-sm text-gray-600">{more.name}</div>
                                                            <div className="text-xl font-semibold">{more.description}</div>
                                                        </div>
                                                        <Link className="bg-[#B88E2F] w-10 h-10 flex justify-center items-center">
                                                            <img src={arrow} alt="" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="absolute lg:hidden z-50 top-1/2 right-[-40px] transform -translate-x-1/2 -translate-y-1/2 flex justify-center">
                            <button
                                className="w-10 h-10 flex justify-center items-center bg-white text-white rounded-full shadow-2xl"
                                onClick={nextSlide}
                            >
                                <img src={arrow2} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="share hidden"></div>
            </div>
        </FrontLayout>
    )
}