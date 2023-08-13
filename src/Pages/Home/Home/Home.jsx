import Banner from "../Banner/Banner";
import CategoryCards from "../CategoryCards/CategoryCards";
import Popular from "../Popular/Popular";


const Home = () => {
    return (
        <div>
            <Banner />
            <div className="max-w-7xl mx-auto">
                <CategoryCards />
                <Popular />
            </div>
        </div>
    );
};

export default Home;