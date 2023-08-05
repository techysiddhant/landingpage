import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
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
						className="w-[30%] lg:w-[30%]"
					/>
				</div>
				<div className="hidden lg:flex justify-between items-center gap-24">
					<ul className="flex items-center gap-5 text-lg font-medium font-poppins">
						<li>
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? "text-[#853BCE]" : "text-white"
								}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/carrers"
								className={({ isActive }) =>
									isActive ? "text-[#853BCE]" : "text-white"
								}
							>
								Carrers
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/help"
								className={({ isActive }) =>
									isActive ? "text-[#853BCE]" : "text-white"
								}
							>
								Help
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about"
								className={({ isActive }) =>
									isActive ? "text-[#853BCE]" : "text-white"
								}
							>
								About
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/docs"
								className={({ isActive }) =>
									isActive ? "text-[#853BCE]" : "text-white"
								}
							>
								Docs
							</NavLink>
						</li>
					</ul>

					<button className="bg-[#853BCE] text-lg font-medium px-6 rounded-lg hidden lg:block">
						Login
					</button>
				</div>
				<div className="lg:hidden">
					<HiMenuAlt4
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
						className="text-2xl md:text-4xl float-right "
						color="white"
						onClick={() => setIsOpen(!isOpen)}
					/>
					<ul className="flex flex-col gap-4 md:gap-8 md:text-5xl text-3xl pt-10">
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
					<button className="bg-[#853BCE] text-lg font-medium px-6 rounded-lg my-6 md:text-xl md:px-8 md:py-2">
						Login
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
