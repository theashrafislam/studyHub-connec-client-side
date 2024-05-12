import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Root = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <Navbar />
                <div className='min-h-[calc(100vh-393px)]'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Root;