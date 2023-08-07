import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#13111C] text-[#878593] py-10">
      <div className="w-full flex flex-wrap-reverse md:justify-center lg:flex-nowrap gap-20 px-10 ">
        <div className="flex flex-col ">
          <div className="w-full ">
            <img src={logo} alt="" className="w-full lg:w-[50%] lg:-ml-2" />
          </div>
          <p className="text-[#878593] font-inter font-normal text-xs md:text-sm text-center lg:text-left">
            Copyright &#169; {year} Ricoz Corp.
          </p>
          <p className="text-[#878593] font-inter font-normal text-xs md:text-sm text-center lg:text-left">
            All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-row gap-10 justify-between  lg:justify-around  lg:w-[80%] text-sm">
          <div className="flex flex-col gap-5 text-xs lg:text-sm break-normal">
            <h2 className="uppercase font-bold">Product</h2>
            <NavLink to="/">Changelog</NavLink>
            <NavLink to="/">Pricing</NavLink>
            <NavLink to="/">Templates</NavLink>
            <NavLink to="/">Feedback</NavLink>
            <NavLink to="/">OSS Kickback</NavLink>
            <NavLink to="/" className="break-normal">
              Migrate from Heroku
            </NavLink>
          </div>

          <div className="flex flex-col gap-5 text-xs lg:text-sm">
            <h2 className="uppercase font-bold">Company</h2>
            <NavLink to="/">About</NavLink>
            <NavLink to="/">Careers</NavLink>
            <NavLink to="/">Blog</NavLink>
            <NavLink to="/">Shop</NavLink>
          </div>

          <div className="flex flex-col gap-5 text-xs lg:text-sm">
            <h2 className="uppercase font-bold">Contact</h2>
            <NavLink to="/">Discard</NavLink>
            <NavLink to="/">Twitter</NavLink>
            <NavLink to="/">GitHub</NavLink>
            <NavLink to="/">Email</NavLink>
          </div>

          <div className="flex flex-col gap-5 text-xs lg:text-sm">
            <h2 className="uppercase font-bold">Legal</h2>
            <NavLink to="/">Fair Use</NavLink>
            <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            <NavLink to="/termsandconditions">Terms of Service</NavLink>
            <NavLink to="/">Bug Bounty Program</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
