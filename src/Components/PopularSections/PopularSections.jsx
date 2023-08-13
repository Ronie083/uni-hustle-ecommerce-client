import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const PopularSections = ({ thumbnail, title, brand, rating, price, discountPercentage, }) => {
    return (
        <div className="card w-72 shadow-xl">
            <figure className="px-10 pt-10">
                <img className='h-32' src={thumbnail} alt={title} />
            </figure>
            <div className="card-body">
                <p className='flex justify-between'>
                    {brand}
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                    />
                </p>
                <h2 className="card-title">
                    {title}
                </h2>
                <p className='font-semibold text-lg text-red-500'>
                    <span className='line-through text-gray-400 mr-2 '>
                        ${price}
                    </span>
                    ${price - (price * (discountPercentage / 100)).toFixed(2)}
                </p>
                <div className="card-actions justify-end">
                    <button className="btn bg-[#FED456] border-0 rounded-full">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PopularSections;