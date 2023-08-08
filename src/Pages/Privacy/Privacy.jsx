import { NavLink } from "react-router-dom";
import logo2 from "../../assets/logo-2.png";
import ScrollToTop from "../../components/utils/ScrollToTop";
const Privacy = () => {
  return (
    <section className="pb-10">
      <div className="bg-[#440101] flex items-center justify-center w-full py-3">
        <NavLink exact to="/" className="flex items-center justify-center">
          <img src={logo2} alt="" className="w-[100%] lg:w-[70%]" />
        </NavLink>
      </div>
      <div className="bg-[#E0CC9C] w-full py-5">
        <h1 className="font-jakarta font-normal text-4xl text-center text-black">
          Privacy Policy
        </h1>
      </div>
      {/* <div className="w-full p-4 font-poppins text-xl font-normal text-black leading-relaxed">
				<h1>Privacy Policy for Ricoz</h1>
				<h2>Privacy Policy</h2>
				<h3>Last updated: July 31, 2023</h3>
				<p>
					This Privacy Policy describes Our policies and procedures on the
					collection, use and disclosure of Your information when You use the Service
					and tells You about Your privacy rights and how the law protects You.
				</p>
				<p>
					We use Your Personal data to provide and improve the Service. By using the
					Service, You agree to the collection and use of information in accordance
					with this Privacy Policy. Interpretation and Definitions
				</p>
				<p>
					The words of which the initial letter is capitalized have meanings defined
					under the following conditions. The following definitions shall have the
					same meaning regardless of whether they appear in singular or in plural.
					Definitions
				</p>
				<p>For the purposes of this Privacy Policy:</p>
				<ul className="list-disc px-8">
					<li>
						Account means a unique account created for You to access our Service or
						parts of our Service.
					</li>
					<li>
						Affiliate means an entity that controls, is controlled by or is under
						common control with a party, where "control" means ownership of 50% or
						more of the shares, equity interest or other securities entitled to vote
						for election of directors or other managing authority.
					</li>
					<li>
						Company (referred to as either "the Company", "We", "Us" or "Our" in this
						Agreement) refers to Ricoz.
					</li>
					<li>
						Cookies are small files that are placed on Your computer, mobile device or
						any other device by a website, containing the details of Your browsing
						history on that website among its many uses.
					</li>
					<li>Country refers to: Delhi, India</li>
					<li>
						Device means any device that can access the Service such as a computer, a
						cellphone or a digital tablet.
					</li>
					<li>
						Personal Data is any information that relates to an identified or
						identifiable individual.
					</li>
					<li>Service refers to the Website.</li>
					<li>
						Service Provider means any natural or legal person who processes the data
						on behalf of the Company. It refers to third-party companies or
						individuals employed by the Company to facilitate the Service, to provide
						the Service on behalf of the Company, to perform services related to the
						Service or to assist the Company in analyzing how the Service is used.
					</li>
					<li>
						Third-party Social Media Service refers to any website or any social
						network website through which a User can log in or create an account to
						use the Service. Usage Data refers to data collected automatically, either
						generated by the use of the Service or from the Service infrastructure
						itself (for example, the duration of a page visit).
					</li>
					<li>
						Website refers to Ricoz , accessible from{" "}
						<Link to="http://www.ricoz.in">ricoz.in</Link>{" "}
					</li>
					<li>
						You means the individual accessing or using the Service, or the company,
						or other legal entity on behalf of which such individual is accessing or
						using the Service, as applicable.
					</li>
				</ul>
				<p>Collecting and Using Your Personal Data</p>
				<p>Types of Data Collected</p>
				<p>Personal Data</p>
				<p>
					While using Our Service, We may ask You to provide Us with certain
					personally identifiable information that can be used to contact or identify
					You. Personally identifiable information may include, but is not limited
					to:
				</p>
				<ul className="list-disc px-8">
					<li>Email address</li>
					<li>First name and last name</li>
					<li>Phone number</li>
					<li>Address, State, Province, ZIP/Postal code, City</li>
					<li>Usage Data</li>
				</ul>
				<p>Usage Data</p>
				<p>Usage Data is collected automatically when using the Service.</p>
				<p>
					Usage Data may include information such as Your Device's Internet Protocol
					address (e.g. IP address), browser type, browser version, the pages of our
					Service that You visit, the time and date of Your visit, the time spent on
					those pages, unique device identifiers and other diagnostic data.
				</p>
				<p>
					When You access the Service by or through a mobile device, We may collect
					certain information automatically, including, but not limited to, the type
					of mobile device You use, Your mobile device unique ID, the IP address of
					Your mobile device, Your mobile operating system, the type of mobile
					Internet browser You use, unique device identifiers and other diagnostic
					data.
				</p>
				<p>
					We may also collect information that Your browser sends whenever You visit
					our Service or when You access the Service by or through a mobile device.
					Information from Third-Party Social Media Services
				</p>
				<p>
					The Company allows You to create an account and log in to use the Service
					through the following Third-party Social Media Services:
				</p>
				<ul className="list-disc px-8">
					<li>Google</li>
					<li>Facebook</li>
					<li>Instagram</li>
					<li>Twitter</li>
					<li>LinkedIn</li>
				</ul>
				<p>
					If You decide to register through or otherwise grant us access to a
					Third-Party Social Media Service, We may collect Personal data that is
					already associated with Your Third-Party Social Media Service's account,
					such as Your name, Your email address, Your activities or Your contact list
					associated with that account.
				</p>
				<p>
					You may also have the option of sharing additional information with the
					Company through Your Third-Party Social Media Service's account. If You
					choose to provide such information and Personal Data, during registration
					or otherwise, You are giving the Company permission to use, share, and
					store it in a manner consistent with this Privacy Policy.
				</p>
				<p>Tracking Technologies and Cookies</p>
				<p>
					We use Cookies and similar tracking technologies to track the activity on
					Our Service and store certain information. Tracking technologies used are
					beacons, tags, and scripts to collect and track information and to improve
					and analyze Our Service. The technologies We use may include:
				</p>
				<ul className="list-disc px-8">
					<li>
						Cookies or Browser Cookies. A cookie is a small file placed on Your
						Device. You can instruct Your browser to refuse all Cookies or to indicate
						when a Cookie is being sent. However, if You do not accept Cookies, You
						may not be able to use some parts of our Service. Unless you have adjusted
						Your browser setting so that it will refuse Cookies, our Service may use
						Cookies.
					</li>
					<li>
						Web Beacons. Certain sections of our Service and our emails may contain
						small electronic files known as web beacons (also referred to as clear
						gifs, pixel tags, and single-pixel gifs) that permit the Company, for
						example, to count users who have visited those pages or opened an email
						and for other related website statistics (for example, recording the
						popularity of a certain section and verifying system and server
						integrity).
					</li>
				</ul>
				<p>
					Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain
					on Your personal computer or mobile device when You go offline, while
					Session Cookies are deleted as soon as You close Your web browser. Learn
					more about cookies on the Free Privacy Policy website article.
				</p>
				<p>
					We use both Session and Persistent Cookies for the purposes set out below:
				</p>
				<ul className="list-disc px-8">
					<li>Necessary / Essential Cookies</li>
					<li>Type: Session Cookies</li>
					<li>Administered by: Us</li>
					<li>
						Purpose: These Cookies are essential to provide You with services
						available through the Website and to enable You to use some of its
						features. They help to authenticate users and prevent fraudulent use of
						user accounts. Without these Cookies, the services that You have asked for
						cannot be provided, and We only use these Cookies to provide You with
						those services.
					</li>
					<li>Cookies Policy / Notice Acceptance Cookies</li>
					<li>Type: Persistent Cookies</li>
					<li>Administered by: Us</li>
					<li>
						Purpose: These Cookies identify if users have accepted the use of cookies
						on the Website.
					</li>
					<li>Functionality Cookies</li>
					<li>Type: Persistent Cookies</li>
					<li>Administered by: Us</li>
					<li>
						Purpose: These Cookies allow us to remember choices You make when You use
						the Website, such as remembering your login details or language
						preference. The purpose of these Cookies is to provide You with a more
						personal experience and to avoid You having to re-enter your preferences
						every time You use the Website.
					</li>
				</ul>
				<p>
					For more information about the cookies we use and your choices regarding
					cookies, please visit our Cookies Policy or the Cookies section of our
					Privacy Policy. Use of Your Personal Data
				</p>
				<p>The Company may use Personal Data for the following purposes:</p>
				<ul className="list-disc px-8">
					<li>
						To provide and maintain our Service, including to monitor the usage of our
						Service.
					</li>
					<li>
						To manage Your Account: to manage Your registration as a user of the
						Service. The Personal Data You provide can give You access to different
						functionalities of the Service that are available to You as a registered
						user.
					</li>
					<li>
						For the performance of a contract: the development, compliance and
						undertaking of the purchase contract for the products, items or services
						You have purchased or of any other contract with Us through the Service.
					</li>
					<li>
						To contact You: To contact You by email, telephone calls, SMS, or other
						equivalent forms of electronic communication, such as a mobile
						application's push notifications regarding updates or informative
						communications related to the functionalities, products or contracted
						services, including the security updates, when necessary or reasonable for
						their implementation.
					</li>
					<li>
						To provide You with news, special offers and general information about
						other goods, services and events which we offer that are similar to those
						that you have already purchased or enquired about unless You have opted
						not to receive such information. To manage Your requests: To attend and
						manage Your requests to Us.
					</li>
					<li>
						For business transfers: We may use Your information to evaluate or conduct
						a merger, divestiture, restructuring, reorganization, dissolution, or
						other sale or transfer of some or all of Our assets, whether as a going
						concern or as part of bankruptcy, liquidation, or similar proceeding, in
						which Personal Data held by Us about our Service users is among the assets
						transferred.
					</li>
					<li>
						For other purposes: We may use Your information for other purposes, such
						as data analysis, identifying usage trends, determining the effectiveness
						of our promotional campaigns and to evaluate and improve our Service,
						products, services, marketing and your experience.
					</li>
					<li>
						We may share Your personal information in the following situations: With
						Service Providers: We may share Your personal information with Service
						Providers to monitor and analyze the use of our Service, to contact You.
					</li>
					<li>
						For business transfers: We may share or transfer Your personal information
						in connection with, or during negotiations of, any merger, sale of Company
						assets, financing, or acquisition of all or a portion of Our business to
						another company.
					</li>
					<li>
						With Affiliates: We may share Your information with Our affiliates, in
						which case we will require those affiliates to honor this Privacy Policy.
						Affiliates include Our parent company and any other subsidiaries, joint
						venture partners or other companies that We control or that are under
						common control with Us.
					</li>
					<li>
						With business partners: We may share Your information with Our business
						partners to offer You certain products, services or promotions.
					</li>
					<li>
						With other users: when You share personal information or otherwise
						interact in the public areas with other users, such information may be
						viewed by all users and may be publicly distributed outside. If You
						interact with other users or register through a Third-Party Social Media
						Service, Your contacts on the Third-Party Social Media Service may see
						Your name, profile, pictures and description of Your activity. Similarly,
						other users will be able to view descriptions of Your activity,
						communicate with You and view Your profile.
					</li>
					<li>
						With Your consent: We may disclose Your personal information for any other
						purpose with Your consent.
					</li>
				</ul>
				<p>Retention of Your Personal Data</p>
				<p>
					The Company will retain Your Personal Data only for as long as is necessary
					for the purposes set out in this Privacy Policy. We will retain and use
					Your Personal Data to the extent necessary to comply with our legal
					obligations (for example, if we are required to retain your data to comply
					with applicable laws), resolve disputes, and enforce our legal agreements
					and policies.
				</p>
				<p>
					The Company will also retain Usage Data for internal analysis purposes.
					Usage Data is generally retained for a shorter period of time, except when
					this data is used to strengthen the security or to improve the
					functionality of Our Service, or We are legally obligated to retain this
					data for longer time periods.
				</p>
				<p>Transfer of Your Personal Data</p>
				<p>
					Your information, including Personal Data, is processed at the Company's
					operating offices and in any other places where the parties involved in the
					processing are located. It means that this information may be transferred
					to — and maintained on — computers located outside of Your state, province,
					country or other governmental jurisdiction where the data protection laws
					may differ than those from Your jurisdiction.
				</p>
				<p>
					Your consent to this Privacy Policy followed by Your submission of such
					information represents Your agreement to that transfer.
				</p>
				<p>
					The Company will take all steps reasonably necessary to ensure that Your
					data is treated securely and in accordance with this Privacy Policy and no
					transfer of Your Personal Data will take place to an organization or a
					country unless there are adequate controls in place including the security
					of Your data and other personal information.
				</p>
				<p>Delete Your Personal Data</p>
				<p>
					You have the right to delete or request that We assist in deleting the
					Personal Data that We have collected about You.
				</p>
				<p>
					Our Service may give You the ability to delete certain information about
					You from within the Service.
				</p>
				<p>
					You may update, amend, or delete Your information at any time by signing in
					to Your Account, if you have one, and visiting the account settings section
					that allows you to manage Your personal information. You may also contact
					Us to request access to, correct, or delete any personal information that
					You have provided to Us.
				</p>
				<p>
					Please note, however, that We may need to retain certain information when
					we have a legal obligation or lawful basis to do so.
				</p>
				<p>Disclosure of Your Personal Data</p>
				<p>Business Transactions</p>
				<p>
					If the Company is involved in a merger, acquisition or asset sale, Your
					Personal Data may be transferred. We will provide notice before Your
					Personal Data is transferred and becomes subject to a different Privacy
					Policy.
				</p>
				<p>Law enforcement</p>
				<p>
					Under certain circumstances, the Company may be required to disclose Your
					Personal Data if required to do so by law or in response to valid requests
					by public authorities (e.g. a court or a government agency).
				</p>
				<p>Other legal requirements</p>
				<p>
					The Company may disclose Your Personal Data in the good faith belief that
					such action is necessary to:
				</p>
				<ul className="list-disc px-8">
					<li>Comply with a legal obligation</li>
					<li>Protect and defend the rights or property of the Company</li>
					<li>
						Prevent or investigate possible wrongdoing in connection with the Service
					</li>
					<li>Protect the personal safety of Users of the Service or the public</li>
					<li>Protect against legal liability</li>
					<li>Security of Your Personal Data</li>
				</ul>
				<p>
					The security of Your Personal Data is important to Us, but remember that no
					method of transmission over the Internet, or method of electronic storage
					is 100% secure. While We strive to use commercially acceptable means to
					protect Your Personal Data, We cannot guarantee its absolute security.
				</p>
				<p>Children's Privacy</p>
				<p>
					Our Service does not address anyone under the age of 13. We do not
					knowingly collect personally identifiable information from anyone under the
					age of 13. If You are a parent or guardian and You are aware that Your
					child has provided Us with Personal Data, please contact Us. If We become
					aware that We have collected Personal Data from anyone under the age of 13
					without verification of parental consent, We take steps to remove that
					information from Our servers.
				</p>
				<p>
					If We need to rely on consent as a legal basis for processing Your
					information and Your country requires consent from a parent, We may require
					Your parent's consent before We collect and use that information.
				</p>
				<p>Links to Other Websites</p>
				<p>
					Our Service may contain links to other websites that are not operated by
					Us. If You click on a third party link, You will be directed to that third
					party's site. We strongly advise You to review the Privacy Policy of every
					site You visit.
				</p>
				<p>
					We have no control over and assume no responsibility for the content,
					privacy policies or practices of any third party sites or services.
				</p>
				<p>Changes to this Privacy Policy</p>
				<p>
					We may update Our Privacy Policy from time to time. We will notify You of
					any changes by posting the new Privacy Policy on this page.
				</p>
				<p>
					We will let You know via email and/or a prominent notice on Our Service,
					prior to the change becoming effective and update the "Last updated" date
					at the top of this Privacy Policy.
				</p>
				<p>
					You are advised to review this Privacy Policy periodically for any changes.
					Changes to this Privacy Policy are effective when they are posted on this
					page.
				</p>
				<p>Contact Us</p>
				<p>
					If you have any questions about this Privacy Policy, You can contact us:
				</p>
			</div> */}

      <div className="w-full p-4 text-black font-normal text-lg leading-relaxed font-jakarta">
        <p>
          At Ricoz, we are committed to safeguarding your privacy and ensuring
          the security of your personal information. This Privacy Policy
          outlines how we collect, use, and protect the data you provide when
          using our services and courses, including graphic designing, digital
          marketing, and web development. By using Ricoz, you consent to the
          practices described herein.
        </p>
        <h1 className="font-poppins text-2xl font-semibold py-4">
          Information We Collect:
        </h1>
        <ul className="text-lg list-decimal px-4 space-y-3">
          <li>
            <b>Personal Information:</b> When you sign up or use our services,
            we collect your name and email address. This information is used for
            communication, personalization, and to enhance your experience.
          </li>
          <li>
            <b>Phone Authentication:</b> We offer the convenience of phone
            authentication for secure access. Your phone number is used solely
            for authentication purposes and is not shared with any third
            parties.
          </li>
        </ul>
        <h2 className="font-poppins text-2xl font-semibold py-4">
          How We Use Your Information:
        </h2>
        <ul className="text-lg list-decimal px-4 space-y-3">
          <li>
            <b>Communication:</b> We use your name and email address to send you
            important updates, announcements, and course-related information.
            You have the option to opt out of non-essential communications.
          </li>
          <li>
            <b>Personalization:</b> Your information helps us personalize your
            learning experience, provide relevant content, and improve our
            services.
          </li>
          <li>
            <b>Internal Analytics:</b> We may use aggregated and anonymized data
            for internal analysis to improve our services, content, and user
            experience.
          </li>
        </ul>

        <h2 className="font-poppins text-2xl font-semibold py-4">
          Data Security:
        </h2>
        <ul className="text-lg list-decimal px-4 space-y-3">
          <li>
            <b>Protection Measures:</b> We employ industry-standard security
            measures to protect your personal information from unauthorized
            access, disclosure, alteration, or destruction.
          </li>
          <li>
            <b>Third-Party Services:</b> We partner with reputable third-party
            platforms for secure payment processing and authentication. Your
            data may be processed by these parties solely for the purpose of
            providing their respective services.
          </li>
        </ul>
        <h2 className="font-poppins text-2xl font-semibold py-4">
          Information Sharing:
        </h2>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. Your data is strictly confidential and is used only for the
          purposes outlined in this Privacy Policy.
        </p>
        <h2 className="font-poppins text-2xl font-semibold py-4">
          Your Choices:
        </h2>
        <ul className="text-lg list-decimal px-4 space-y-3">
          <li>
            <b>Access and Update:</b> You can access and update your personal
            information by logging into your Ricoz account.
          </li>
          <li>
            <b>Communication Preferences:</b> You have the option to unsubscribe
            from non-essential communications.
          </li>
        </ul>

        <h2 className="font-poppins text-2xl font-semibold py-4">
          Children&apos;s Privacy:
        </h2>
        <p>
          Ricoz does not knowingly collect personal information from individuals
          under the age of 13. Our services are designed for adults and
          individuals above the age of 13.
        </p>
        <h2 className="font-poppins text-2xl font-semibold py-4">
          Changes to this Privacy Policy:
        </h2>
        <p>
          We may update this Privacy Policy periodically to reflect changes in
          our practices or legal requirements. We will notify you of any
          significant updates via email or prominent notices on our website.
        </p>
        <h2 className="font-poppins text-2xl font-semibold py-4">
          Contact Us:
        </h2>
        <p className="py-1 ">
          If you have any questions, concerns, or requests regarding your
          personal information, please contact our Privacy Team at{" "}
          <a
            href="mailto:firstricoz1@gmail.com"
            className="text-blue-500 underline"
          >
            firstricoz1@gmail.com
          </a>
        </p>
        <p className="py-1">Effective Date: 5 August 2023</p>
        <p className="py-1">
          Thank you for choosing Ricoz as your creative learning partner. Your
          trust is important to us, and we are dedicated to providing you with a
          safe and enriching experience.
        </p>
      </div>
      <ScrollToTop />
    </section>
  );
};

export default Privacy;
