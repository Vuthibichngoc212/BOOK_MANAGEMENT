import Header from '@/components/layout/Header/Header';
import Banner from '../components/Banner/Banner';
import PopularCourses from '../components/PopularCourses/PopularCourses';
import ReadingJourney from '../components/ReadingJourney/ReadingJourney';
import FeedbackSection from '../components/Feedback/FeedbackSection';

const HomePage = () => {
	return (
		<>
			<Header />
			<Banner />
			<PopularCourses />
			<ReadingJourney />
			<FeedbackSection />
		</>
	);
};

export default HomePage;
