import { topTrandingProducts } from "../../data/products";
// React icons
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { IoLayersOutline } from "react-icons/io5";
import { FcRating } from "react-icons/fc";
import { MdOutlineChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

const TopTranding = () => {
    return (
        <div className="my-16 px-4 sm:px-8 lg:px-16">
            {/* Header Section */}
            <div className="flex flex-col items-center gap-4 mb-8">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[#222222] font-semibold">Top Trending</h3>
                <div className="cursor-pointer duration-150 font-semibold text-[#222222] hover:text-teal-600">
                    <Link className="flex items-center" to={'/shop'}>
                        <p>View all Products</p>
                        <MdOutlineChevronRight className="mt-[3px]" />
                    </Link>
                </div>
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {topTrandingProducts.map((item, idx) => (
                    <div
                        key={idx}
                        className="group relative p-4 bg-white shadow rounded-lg hover:shadow-lg transition-shadow duration-300"
                    >
                        {/* Image Section */}
                        <div className="overflow-hidden relative rounded-lg">
                            <div className="pointer-events-none">
                                <img
                                    className="transition-transform duration-500 transform scale-100 group-hover:scale-105 opacity-100 group-hover:opacity-0"
                                    src={item.img1}
                                    alt={item.name}
                                />
                                <img
                                    className="transition-transform duration-500 transform scale-110 opacity-0 group-hover:opacity-100 absolute inset-0"
                                    src={item.img2}
                                    alt={`${item.name} on hover`}
                                />
                                <div className="bg-black opacity-10 w-full h-full absolute top-0 hidden group-hover:block pointer-events-none rounded-lg"></div>
                            </div>

                            {/* Action Buttons */}
                            <div className="absolute hidden group-hover:flex flex-col gap-2 top-4 right-4">
                                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-teal-600 text-black hover:text-white shadow-md">
                                    <FaRegHeart />
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-teal-600 text-black hover:text-white shadow-md">
                                    <IoLayersOutline />
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-teal-600 text-black hover:text-white shadow-md">
                                    <FaRegEye />
                                </button>
                            </div>

                            {/* Add to Cart Button */}
                            <div className="w-full flex justify-center">
                                <button className="absolute -bottom-14 group-hover:bottom-4 duration-300 w-full py-2 text-center bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg">
                                    Add To Cart
                                </button>
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="mt-4 flex flex-col items-center gap-2">
                            <p className="font-semibold hover:text-teal-600 duration-300 cursor-pointer">
                                {item.name}
                            </p>
                            <div className="flex gap-1 text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <FcRating key={i} />
                                ))}
                            </div>
                            <p className="text-sm text-gray-500">Price: {item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopTranding;
