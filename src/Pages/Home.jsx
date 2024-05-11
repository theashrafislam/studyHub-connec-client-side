import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Home Page || StudyHub Connect</title>
                </Helmet>
                <h1>THis is home page</h1>
            </div>
        </HelmetProvider>
    );
};

export default Home;