import { motion } from "framer-motion"
import { fadeIn } from "../variants"
const FaqSection = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
        <motion.div
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 mb-8 dark:text-gray-600">Have questions about StudyHub Connect? We're here to help! Dive into our FAQs below to find the answers you're looking for.</p>
            <div className="space-y-4">
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How can I join StudyHub Connect?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Joining StudyHub Connect is simple! Just click on the "Sign Up" button at the top of the page and follow the prompts to create your account. Once registered, you'll have access to all our features and resources.</p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Is StudyHub Connect free to use?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Yes, StudyHub Connect is completely free to use! We believe in providing access to quality educational resources for everyone, regardless of financial constraints. Sign up today and start your learning journey with us at no cost.</p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">ECan I connect with other learners and educators on StudyHub Connect?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Absolutely! StudyHub Connect is a vibrant community of learners and educators from around the world. You can connect with like-minded individuals, join study groups, participate in discussions, and even collaborate on projects. Our platform fosters a supportive environment for networking and collaboration.</p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How can I access study materials and resources on StudyHub Connect?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Once you've signed up for an account, you'll have access to a wide range of study materials and resources. Simply navigate to the "Resources" section to explore our curated collection of articles, videos, textbooks, and more. You can also use our search feature to find specific topics or subjects you're interested in. Happy studying!</p>
                </details>
            </div>
        </motion.div>
    </section>
    );
};

export default FaqSection;