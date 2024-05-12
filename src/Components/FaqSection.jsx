const FaqSection = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="divide-y dark:divide-gray-300">
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">How can I join StudyHub Connect?</h3>
                        <p className="md:pl-0 md:col-span-7">Joining StudyHub Connect is simple! Just click on the "Sign Up" button at the top of the page and follow the prompts to create your account. Once registered, you'll have access to all our features and resources.</p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">Is StudyHub Connect free to use?</h3>
                        <p className="md:pl-0 md:col-span-7">Yes, StudyHub Connect is completely free to use! We believe in providing access to quality educational resources for everyone, regardless of financial constraints. Sign up today and start your learning journey with us at no cost.</p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">Can I connect with other learners and educators on StudyHub Connect?</h3>
                        <p className="md:pl-0 md:col-span-7">Absolutely! StudyHub Connect is a vibrant community of learners and educators from around the world. You can connect with like-minded individuals, join study groups, participate in discussions, and even collaborate on projects. Our platform fosters a supportive environment for networking and collaboration.</p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">How can I access study materials and resources on StudyHub Connect?</h3>
                        <p className="md:pl-0 md:col-span-7">Once you've signed up for an account, you'll have access to a wide range of study materials and resources. Simply navigate to the "Resources" section to explore our curated collection of articles, videos, textbooks, and more. You can also use our search feature to find specific topics or subjects you're interested in. Happy studying!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;