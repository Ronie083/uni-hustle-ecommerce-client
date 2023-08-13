import HomeHeadings from "../../../Components/Headings/HomeHeadings";
import PopularSections from "../../../Components/PopularSections/PopularSections";
import useProducts from "../../../Hooks/useProducts";


const Popular = () => {

    const [data, isLoading] = useProducts();

    if (isLoading) return 'Loading...';

    const popularPhones = data.filter(smartPhone =>
        smartPhone.category === "smartphones" && smartPhone.rating >= 4.3
    )

    console.log(popularPhones)

    return (
        <div className="mt-20">
            <HomeHeadings
                heading={"Bestsellers Galore: Discover What's Hot"}
                headingText={"Unveil our bestsellers, a collection of products that have risen to the top. Join the trendsetters and explore what's hot right now."}
            />
            <div className='p-5'>
                <h1 className='text-2xl font-semibold'>Popular Smartphones</h1>
                <div className='grid grid-cols-3 justify-items-center'>
                    {
                        popularPhones.map(popularPhone => (
                            <PopularSections key={popularPhone.id}
                                heading={''}
                                thumbnail={popularPhone.thumbnail}
                                title={popularPhone.title}
                                brand={popularPhone.brand}
                                rating={popularPhone.rating}
                                price={popularPhone.price}
                                discountPercentage={popularPhone.discountPercentage} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Popular;