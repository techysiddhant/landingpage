import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo2 from "../../assets/logo-2.png";
import { useForm } from "react-hook-form";
import "./RemoveAccount.css";
import axios from "axios";
const RemoveAccount = () => {
  //   const [isOTPVerified, setIsOTPVerified] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isAccountDeleted, setisAccountDeleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("+91");
  const [otp, setotp] = useState("");

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://api.ricoz.in/api/v1/me/delete/sendOtp",
        {
          phone: phone,
        }
      );
      console.log(response.data);
      setIsOtpSent(true);
      console.log(data);
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const onDeleteAccount = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://api.ricoz.in/api/v1/me/delete/verifydeletion",
        {
          phone: phone,
          otp: otp,
        }
      );
      console.log("The value of success is " + response.data.success);

      setisAccountDeleted(response.data.success);
      if (response.data.success) {
        setLoading(false);
      }
      console.log("Account deleted successfully");
    } catch (error) {
      console.error("Error deleting account:", error);
      setLoading(false);
    }
  };
  return (
    <section className="pb-10">
      <div className="bg-[#440101] flex items-center justify-center w-full py-3">
        <NavLink exact to="/" className="flex items-center justify-center">
          <img src={logo2} alt="" className="w-[100%] lg:w-[70%]" />
        </NavLink>
      </div>
      <div className="bg-[#E0CC9C] w-full py-5">
        <h1 className="font-jakarta font-normal text-4xl text-center text-black">
          Remove Account
        </h1>
      </div>
      {!isAccountDeleted ? (
        <div className="py-19 my-20 flex items-center justify-center">
          <div className="bg-white p-8 shadow-md rounded-md w-96">
            <>
              <h2 className="text-2xl font-semibold mb-4">
                Verify Phone Number
              </h2>
              <form>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  id="phone"
                  className={`w-full border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded-md px-3 py-2 focus:outline-none focus:border-blue-500`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter a valid phone number
                  </p>
                )}
                {isOtpSent ? (
                  <div></div>
                ) : (
                  <button
                    onClick={handleSubmit(onSubmit)}
                    type="submit"
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600"
                  >
                    Get OTP
                  </button>
                )}
              </form>
            </>
            {isOtpSent ? (
              <>
                <input
                  value={otp}
                  onChange={(e) => setotp(e.target.value)}
                  type="text"
                  className="mt-4 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Enter OTP"
                />
                {loading ? (
                  <div className="progress-container">
                    <div className="circular-progress"></div>
                  </div>
                ) : (
                  <button
                    onClick={onDeleteAccount}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md w-full hover:bg-red-600"
                  >
                    Delete Account
                  </button>
                )}
              </>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      ) : (
        <div className="py-19 my-20 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="flex justify-center items-center bg-green-500 text-white w-16 h-16 rounded-full mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="check-circle w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Account Deleted
            </h2>
          </div>
        </div>
      )}
    </section>
  );
};

export default RemoveAccount;
