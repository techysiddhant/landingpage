import Navbar from "../Navbar/Navbar";
import HeroImg from "../../assets/hero-img.svg";

const Hero = () => {
	return (
		<section className="background-1">
			<Navbar />
			<div className="flex flex-col lg:flex-row pl-5 lg:pl-20 pb-16 lg:mt-24 justify-center 2xl:justify-end lg:gap-10">
				<div className="pt-10 w-full  lg:w-[60%] ">
					<h1 className="text-white font-bold text-[26px] md:text-6xl  lg:text-6xl 3xl:text-8xl w-[100%] ">
						Bring your problems,
					</h1>
					<h2 className="text-white font-bold text-[26px] md:text-6xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl w-[100%] lg:py-4">
						we&lsquo;ll handle the rest.
					</h2>
					<p className="text-[#878593] font-inter font-normal text-[18px] md:text-[20px] 2xl:text-xl py-4 md:w-[80%] ">
						Made to help you with your technology related services, We will do
						whatever technological help you like
					</p>
					<button className="font-inter font-semibold button-gradient text-white px-6 py-2 text-[14px] my-6 rounded-lg">
						Choose a Service
					</button>
				</div>
				<div className="hidden lg:block">
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
