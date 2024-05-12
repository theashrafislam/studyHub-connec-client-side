import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "../Components/Banner";
import FeatureSection from "../Components/FeatureSection";
import FaqSection from "../Components/FaqSection";

const Home = () => {
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Home Page || StudyHub Connect</title>
                </Helmet>
                <Banner/>
                <FeatureSection/>
                <FaqSection/>
            </div>
        </HelmetProvider>
    );
};

export default Home;