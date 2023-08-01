import Feedback from "../../components/Feedback/Feedback";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Intro from "../../components/Intro/Intro";
import Template from "../../components/Template/Template";
import Tools from "../../components/Tools/Tools";

const Home = () => {
	return (
		<>
			<Hero />
			<Intro />
			<Feedback />
			<Tools />
			<Template />
			<Footer />
		</>
	);
};

export default Home;
