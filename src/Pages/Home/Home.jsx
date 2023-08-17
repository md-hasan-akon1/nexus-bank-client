import Footer from "../Shared/Footer/Footer";
import About from "./About/About";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import CreditCardPayment from "./CreditCardPayment/CreditCardPayment";
import LatestNews from "./LatestNews/LatestNews";
import OurServices from "./OurServices/OurServices";
import OurTeam from "./OurTeam/OurTeam";
import Testimonial from "./Testimonial/Testimonial";
import Comparison from "./Comparison/Comparison";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Blog from "./Blog/Blog";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Testimonial></Testimonial>
            <LatestNews></LatestNews>
            <OurServices></OurServices>
            <CreditCardPayment />
            <Comparison></Comparison>
            <OurTeam />
            <ContactUs />
            <Blog />
            <WhyChooseUs></WhyChooseUs>
            <Footer />
        </div>
    );
};

export default Home;
