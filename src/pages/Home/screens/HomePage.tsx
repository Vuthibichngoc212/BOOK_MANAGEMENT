import Header from '@/components/layout/Header/Header';
import Banner from '../components/Banner/Banner';
import PopularCourses from '../components/PopularCourses/PopularCourses';
import ReadingJourney from '../components/ReadingJourney/ReadingJourney';
import FeedbackSection from '../components/Feedback/FeedbackSection';
import Footer from '@/components/layout/Footer/Footer';

const HomePage = () => {
	return (
		<>
			<Header />
			<Banner />
			<PopularCourses />
			<ReadingJourney />
			<FeedbackSection />
			<Footer />
		</>
	);
};

export default HomePage;
