/* eslint-disable react/prop-types */
import review1 from "../../assets/review-1.png";
import review2 from "../../assets/review-2.png";
import review3 from "../../assets/review-3.png";

import { AiFillStar } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Card = ({ desc, name, imgUrl }) => {
	return (
		<div className="bg-white w-[100%]  h-[100%] md:w-[370px] md:h-[500px] p-10 flex flex-col justify-between rounded-md  ">
			<div>
				<div className="flex gap-1 items-center">
					<AiFillStar className="text-[#FFB800] text-4xl" />
					<AiFillStar className="text-[#FFB800] text-4xl" />
					<AiFillStar className="text-[#FFB800] text-4xl" />
					<AiFillStar className="text-[#FFB800] text-4xl" />
					<AiFillStar className="text-[#FFB800] text-4xl" />
				</div>
				<div className="pt-10 pb-5 lg:pl-10 ">
					<FaRegComment className="text-2xl text-[#005FEC]" />
				</div>
				<p className="font-inter font-normal text-[14px] lg:text-[16px] text-[#000A70] text-lef">
					{desc}
				</p>
			</div>
			<div className="flex gap-5 items-center justify-items-end pt-10 ">
				<div>
					<img
						src={imgUrl}
						alt="review"
					/>
				</div>
				<h4 className="text-[#000A70] font-extrabold font-inter text-base">
					{name}
				</h4>
			</div>
		</div>
	);
};
const Feedback = () => {
	return (
		<section className="bg-[#1A1327] lg:bg-[#13111C] lg:px-10 px-5 pb-20 py-5">
			<div className="">
				<div className="bg-white w-full lg:bg-transparent">
					<h1 className="text-center hidden lg:block text-[#000A70] font-poppins font-extrabold text-4xl lg:text-white py-10">
						Customer Feedback
					</h1>
					<h1 className="text-center pt-2 px-1 text-[#000A70] font-poppins font-extrabold text-[28px] lg:hidden lg:text-white lg:py-10">
						Customer love us.
					</h1>
					<div className="max-w-[1200px] w-full mx-auto">
						<Swiper
							spaceBetween={30}
							pagination={{
								clickable: true,
							}}
							modules={[Pagination]}
							className="mySwiper"
							breakpoints={{
								320: {
									slidesPerView: 1,
									spaceBetween: 10,
								},
								768: {
									slidesPerView: 2,
									spaceBetween: 40,
								},
								1024: {
									slidesPerView: 3,
									spaceBetween: 30,
								},
							}}
						>
							<SwiperSlide>
								<Card
									desc="What led us to looking for a new business phone was the efficiencies of
				Nextiva. The cost, capabilities, call recording, call groups, and being able
				to do the attendants and receptionist."
									name="Phat Scooters"
									imgUrl={review1}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Card
									desc="I can’t really say enough about the
support. Nextiva is top-notch when it
comes to any issues that I have. It is
thorough, it is responsive, and it’s
professional."
									name="Shelby American"
									imgUrl={review2}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Card
									desc="Communication is everything. The
key reason we reached out to
Nextiva is that we needed a bigger
system than what we had."
									name="Veterans Home Care"
									imgUrl={review3}
								/>
							</SwiperSlide>
						</Swiper>
					</div>
					{/* <div className="flex flex-col lg:px-8 justify-center lg:justify-normal lg:flex-row items-center mx-auto  gap-10 max-w-[1200px] w-full pt-5 lg:py-10">
						<Card
							desc="What led us to looking for a new business phone was the efficiencies of
				Nextiva. The cost, capabilities, call recording, call groups, and being able
				to do the attendants and receptionist."
							name="Phat Scooters"
							imgUrl={review1}
						/>
						<Card
							desc="I can’t really say enough about the
support. Nextiva is top-notch when it
comes to any issues that I have. It is
thorough, it is responsive, and it’s
professional."
							name="Shelby American"
							imgUrl={review2}
						/>
						<Card
							desc="Communication is everything. The
key reason we reached out to
Nextiva is that we needed a bigger
system than what we had."
							name="Veterans Home Care"
							imgUrl={review3}
						/>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default Feedback;
