import About from "./About";
import AvailableDonors from "./AvailableDonors";
import Banner from "./Banner";
import Contact from "./Contact";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <AvailableDonors></AvailableDonors>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;