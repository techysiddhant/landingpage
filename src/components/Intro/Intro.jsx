/* eslint-disable react/prop-types */
import Intro1 from "../../assets/intro-1.svg";
import Intro2 from "../../assets/intro-2.png";
import Intro3 from "../../assets/intro-3.png";
import feature1 from "../../assets/feature-1.svg";
import feature2 from "../../assets/feature-2.svg";
import feature3 from "../../assets/feature-3.svg";
import feature4 from "../../assets/feature-4.svg";
import feature5 from "../../assets/feature-5.svg";
import MsIntro2 from "../../assets/mobile-intro-2.png";
import { BsArrowRight } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
const Card = ({ imgUrl, title, desc }) => {
	return (
		<div className="w-[300px] md:w-[360px]  md:h-[500px] flex flex-col rounded-md">
			<div>
				<img
					src={imgUrl}
					alt=""
				/>
			</div>
			<div className="p-10  bg-black lg:bg-white font-inter border-custom lg:pb-8 lg:h-full">
				<h4 className="font-extrabold text-white   text-sm uppercase lg:text-[#A667E4]">
					{title}
				</h4>
				<p className=" text-sm lg:text-base font-extrabold text-white lg:text-[#853BCE] py-5">
					{desc}
				</p>
				<BiRightArrowAlt className="lg:text-[#A667E4] text-white text-3xl font-bold" />
			</div>
		</div>
	);
};
const Intro = () => {
	return (
		<>
			<section className="py-10 bg-[#13111C] px-5 md:px-10">
				<div>
					<h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center text-white">
						Why Choose Ricoz
					</h1>
					<p className="text-lg font-normal text-center text-[#A1A0AB] py-4 hidden lg:block">
						Most Flexible e-commerce platform
					</p>

					<div className="flex flex-col lg:flex-row lg:justify-between bg-intro-1 rounded-2xl lg:rounded-md px-6 md:px-10 lg:pt-10 text-white my-10 max-w-[1200px] mx-auto">
						<div className="pt-10">
							<h2 className="font-inter font-semibold text-3xl">Easy To Use</h2>
							<p className="font-inter font-normal text-base md:w-[70%] text-[#A1A0AB] py-4 hidden lg:block">
								Search from 1000’s of prebuild templates get the best Designed websites,
								Banners and much more Affordable Pricing, Easy Customization, b2c Store,
								b2b Store
							</p>
							<p className="font-inter font-normal text-[20px] md:w-[70%] text-[#A1A0AB] py-4 lg:hidden">
								Command the interface at your fingertips. Go to any page, create an
								object, secret, and much more.
							</p>
							<button className="bg-[#853BCE] px-4 py-3 rounded-md font-inter font-medium mb-20 hidden lg:block">
								<span className="bg-[rgba(255,255,255,0.25)] px-2 py-1 mr-4 text-center rounded-md">
									Search
								</span>
								Show Palettle
							</button>
							<button className="bg-[#853BCE] px-4 py-2 rounded-md font-inter font-medium my-4 lg:hidden">
								Show Services
							</button>
						</div>
						<div className="flex md:justify-center lg:justify-end pt-5 lg:pt-20 w-full">
							<img
								src={Intro1}
								alt=""
							/>
						</div>
					</div>

					<div className="flex gap-10 px-2 lg:px-10 justify-center items-center lg:justify-between max-w-[1200px] mx-auto w-full flex-col lg:flex-row lg:py-14">
						<div className=" font-inter flex flex-col gap-5 text-white bg-intro-2 h-full lg:h-[540px] max-w-[540px] w-full pt-10 md:px-10 px-5 rounded-lg items-center lg:justify-between">
							<div>
								<h3 className=" font-semibold font-inter text-2xl capitalize">
									Social Media management
								</h3>
								<p className="py-5 font-inter text-[#878593] text-lg  font-normal hidden lg:block">
									Maintain your social media platforms with ricoz and easily gain
									followers
								</p>
								<p className="py-5 font-inter text-[#878593] text-[16px]  font-normal lg:hidden">
									Maintain and sync different variables from development, staging, to
									prod.
								</p>
								<button className="text-[#A667E4] font-inter font-normal flex items-center gap-2">
									View<p className="lg:hidden">Docs</p>
									<p className="lg:block hidden">Perks</p>
									<BsArrowRight className="text-xl" />
								</button>
							</div>
							<div className="">
								<img
									src={Intro2}
									alt=""
									className="lg:block	hidden"
								/>
								<img
									src={MsIntro2}
									alt=""
									className="lg:hidden"
								/>
							</div>
						</div>
						<div className=" font-inter flex flex-col gap-5 text-white bg-intro-3 lg:h-[540px] max-w-[540px] w-full pt-10  rounded-lg items-center lg:justify-between overflow-hidden">
							<div className="md:px-10 px-5">
								<h3 className=" font-semibold  font-inter text-xl lg:text-2xl capitalize">
									Usage-based Pricing
								</h3>
								<p className="py-5 font-inter text-[#878593] text-lg  font-normal hidden lg:block">
									We at Ricoz Charge only according to your usage and services selected
								</p>
								<p className="py-5 text-[#878593] text-lg font-inter  font-normal lg:hidden">
									Extend your runway. Ricoz bills only for compute performed on the
									platform.
								</p>
								<button className="text-[#A667E4] font-inter flex items-center gap-4">
									View our Services <BsArrowRight className="text-xl" />{" "}
								</button>
							</div>
							<div className="w-full ">
								<img
									src={Intro3}
									alt=""
									className="w-full "
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="bg-[#291839] lg:bg-[#13111C] px-5 lg:py-10">
				<h3 className="text-3xl md:text-4xl font-bold font-poppins text-center text-white hidden lg:block">
					Incredible Features Provided by Ricoz
				</h3>

				<div className="w-full flex gap-6 flex-wrap justify-center  lg:gap-10 items-center max-w-[1200px] mx-auto lg:justify-between py-10 lg:py-20">
					<div className="w-[300px] lg:w-[360px] md:w-[370px] lg:h-[500px] flex flex-col rounded-md ">
						<div className="font-inter h-full">
							<p className="text-white uppercase text-center lg:text-left font-inter font-semibold lg:font-extrabold lg:text-sm text-xs">
								Do more for your business
							</p>
							<h4 className="font-extrabold text-center lg:text-left capitalize text-2xl md:text-[32px] lg:text-3xl  text-white py-5">
								The future of work with Ricoz.
							</h4>
							<p className="text-base font-normal text-center lg:text-left text-white opacity-90 lg:w-[80%]">
								Learn more about our favorite customer engagement tools.
							</p>
						</div>
					</div>
					<Card
						imgUrl={feature1}
						title="call pop"
						desc="Know customers before
starting any conversation."
					/>
					<Card
						imgUrl={feature2}
						title="Customer Analytics"
						desc="Create amazing relationships
with great customer insight."
					/>
					<Card
						imgUrl={feature3}
						title="Customer Journey"
						desc="Understand how your
customers feel through every
interaction."
					/>
					<Card
						imgUrl={feature4}
						title="Customer Automations"
						desc="Make conversations better
with automation and engage
throughout their journey."
					/>
					<Card
						imgUrl={feature5}
						title="MORE THAN JUST A PHONE"
						desc="Talk to anyone using phone,
text, video, email, and instant
messaging."
					/>
				</div>
			</div>
		</>
	);
};

export default Intro;
