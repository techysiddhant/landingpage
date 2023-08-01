/* eslint-disable react/prop-types */
import Intro1 from "../../assets/intro-1.png";
import Intro2 from "../../assets/intro-2.png";
import Intro3 from "../../assets/intro-3.png";
import feature1 from "../../assets/feature-1.png";
import feature2 from "../../assets/feature-2.png";
import feature3 from "../../assets/feature-3.png";
import feature4 from "../../assets/feature-4.png";
import feature5 from "../../assets/feature-5.png";
import { BsArrowRight } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
const Card = ({ imgUrl, title, desc }) => {
	return (
		<div className="w-[300px] md:w-[360px]  h-[500px] flex flex-col rounded-md">
			<div>
				<img
					src={imgUrl}
					alt=""
				/>
			</div>
			<div className="p-10 bg-white font-inter h-full">
				<h4 className="font-extrabold    text-sm uppercase text-[#A667E4]">
					{title}
				</h4>
				<p className="text-base font-extrabold text-[#853BCE] py-5">{desc}</p>
				<BiRightArrowAlt className="text-[#A667E4] text-3xl font-bold" />
			</div>
		</div>
	);
};
const Intro = () => {
	return (
		<section className="py-10 bg-[#13111C] px-5 md:px-10">
			<div>
				<h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center text-white">
					Why Choose Ricoz
				</h1>
				<p className="text-lg font-normal text-center text-[#A1A0AB] py-4">
					Most Flexible e-commerce platform
				</p>

				<div className="flex flex-col-reverse lg:flex-row justify-between bg-intro-1 rounded-md px-5 md:px-10 pt-10 text-white my-10 max-w-[1200px] mx-auto">
					<div className="pt-10">
						<h2 className="font-inter font-semibold text-3xl">Easy To Use</h2>
						<p className="font-inter font-normal text-base md:w-[70%] text-[#A1A0AB] py-4">
							Search from 1000’s of prebuild templates get the best Designed websites,
							Banners and much more Affordable Pricing, Easy Customization, b2c Store,
							b2b Store
						</p>
						<button className="bg-[#853BCE] px-4 py-3 rounded-md font-inter font-medium mb-20">
							<span className="bg-[rgba(255,255,255,0.25)] px-2 py-1 mr-4 text-center rounded-md">
								Search
							</span>
							Show Palettle
						</button>
					</div>
					<div className="flex justify-end pt-20 w-full">
						<img
							src={Intro1}
							alt=""
						/>
					</div>
				</div>

				<div className="flex gap-5 md:px-10 justify-between max-w-[1200px] mx-auto w-full flex-col lg:flex-row py-14">
					<div className=" font-inter flex flex-col gap-5 text-white bg-intro-2 h-[540px] max-w-[540px] w-full pt-10 md:px-10 px-5 rounded-md items-center justify-between">
						<div>
							<h3 className=" font-semibold text-2xl capitalize">
								Social Media management
							</h3>
							<p className="py-5 text-[#878593] text-lg  font-normal">
								Maintain your social media platforms with ricoz and easily gain
								followers
							</p>
							<button className="text-[#A667E4] flex items-center gap-4">
								View Perks
								<BsArrowRight className="text-xl" />
							</button>
						</div>
						<div className="">
							<img
								src={Intro2}
								alt=""
								className=""
							/>
						</div>
					</div>
					<div className=" font-inter flex flex-col gap-5 text-white bg-intro-3 h-[540px] max-w-[540px] w-full pt-10  rounded-md items-center justify-between">
						<div className="md:px-10 px-5">
							<h3 className=" font-semibold text-2xl capitalize">
								Usage-based Pricing
							</h3>
							<p className="py-5 text-[#878593] text-lg  font-normal">
								We at Ricoz Charge only according to your usage and services selected
							</p>
							<button className="text-[#A667E4] flex items-center gap-4">
								View our Services <BsArrowRight className="text-xl" />{" "}
							</button>
						</div>
						<div className="w-full">
							<img
								src={Intro3}
								alt=""
								className="w-full"
							/>
						</div>
					</div>
				</div>

				<div>
					<h3 className="text-3xl md:text-4xl font-bold font-poppins text-center text-white">
						Incredible Features Provided by Ricoz
					</h3>

					<div className="w-full flex flex-wrap gap-10 items-center max-w-[1200px] mx-auto justify-between py-20">
						<div className="w-[300px] md:w-[360px]  h-[500px] flex flex-col rounded-md ">
							<div className="  font-inter h-full">
								<p className="text-white uppercase font-inter font-extrabold text-sm">
									Do more for your business
								</p>
								<h4 className="font-extrabold  capitalize text-3xl  text-white py-5">
									The future of work with Ricoz.
								</h4>
								<p className="text-base font-normal text-white opacity-90 w-[80%]">
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
			</div>
		</section>
	);
};

export default Intro;
