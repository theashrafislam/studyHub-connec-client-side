import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Root = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <Navbar/>
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default Root;