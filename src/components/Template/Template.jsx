import { BsArrowRight } from "react-icons/bs";
import template from "../../assets/template.png";
const Template = () => {
	return (
		<section className="bg-[#13111C] py-20 ">
			<div className="bg-[#10232F]   rounded-md">
				<div className="max-w-[1200px] mx-auto">
					<div className="px-10 flex flex-col-reverse gap-10 lg:flex-row justify-between items-center h-full w-full">
						<div>
							<h1 className="font-inter font-semibold text-2xl text-white lg:w-[60%]">
								Start or Extend your Infrastructure with One Click.
							</h1>
							<p className="font-inter font-normal text-xl text-[#A1A0AB] lg:w-[60%] py-5">
								Choose a template from our selection of production-ready applications.
							</p>
							<button className="bg-[#853BCE] rounded-md px-10 py-1 text-white flex items-center gap-5 font-inter font-semibold md:text-lg mb-5 lg:mb-0">
								<BsArrowRight className="text-4xl md:text-xl" />
								View our 75+ Templates
							</button>
						</div>
						<div>
							<img
								src={template}
								alt=""
								className="w-100%] mx-auto lg:w-[100%]"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Template;
