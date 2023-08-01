/* eslint-disable react/prop-types */
import tool1 from "../../assets/tool-1.png";
import tool2 from "../../assets/tool-2.png";
import tool3 from "../../assets/tool-3.png";
import tool4 from "../../assets/tool-4.png";
import tool5 from "../../assets/tool-5.png";
import tool6 from "../../assets/tool-6.png";
const Card = ({ imgUrl, title, desc, bgColor, textW }) => {
	return (
		<div
			className={` ${bgColor} w-[318px] 2xl:w-[500px] 2xl:h-[300px] h-[237px] flex flex-col items-center justify-center`}
		>
			<div className="py-5">
				<img
					src={imgUrl}
					alt="w-full mx-auto"
				/>
			</div>
			<h3 className="font-inter font-bold text-lg text-white">{title}</h3>
			<p
				className={`font-normal font-inter text-base break-words ${textW} text-white  mx-auto text-center py-4`}
			>
				{desc}
			</p>
		</div>
	);
};
const TextCard = ({ title }) => {
	return (
		<div
			className={`bg-[#181622] w-[320px] h-[237px] 2xl:w-[500px] 2xl:h-[300px] flex flex-col items-center justify-center p-10`}
		>
			<h3 className="font-inter font-bold text-lg text-white">{title}</h3>
		</div>
	);
};
const Tools = () => {
	return (
		<section className="bg-[#13111C] py-28">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 overflow-x-hidden ">
				<TextCard title={`Ideal for any kind of product. Such as...`} />
				<Card
					imgUrl={tool1}
					title={"Atmos"}
					desc="Real estate home customization"
					bgColor={"bg-[#E06254]"}
					textW={"w-[60%]"}
				/>
				<Card
					imgUrl={tool2}
					title={"Zora"}
					desc="Decentralized auctions
house for NFTs"
					bgColor={"bg-tool-2"}
					textW={"w-[60%]"}
				/>
				<Card
					imgUrl={tool3}
					title={"Fion Tech"}
					desc="Machine learning models for
fire prediction and detection"
					bgColor={"bg-[#2F2D39]"}
				/>
				<Card
					imgUrl={tool4}
					title={"Operand"}
					desc="Reimagining natural
language interfaces"
					bgColor={"bg-[#535260]"}
					textW={"w-[50%]"}
				/>
				<Card
					imgUrl={tool5}
					title={"StepZen"}
					desc="Easy GraphQL endpoints
for application data"
					bgColor={"bg-[#19253F]"}
					textW={"w-[60%]"}
				/>
				<Card
					imgUrl={tool6}
					title={"Slip"}
					desc="Easily build and sell interactive
programming courses"
					bgColor={"bg-[#292E4C]"}
					textW={"w-[80%]"}
				/>
				<TextCard title={`and many more...`} />
			</div>
		</section>
	);
};

export default Tools;
