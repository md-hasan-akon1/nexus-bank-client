import About from "./About/About";
import Banner from "./Banner/Banner";
import CreditCardPayment from "./CreditCardPayment/CreditCardPayment";
import LatestNews from "./LatestNews/LatestNews";
import OurServices from "./OurServices/OurServices";
import Testimonial from "./Testimonial/Testimonial";
import Comparison from "./Comparison/Comparison";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Testimonial></Testimonial>
            <LatestNews></LatestNews>
            <OurServices></OurServices>
            <CreditCardPayment/>
            <Comparison></Comparison>
        </div>
    );
};

export default Home;
