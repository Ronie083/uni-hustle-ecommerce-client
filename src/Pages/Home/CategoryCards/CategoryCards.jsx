import React from "react";
import useProducts from "../../../Hooks/useProducts";
import phone from "../../../assets/Icons/smartphone.png";
import laptop from "../../../assets/Icons/laptop.png";
import perfume from "../../../assets/Icons/perfume.png";
import shoppingBag from "../../../assets/Icons/shopping-bag.png";
import houseDecoration from "../../../assets/Icons/house-decoration.png";
import skincare from "../../../assets/Icons/skincare.png";


const CategoryCards = () => {
    const [data, isLoading] = useProducts();

    if (isLoading) return 'Loading...';

    const groupedProducts = data.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {});

    const categoryIcons = {
        smartphones: phone,
        laptops: laptop,
        fragrances: perfume,
        skincare: skincare,
        groceries: shoppingBag,
        'home-decoration': houseDecoration,
    };

    return (
        <div className="max-w-7xl mx-auto my-20">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-5xl font-bold">Embrace Variety with Our Category Showcase</h1>
                    <p className="text-lg my-3 max-w-4xl">Embrace the beauty of diversity with our captivating categories. Whether you&apos;re seeking modern technology or classic elegance, our range has something for everyone.</p>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <h1 className="text-4xl font-bold border-0 border-l-4 border-[#FED456] h-fit pl-5">200K+ <br /> <span className="text-xl font-medium">Products</span></h1>
                    <h1 className="text-4xl font-bold border-0 border-l-4 border-[#FED456] h-fit pl-5">200+ <br /> <span className="text-xl font-medium">Products</span></h1>
                </div>
            </div>
            <div className="grid grid-cols-3 justify-items-center gap-3">
                {Object.keys(groupedProducts).map((category, index) => (
                    <button className="avatar flex flex-col items-center">
                        <h1 className="uppercase my-4">{category}</h1>
                        <div key={index} className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img className="p-3" src={categoryIcons[category]} alt={category} />
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryCards;
