import { BsArrowRight } from "react-icons/bs";
import template from "../../assets/template.png";
const MobilePoster = () => {
	return (
		<div className="bg-[rgba(255,255,255,0.05)] rounded-xl py-14 p-6 border border-white border-opacity-10 flex flex-col justify-center lg:hidden max-w-[320px] mx-auto">
			<h1 className="text-center text-white font-inter font-bold text-2xl ">
				Deploy an App to Production in Minutes
			</h1>
			<p className="text-center py-5 text-[#878593] font-inter font-normal text-lg">
				Join thousands of people deploying hundreds of thousands of applications
				effortlessly on Ricoz
			</p>
			<div className="flex justify-center pt-4">
				<button className=" bg-[#853BCE] text-white  px-4 py-2 rounded-md">
					Click this Button
				</button>
			</div>
		</div>
	);
};
const Template = () => {
	return (
		<section className="bg-[#13111C] lg:py-20 py-10 px-5 lg:px-0">
			<div className="bg-[#10232F]   rounded-md hidden lg:block">
				<div className="max-w-[1200px] mx-auto">
					<div className="px-10 flex flex-col-reverse gap-10 lg:flex-row justify-between items-center h-full w-full">
						<div className="">
							<h1 className="font-inter font-semibold text-[20px] text-white lg:w-[60%] lg:py-4">
								Start or Extend your Infrastructure with One Click.
							</h1>
							<p className="font-inter font-normal text-xl text-[#A1A0AB] lg:w-[70%] py-5">
								Choose a template from our selection of production-ready applications.
							</p>
							<button className="bg-[#853BCE] rounded-md px-10 py-1 text-white flex items-center gap-5 font-inter font-semibold md:text-lg mb-5  lg:mb-6">
								<BsArrowRight className="text-4xl md:text-xl" />
								View our 75+ Templates
							</button>
						</div>
						<div className="">
							<img
								src={template}
								alt=""
								className=""
							/>
						</div>
					</div>
				</div>
			</div>
			<MobilePoster />
		</section>
	);
};

export default Template;
