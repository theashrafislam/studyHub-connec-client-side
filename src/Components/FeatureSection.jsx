import img1 from '../assets/FetureImages/featureImg1.jpg';
import img2 from '../assets/FetureImages/fetureImage2.jpg';
import img3 from '../assets/FetureImages/fetureImage3.jpg';
const FeatureSection = () => {
    return (
        <div className="my-16">
            <div className='space-y-4 text-center lg:mx-0 mx-4'>
                <h1 className='text-3xl font-bold'>Explore Our Features</h1>
                <p className='lg:w-7/12 lg:mx-auto'>Unlock the full potential of our platform with our comprehensive range of features. Dive into a world of possibilities designed to enhance your learning experience. From interactive study materials to seamless collaboration tools, our features are crafted to empower you every step of the way. Discover what sets us apart and revolutionize your learning journey with StudyHub Connect</p>
            </div>
            <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src={img1} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                            <span className="text-xs uppercase dark:text-gray-600">Join, it's free</span>
                            <h3 className="text-3xl font-bold">Interactive Study Tools</h3>
                            <p className="my-6 dark:text-gray-600">Engage in interactive learning experiences with our suite of study tools. From flashcards and quizzes to virtual labs and simulations, our platform offers a variety of interactive resources to reinforce your understanding and retention of key concepts. Dive in and discover new ways to learn!</p>
                            <button className="btn btn-outline btn-secondary">More About</button>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src={img2} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                            <span className="text-xs uppercase dark:text-gray-600">Join, it's free</span>
                            <h3 className="text-3xl font-bold">Personalized Learning Recommendations</h3>
                            <p className="my-6 dark:text-gray-600">Receive personalized learning recommendations tailored to your interests and learning style. Our platform utilizes advanced algorithms to analyze your preferences, progress, and past interactions to deliver relevant and timely suggestions. Stay on track and make the most of your study sessions with personalized guidance.</p>
                            <button className="btn btn-outline btn-secondary">More About</button>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src={img3} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                            <span className="text-xs uppercase dark:text-gray-600">Join, it's free</span>
                            <h3 className="text-3xl font-bold">Collaborative Learning Spaces</h3>
                            <p className="my-6 dark:text-gray-600">Collaborate with peers and educators in our virtual learning spaces. Whether you're working on group projects, participating in discussions, or seeking feedback on your work, our collaborative features make it easy to connect and collaborate from anywhere. Join the conversation and harness the power of collective learning!</p>
                            <button className="btn btn-outline btn-secondary">More About</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeatureSection;