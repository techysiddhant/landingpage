import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className="px-8 py-2 text-white">
			<div className="flex justify-between items-center">
				<div className="">
					<img
						src={Logo}
						alt="logo"
						className="w-[50%] lg:w-[70%]"
					/>
				</div>
				<div className="hidden lg:flex justify-between items-center gap-24">
					<ul className="flex items-center gap-5 text-lg font-medium">
						<li>Home</li>
						<li>Carrers</li>
						<li>Help</li>
						<li>About</li>
						<li>Docs</li>
					</ul>

					<button className="bg-[#853BCE] text-lg font-medium px-6 rounded-lg hidden lg:block">
						Login
					</button>
				</div>
				<div className="lg:hidden">
					<RxHamburgerMenu
						className="text-2xl"
						onClick={() => setIsOpen(!isOpen)}
					/>
				</div>
				<div
					className={`bg-[#13111C] lg:hidden text-white absolute top-0 w-full h-full left-0 transform duration-300  origin-top   ${
						isOpen ? "translate-y-0" : "-translate-y-full"
					} py-5 px-5`}
				>
					<AiOutlineClose
						className="text-2xl float-right "
						color="white"
						onClick={() => setIsOpen(!isOpen)}
					/>
					<ul className="flex flex-col gap-4 text-3xl pt-10">
						<li>
							<Link
								to={"/"}
								onClick={() => setIsOpen(!isOpen)}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to={"/carrers"}
								onClick={() => setIsOpen(!isOpen)}
							>
								Carrers
							</Link>
						</li>
						<li>
							<Link
								to={"/help"}
								onClick={() => setIsOpen(!isOpen)}
							>
								Help
							</Link>
						</li>
						<li>
							<Link
								to={"/about"}
								onClick={() => setIsOpen(!isOpen)}
							>
								About
							</Link>
						</li>
						<li>
							<Link
								to={"/docs"}
								onClick={() => setIsOpen(!isOpen)}
							>
								Docs
							</Link>
						</li>
					</ul>
					<button className="bg-[#853BCE] text-lg font-medium px-6 rounded-lg my-6">
						Login
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
