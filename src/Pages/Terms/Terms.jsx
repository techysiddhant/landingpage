import logo2 from "../../assets/logo-2.png";

const Terms = () => {
	return (
		<section>
			<div className="bg-[#440101] flex items-center justify-center w-full py-3">
				<img
					src={logo2}
					alt=""
					className="w-[10%]"
				/>
			</div>
			<div className="bg-[#E0CC9C] w-full py-5">
				<h1 className="font-jakarta font-normal text-4xl text-center text-black">
					Terms and Conditions
				</h1>
			</div>
			<div className="w-full p-4 font-poppins text-xl font-normal text-black pb-10">
				<p>
					{`Please read these Terms and Conditions ("Terms") carefully before using
					Ricoz's website, mobile applications, products, and services (collectively,
					the "Services"). By accessing or using the Services, you agree to be bound
					by these Terms. If you do not agree to these Terms, you may not use the
					Services.`}
				</p>
				<ul className="list-decimal px-6">
					<li>Use of Services:</li>

					<ul>
						<li>
							1.1. Eligibility: You must be at least 18 years old and capable of
							forming a binding contract to use the Services. If you are under 18, you
							may only use the Services with the consent of a parent or legal guardian.
						</li>
						<li>
							1.2. Account Creation: In order to use certain features of the Services,
							you may be required to create a user account. You are responsible for
							maintaining the confidentiality of your account credentials and for all
							activities conducted through your account.
						</li>
						<li>
							1.3. Prohibited Activities: When using the Services, you agree not to:
						</li>
						<li>
							<ul>
								<li>Violate any applicable laws or regulations.</li>
								<li>Infringe upon the intellectual property rights of others.</li>
								<li>
									Engage in unauthorized access to the Services or attempt to disrupt or
									interfere with their operation.
								</li>
								<li>Use the Services for any unlawful or harmful purposes.</li>
								<li>
									Engage in any activity that may cause harm to Ricoz's reputation.
								</li>
							</ul>
						</li>
					</ul>

					<li>Intellectual Property:</li>

					<ul>
						<li>
							2.1. Ownership: Ricoz retains all rights, title, and interest in and to
							the Services and their content, including but not limited to text,
							graphics, logos, images, software, and any other materials provided or
							made available through the Services.
						</li>
						<li>
							2.2. Limited License: Ricoz grants you a limited, non-exclusive,
							non-transferable, and revocable license to access and use the Services
							for personal, non-commercial purposes. You may not reproduce, modify,
							distribute, display, perform, or create derivative works based on the
							Services without our express written consent.
						</li>
					</ul>

					<li>Third-Party Content and Links:</li>

					<ul>
						<li>
							3.1. The Services may contain links to third-party websites or content
							that are not owned or controlled by Ricoz. We are not responsible for the
							content or privacy practices of such third-party sites. Use of
							third-party sites is at your own risk, and you should review their terms
							and privacy policies before using them.
						</li>
					</ul>

					<li>Privacy:</li>

					<ul>
						<li>
							4.1. Your use of the Services is subject to our Privacy Policy [include a
							link to the Privacy Policy].
						</li>
					</ul>

					<li>Disclaimer of Warranties:</li>

					<ul>
						<li>
							5.1. The Services are provided on an "as is" and "as available" basis
							without any warranties, express or implied. Ricoz disclaims all
							warranties, including but not limited to warranties of merchantability,
							fitness for a particular purpose, and non-infringement.
						</li>
					</ul>

					<li>Limitation of Liability:</li>

					<ul>
						<li>
							6.1. Ricoz shall not be liable for any direct, indirect, incidental,
							consequential, or punitive damages arising out of or relating to your use
							or inability to use the Services, even if advised of the possibility of
							such damages.
						</li>
					</ul>

					<li>Indemnification:</li>

					<ul>
						<li>
							7.1. You agree to defend, indemnify, and hold harmless Ricoz, its
							officers, directors, employees, and affiliates from any claims,
							liabilities, damages, losses, and expenses, including attorney's fees,
							arising from your use of the Services or violation of these Terms.
						</li>
					</ul>

					<li>Changes to Terms:</li>

					<ul>
						<li>
							8.1. Ricoz may update these Terms from time to time without prior notice.
							The updated version will be posted on our website, and the revised date
							will indicate the effective date of the changes.
						</li>
					</ul>

					<li>Termination:</li>

					<ul>
						<li>
							9.1. Ricoz reserves the right to terminate your access to the Services at
							any time for any reason, without notice.
						</li>
					</ul>

					<li>Governing Law:</li>

					<ul>
						<li>
							10.1. These Terms shall be governed by and construed in accordance with
							the laws of [Insert Jurisdiction], without regard to its conflicts of law
							principles.
						</li>
					</ul>

					<li>Contact Us:</li>

					<ul>
						<li>
							If you have any questions, concerns, or requests regarding these Terms or
							our Services, please contact us at [Insert Contact Information].
						</li>
						<li>
							By using Ricoz's Services, you agree to comply with these Terms and
							Conditions.
						</li>
					</ul>
				</ul>
			</div>
		</section>
	);
};

export default Terms;
