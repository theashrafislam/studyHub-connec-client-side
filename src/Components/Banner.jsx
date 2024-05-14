import img1 from '../assets/BannerImages/image1.jpg';
import img2 from '../assets/BannerImages/image2.jpeg';
import img3 from '../assets/BannerImages/image3.jpeg';
import img4 from '../assets/BannerImages/image4.jpg';
import img5 from '../assets/BannerImages/image5.jpg';
import img6 from '../assets/BannerImages/image6.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full lg:h-[500px] h-[300px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl object-cover" />
                <div className="absolute h-full flex items-center rounded-xl left-0 top-0 text-white bg-gradient-to-r from-gray-900 to-transparent">
                    <div className='text-white space-y-4 lg:space-y-6 lg:w-1/3 pl-8 lg:pl-16 pr-4 lg:pr-0'>
                        <h1 className='lg:text-5xl text-2xl font-bold'>Mastering the Art of Time Management</h1>
                        <p className='text-sm lg:text-base'>Learn how to effectively manage your time and boost productivity with our expert tips and strategies. From prioritizing tasks to minimizing distractions, discover the secrets to maximizing your efficiency and achieving your goals.</p>
                        <div className='flex items-center gap-4 lg:gap-6'>
                            <button className="btn btn-outline btn-secondary">More About</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-2 lg:gap-4 justify-end transform -translate-y-1/2 left-2 lg:left-5 right-2 lg:right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl object-cover" />
                <div className="absolute h-full flex items-center rounded-xl left-0 top-0 text-white bg-gradient-to-r from-gray-900 to-transparent">
                    <div className='text-white space-y-4 lg:space-y-6 lg:w-1/3 pl-8 lg:pl-16 pr-4 lg:pr-0'>
                        <h1 className='lg:text-5xl text-2xl font-bold'>Unlocking the Power of Critical Thinking</h1>
                        <p className='text-sm lg:text-base'>Develop your critical thinking skills and enhance your problem-solving abilities with our comprehensive guide. Explore practical techniques for analyzing information, evaluating arguments, and making informed decisions in any situation.</p>
                        <div className='flex items-center gap-4 lg:gap-6'>
                            <button className="btn btn-outline btn-secondary">More About</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-2 lg:gap-4 justify-end transform -translate-y-1/2 left-2 lg:left-5 right-2 lg:right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl object-cover" />
                <div className="absolute h-full flex items-center rounded-xl left-0 top-0 text-white bg-gradient-to-r from-gray-900 to-transparent">
                    <div className='text-white space-y-4 lg:space-y-6 lg:w-1/3 pl-8 lg:pl-16 pr-4 lg:pr-0'>
                        <h1 className='lg:text-5xl text-2xl font-bold'>Navigating the World of Online Learning</h1>
                        <p className='text-sm lg:text-base'>Embark on a journey of digital discovery as we navigate the challenges and opportunities of online learning. From choosing the right courses to staying motivated and focused, join us as we explore the keys to success in the virtual classroom.</p>
                        <div className='flex items-center gap-4 lg:gap-6'>
                            <button className="btn btn-outline btn-secondary">More About</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-2 lg:gap-4 justify-end transform -translate-y-1/2 left-2 lg:left-5 right-2 lg:right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl object-cover" />
                <div className="absolute h-full flex items-center rounded-xl left-0 top-0 text-white bg-gradient-to-r from-gray-900 to-transparent">
                    <div className='text-white space-y-4 lg:space-y-6 lg:w-1/3 pl-8 lg:pl-16 pr-4 lg:pr-0'>
                        <h1 className='lg:text-5xl text-2xl font-bold'>Exploring Career Paths in Tech</h1>
                        <p className='text-sm lg:text-base'>Discover the exciting world of tech careers and explore the diverse opportunities available in this rapidly evolving industry. From software development to data science, uncover the skills and pathways to launch your dream career in tech.</p>
                        <div className='flex items-center gap-4 lg:gap-6'>
                            <button className="btn btn-outline btn-secondary">More About</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-2 lg:gap-4 justify-end transform -translate-y-1/2 left-2 lg:left-5 right-2 lg:right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-xl object-cover" />
                <div className="absolute h-full flex items-center rounded-xl left-0 top-0 text-white bg-gradient-to-r from-gray-900 to-transparent">
                    <div className='text-white space-y-4 lg:space-y-6 lg:w-1/3 pl-8 lg:pl-16 pr-4 lg:pr-0'>
                        <h1 className='lg:text-5xl text-2xl font-bold'>The Science of Stress Management</h1>
                        <p className='text-sm lg:text-base'>Delve into the science behind stress and learn practical strategies for managing its impact on your mental and physical well-being. Explore mindfulness techniques, relaxation exercises, and other evidence-based approaches to cultivate resilience and thrive in challenging times.</p>
                        <div className='flex items-center gap-4 lg:gap-6'>
                            <button className="btn btn-outline btn-secondary">More About</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-2 lg:gap-4 justify-end transform -translate-y-1/2 left-2 lg:left-5 right-2 lg:right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-xl object-cover" />
                <div className="absolute h-full flex items-center rounded-xl left-0 top-0 text-white bg-gradient-to-r from-gray-900 to-transparent">
                    <div className='text-white space-y-4 lg:space-y-6 lg:w-1/3 pl-8 lg:pl-16 pr-4 lg:pr-0'>
                        <h1 className='lg:text-5xl text-2xl font-bold'>Unlocking the Secrets of Effective Communication</h1>
                        <p className='text-sm lg:text-base'>Master the art of communication and unlock the secrets to building strong relationships, both personally and professionally. From active listening to assertive speaking, explore practical tips and techniques for fostering clear, confident, and impactful communication skills.</p>
                        <div className='flex items-center gap-4 lg:gap-6'>
                            <button className="btn btn-outline btn-secondary">More About</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-2 lg:gap-4 justify-end transform -translate-y-1/2 left-2 lg:left-5 right-2 lg:right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
