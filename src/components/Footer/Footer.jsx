import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="bg-[#13111C] text-[#878593] py-10">
			<div className="w-full flex flex-wrap lg:flex-nowrap gap-20 px-10">
				<div className="flex flex-col ">
					<div className="w-full">
						<img
							src={logo}
							alt=""
							className="w-[50%] "
						/>
					</div>
					<p className="text-[#878593] font-inter font-normal text-sm">
						Copyright &#169; {year} Ricoz Corp.
					</p>
					<p className="text-[#878593] font-inter font-normal text-sm">
						All rights reserved.
					</p>
				</div>
				<div className="flex flex-col lg:flex-row gap-10  justify-around w-[80%] text-sm">
					<div className="flex flex-col gap-5 text-sm">
						<h2 className="uppercase font-bold">Product</h2>
						<Link to="/">Changelog</Link>
						<Link to="/">Pricing</Link>
						<Link to="/">Templates</Link>
						<Link to="/">Feedback</Link>
						<Link to="/">OSS Kickback</Link>
						<Link to="/">Migrate from Heroku</Link>
					</div>

					<div className="flex flex-col gap-5">
						<h2 className="uppercase font-bold">Company</h2>
						<Link to="/">About</Link>
						<Link to="/">Careers</Link>
						<Link to="/">Blog</Link>
						<Link to="/">Shop</Link>
					</div>

					<div className="flex flex-col gap-5">
						<h2 className="uppercase font-bold">Contact</h2>
						<Link to="/">Discard</Link>
						<Link to="/">Twitter</Link>
						<Link to="/">GitHub</Link>
						<Link to="/">Email</Link>
					</div>

					<div className="flex flex-col gap-5">
						<h2 className="uppercase font-bold">Legal</h2>
						<Link to="/">Fair Use</Link>
						<Link to="/privacypolicy">Privacy Policy</Link>
						<Link to="/termsandconditions">Terms of Service</Link>
						<Link to="/">Bug Bounty Program</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
