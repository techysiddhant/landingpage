import Navbar from "../Navbar/Navbar";
import HeroImg from "../../assets/hero-img.png";

const Hero = () => {
	return (
		<section className="background-1">
			<Navbar />
			<div className="flex flex-col lg:flex-row pl-5 lg:pl-20 pb-16 lg:mt-24 justify-center 2xl:justify-end">
				<div className="pt-10  lg:w-[60%]">
					<h1 className="text-white font-bold text-4xl  lg:text-6xl 2xl:text-8xl w-[100%]">
						Bring your problems, we&lsquo;ll handle the rest.
					</h1>
					<p className="text-[#878593] font-normal text-base 2xl:text-xl py-4 md:w-[65%]">
						Made to help you with your technology related services, We will do
						whatever technological help you like
					</p>
					<button className="button-gradient text-white px-6 py-2 text-lg my-6 rounded-md">
						Choose a Service
					</button>
				</div>
				<div>
					<img
						src={HeroImg}
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
