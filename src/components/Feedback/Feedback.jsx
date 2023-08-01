import review1 from "../../assets/review-1.png";
import { BsStarFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
const Card = () => {
	return (
		<div className="bg-white w-[300px] h-[550px] md:w-[370px] md:h-[500px] p-10 flex flex-col rounded-md">
			<div className="flex gap-5 items-center">
				<BsStarFill className="text-[#FFB800] text-3xl" />
				<BsStarFill className="text-[#FFB800] text-3xl" />
				<BsStarFill className="text-[#FFB800] text-3xl" />
				<BsStarFill className="text-[#FFB800] text-3xl" />
				<BsStarFill className="text-[#FFB800] text-3xl" />
			</div>
			<div className="pt-10 pb-5 pl-10">
				<FaRegComment className="text-2xl text-[#005FEC]" />
			</div>
			<p className="font-inter font-normal text-lg text-[#000A70] ">
				What led us to looking for a new business phone was the efficiencies of
				Nextiva. The cost, capabilities, call recording, call groups, and being able
				to do the attendants and receptionist.
			</p>
			<div className="flex gap-5 items-center pt-10 pb-10">
				<div>
					<img
						src={review1}
						alt="review"
					/>
				</div>
				<h4 className="text-[#000A70] font-extrabold font-inter text-lg">
					Phat Scooters
				</h4>
			</div>
		</div>
	);
};
const Feedback = () => {
	return (
		<section className="bg-[#13111C] px-10 pb-20">
			<div>
				<h1 className="text-center font-poppins font-extrabold text-4xl text-white py-10">
					Customer Feedback
				</h1>

				<div className="flex flex-col px-8 justify-center lg:justify-normal lg:flex-row items-center mx-auto  gap-10 max-w-[1200px] w-full py-10">
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</section>
	);
};

export default Feedback;
