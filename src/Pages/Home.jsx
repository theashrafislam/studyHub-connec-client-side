import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "../Components/Banner";

const Home = () => {
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Home Page || StudyHub Connect</title>
                </Helmet>
                <Banner/>
            </div>
        </HelmetProvider>
    );
};

export default Home;