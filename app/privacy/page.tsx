import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-evryn-teal py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Homepage
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            Evryn Inc. Privacy Notice
          </h1>

          <p className="text-gray-600 mb-8">Last Updated: April 8, 2026</p>

          <div className="prose prose-gray max-w-none text-gray-800">
            <p className="mb-4">
              This Privacy Notice applies to the processing of personal information by Evryn, Inc. (&quot;<strong>Evryn</strong>,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) on our website available at{" "}
              <a href="https://www.evryn.ai/" className="text-evryn-teal-dark hover:underline">https://www.evryn.ai/</a> (the &quot;<strong>Site</strong>&quot;) and any of our other online and offline offerings that link to, or are otherwise subject to, this Privacy Notice (collectively, the &quot;<strong>Services</strong>&quot;).
            </p>

            <p className="mb-6">
              <strong>Overview of the Evryn Platform.</strong> Our users who forward their inbound communications to Evryn for evaluation (&quot;<strong>Initiating Users</strong>&quot;) may use the Services and their AI features to analyze and interact with others (&quot;<strong>Non-initiating Users</strong>&quot;) (Initiating Users and Non-initiating Users, collectively, &quot;<strong>Users</strong>&quot;). As part of this, we may use AI to communicate with, and collect personal information, from Non-initiating Users. The User personal information we may collect includes, but is not limited to, email addresses and email communications between a Non-initiating User and Initiating User.
            </p>

            <nav className="bg-gray-50 rounded-lg p-4 mb-8">
              <ol className="list-decimal list-inside space-y-2">
                <li><a href="#updates" className="text-evryn-teal-dark hover:underline">UPDATES TO THIS PRIVACY NOTICE</a></li>
                <li><a href="#collect" className="text-evryn-teal-dark hover:underline">PERSONAL INFORMATION WE COLLECT</a></li>
                <li><a href="#use" className="text-evryn-teal-dark hover:underline">HOW WE USE PERSONAL INFORMATION</a></li>
                <li><a href="#share" className="text-evryn-teal-dark hover:underline">HOW WE SHARE PERSONAL INFORMATION</a></li>
                <li><a href="#choices" className="text-evryn-teal-dark hover:underline">YOUR PRIVACY CHOICES AND RIGHTS</a></li>
                <li><a href="#transfers" className="text-evryn-teal-dark hover:underline">INTERNATIONAL TRANSFERS OF PERSONAL INFORMATION</a></li>
                <li><a href="#retention" className="text-evryn-teal-dark hover:underline">RETENTION OF PERSONAL INFORMATION</a></li>
                <li><a href="#children" className="text-evryn-teal-dark hover:underline">CHILDREN&apos;S PERSONAL INFORMATION</a></li>
                <li><a href="#contact" className="text-evryn-teal-dark hover:underline">CONTACT US</a></li>
              </ol>
            </nav>

            <section id="updates" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. UPDATES TO THIS PRIVACY NOTICE</h2>
              <p>
                We may update this Privacy Notice from time to time in our sole discretion. If we do, we&apos;ll let you know by posting the updated Privacy Notice on our website, and we may also send other communications.
              </p>
            </section>

            <section id="collect" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. PERSONAL INFORMATION WE COLLECT</h2>
              <p className="mb-4">
                We collect personal information that you provide to us, personal information we collect automatically when you use the Services, and personal information from third-party sources, as described below.
              </p>

              <h3 className="text-xl font-semibold mb-3">A. Personal Information You Provide to Us Directly</h3>
              <p className="mb-3">We may collect personal information that you provide to us.</p>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li><strong>Account Information.</strong> We may collect personal information in connection with the creation or administration of your account. This personal information may include, but is not limited to, your name, email address, message content, and other information you store with your account. When a User deletes their account, we may also retain a pseudonymized identifier for account integrity purposes. This identifier cannot be used to directly identify the User.</li>
                <li><strong>Contact Information.</strong> We may collect contact information that you provide to us, such as your email address.</li>
                <li><strong>Non-initiating User Data.</strong> If you are a Non-initiating User that interacts with Evryn on behalf of an Initiating User, we may collect any personal information that you provide as part of this interaction. Additionally, if you are an Initiating User, you agree that Evryn may reach out to Non-initiating Users on your behalf to provide the Services.</li>
                <li><strong>Initiating User Email Data.</strong> In order to use the Services as an Initiating User, you agree to the automatic forwarding of emails. When an Initiating User forwards their incoming emails to Evryn, we collect and process personal information contained in those emails, including the sender&apos;s name, email address, message content, and metadata (&quot;<strong>Initiating User Email Data</strong>&quot;). This occurs when individuals send emails to an Initiating User. We create user records for these Non-initiating Users so that our AI can evaluate mutual fit between individuals and facilitate high-quality connections on behalf of the Initiating User. These Non-initiating users may be contacted by Evryn as part of providing the Services. You can revoke our access to Initiating User Email Data at any time by removing Evryn from the applicable thread or stop forwarding emails to Evryn. However, please note that your withdrawal will only take effect for future processing. If you stop forwarding emails to Evryn, Evryn will not be able to continue providing the Services.</li>
                <li><strong>Your Communications with Us.</strong> We, and our service providers, may collect the information you communicate to us, such as through email.</li>
                <li><strong>Interactive Features.</strong> We and others who use our Services may collect personal information that you submit or make available through our interactive features (e.g., social media pages). Any information you provide using the public sharing features of the Services will be considered &quot;public.&quot; We will only publicly feature user-provided content, such as success stories, with your consent.</li>
                <li><strong>Conferences, Trade Shows, and Other Events.</strong> We may collect personal information from individuals when we attend or host conferences, trade shows, and other events.</li>
                <li><strong>Business Development and Strategic Partnerships.</strong> We may collect personal information from individuals and third parties to assess and pursue potential business opportunities.</li>
                <li><strong>Job Applications.</strong> If you apply for a job with us, we will collect any personal information you provide in connection with your application, such as your contact information and CV.</li>
              </ul>
              <h3 className="text-xl font-semibold mb-3">B. Personal Information Collected Automatically</h3>
              <p className="mb-3">We may collect personal information automatically when you use the Services.</p>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li><strong>Device Information.</strong> We may collect personal information about your device, such as your Internet protocol (IP) address, user settings, cookie identifiers, other unique identifiers, browser or device information, Internet service provider, and location information (including, as applicable, an approximate location derived from the IP address).</li>
                <li><strong>Usage Information.</strong> We may collect personal information about your use of the Services, such as the pages that you visit, items that you search for, the types of content you interact with, information about the links you click, the frequency and duration of your activities, and other information about how you use the Services.</li>
                <li><strong>Cookie Notice (and Other Technologies).</strong> We, as well as third parties, may use cookies, pixel tags, and other technologies (&quot;<strong>Technologies</strong>&quot;) to automatically collect personal information through your use of the Site.
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li><strong>Cookies.</strong> Cookies are small text files stored in device browsers.</li>
                    <li><strong>Pixel Tags/Web Beacons.</strong> A pixel tag (also known as a web beacon) is a piece of code embedded in the Site that collects personal information about use of or engagement with the Site. The use of a pixel tag allows us to record, for example, that a user has visited a particular web page or clicked on a particular advertisement. We may also include web beacons in emails to understand whether messages have been opened, acted on, or forwarded.</li>
                  </ul>
                </li>
              </ul>
              <p className="mb-4 text-sm text-gray-600">
                See &quot;<a href="#choices" className="text-evryn-teal-dark hover:underline">Your Privacy Choices and Rights</a>&quot; below to understand your choices regarding these Technologies.
              </p>

              <h3 className="text-xl font-semibold mb-3">C. Personal Information Collected from Third Parties</h3>
              <p className="mb-3">
                We may collect personal information about you from third parties. For example, if you access the Services using a third-party website, application, service, products, or technology (each a &quot;<strong>Third-Party Service</strong>&quot;), we may collect personal information about you from that Third-Party Service that you have made available via your privacy settings.
              </p>
              <p>
                We may also collect publicly available information about Non-initiating Users to provide more relevant Services and facilitate connections between Users.
              </p>
            </section>

            <section id="use" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. HOW WE USE PERSONAL INFORMATION</h2>
              <p className="mb-4">
                We use personal information for a variety of business purposes, including to provide the Services, for administrative purposes, and to provide you with marketing materials, as described below.
              </p>

              <h3 className="text-xl font-semibold mb-3">A. Provide the Services</h3>
              <p className="mb-3">We use personal information to provide the Services, such as:</p>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li>Providing access to certain areas, functionalities, and features of the Services;</li>
                <li>Communicating with you;</li>
                <li>Answering requests; and</li>
                <li>Sharing personal information with third parties as needed to provide the Services.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">B. Improve the Site and Develop New Products and the Services</h3>
              <p className="mb-3">We use personal information to improve the Services and to develop new products and services, such as:</p>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li>Developing, training, and fine-tuning models, algorithms, and artificial intelligence technologies; and</li>
                <li>Improving, upgrading, or enhancing the Services.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">C. Operate Our Business</h3>
              <p className="mb-3">We use personal information to operate our business, such as:</p>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li>Engaging in direct marketing, research and development (including marketing research), network and information security, and fraud prevention;</li>
                <li>Carrying out analytics;</li>
                <li>Creating de-identified and/or aggregated information;</li>
                <li>Allowing you to register for events;</li>
                <li>Enforcing our agreements and policies; and</li>
                <li>Carrying out activities that are required to comply with our legal obligations.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">D. Marketing</h3>
              <p className="mb-4">
                We may use personal information for marketing purposes, including to personalize and deliver marketing communications, promotions, and offers that may be of interest to you. If you are a Non-initiating User, Evryn may also invite you to join the Evryn network.
              </p>

              <h3 className="text-xl font-semibold mb-3">E. With Your Consent or Direction</h3>
              <p className="mb-4">
                We may use personal information: (i) for other purposes that are clearly disclosed to you at the time you provide the personal information, (ii) with your consent, or (iii) as otherwise directed by you.
              </p>

              <h3 className="text-xl font-semibold mb-3">F. Profiling</h3>
              <p>
                We may engage in profiling. For example, Evryn may use automated processes to analyze User communications and assess the likelihood that a User may be a good fit for connection with an Initiating User. We may also use information about Non-initiating Users to make recommendations to our Initiating Users about who to engage with. We do not tell Initiating Users whether or not to reach out to a particular Non-initiating User. While these automated assessments help us provide our Services, they do not produce legal or similarly significant effects on individuals.
              </p>
            </section>

            <section id="share" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. HOW WE SHARE PERSONAL INFORMATION</h2>
              <p className="mb-4">
                We share personal information with third parties for a variety of business purposes, including to provide the Services, to protect us or others, or in connection with a major business transaction such as a merger, sale, or asset transfer, as described below.
              </p>

              <h3 className="text-xl font-semibold mb-3">A. Disclosures to Provide the Services</h3>
              <p className="mb-3">We may share any of the personal information we collect with the categories of third parties described below.</p>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li><strong>Service Providers.</strong> We may share personal information with service providers that assist us with the provision of the Services. This may include, but is not limited to, service providers that provide us with hosting services, customer service, AI or machine learning services, analytics, marketing services, IT support, and related services. In addition, personal information and email communications may be shared with service providers that help provide the Services.
                  <ul className="list-disc pl-8 mt-2">
                    <li><strong>Google Analytics.</strong> For more information about how Google uses your personal information, please visit{" "}
                      <a href="http://www.google.com/policies/privacy/partners/" className="text-evryn-teal-dark hover:underline">Google Analytics&apos; Privacy Policy</a>. To learn more about how to opt out of Google Analytics&apos; use of your personal information, please click{" "}
                      <a href="http://tools.google.com/dlpage/gaoptout" className="text-evryn-teal-dark hover:underline">here</a>.
                    </li>
                  </ul>
                </li>
                <li><strong>Other Users You Share or Interact With.</strong> The Services may allow Evryn users to share personal information or interact with other users of the Services.</li>
                <li><strong>Third-Party Services You Share or Interact With.</strong> The Services may link to or allow you to interface with, interact with, share information with, direct us to share information with, access, and/or use a Third-Party Service.</li>
              </ul>
              <p className="mb-4">
                Any personal information shared with a Third-Party Service will be subject to the Third-Party Service&apos;s privacy policy. We are not responsible for the processing of personal information by Third-Party Service.
              </p>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li><strong>Business Partners.</strong> We may share your personal information with business partners we work with to provide you with a product or service you have requested. We may also share your personal information with business partners with whom we jointly offer products or services.</li>
              </ul>
              <p className="mb-4">
                Once your personal information is shared with our business partner, it will also be subject to our business partner&apos;s privacy policy. We are not responsible for the processing of personal information by our business partners.
              </p>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li><strong>Affiliates.</strong> We may share your personal information with our corporate affiliates.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">B. Disclosures to Protect Us or Others</h3>
              <p className="mb-4">
                We may share your personal information and related information with external parties if we, in good faith, believe doing so is required or appropriate to comply with law enforcement requests, national security requests, or other government requests; comply with legal process, such as a court order or subpoena; protect your, our, or others&apos; rights, property, or safety, including when we have concerns about a User&apos;s safety or well-being; enforce our policies or contracts; collect amounts owed to us; or assist with an investigation or prosecution of suspected or actual unauthorized or illegal activity.
              </p>

              <h3 className="text-xl font-semibold mb-3">C. Disclosure in the Event of Merger, Sale, or Other Asset Transfers</h3>
              <p>
                If we are involved in a merger, acquisition, financing, reorganization, bankruptcy, receivership, purchase or sale of assets, transition of service to another provider, or other similar corporate transaction, your personal information may be shared, sold, or transferred as part of such a transaction.
              </p>
            </section>

            <section id="choices" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. YOUR PRIVACY CHOICES AND RIGHTS</h2>

              <h3 className="text-xl font-semibold mb-3">Your Privacy Choices</h3>
              <p className="mb-3">The privacy choices you may have about your personal information are described below.</p>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li><strong>Email Communications.</strong> If you receive an unwanted email from us, you can use the unsubscribe functionality found at the bottom of the email to opt out of receiving future emails. Note that you will not be able to opt out of certain communications (e.g., communications regarding the Services or updates to this Privacy Notice).</li>
                <li><strong>&quot;Do Not Track.&quot;</strong> Do Not Track (&quot;<strong>DNT</strong>&quot;) is a privacy preference that users can set in certain web browsers. Please note that we do not respond to or honor DNT signals or similar mechanisms transmitted by web browsers.</li>
                <li><strong>Cookies.</strong> You may stop or restrict the placement of Technologies on your device or remove them by adjusting your preferences as your browser or device permits. However, if you adjust your preferences, the Site may not work properly.</li>
              </ul>
              <p className="mb-3">
                Please note that cookie-based opt-outs are not effective on mobile applications. However, you may opt out of certain tracking on some mobile applications by following the instructions for{" "}
                <a href="https://support.google.com/googleplay/android-developer/answer/6048248?hl=en" className="text-evryn-teal-dark hover:underline">Android</a>,{" "}
                <a href="https://support.apple.com/en-us/HT202074" className="text-evryn-teal-dark hover:underline">iOS</a>, and{" "}
                <a href="https://www.networkadvertising.org/mobile-choice/" className="text-evryn-teal-dark hover:underline">other mobile operating systems</a>.
              </p>
              <p className="mb-4">
                Please note you must separately opt out in each browser and on each device.
              </p>

              <h3 className="text-xl font-semibold mb-3">Your Privacy Rights</h3>
              <p className="mb-3">To the extent required by applicable law, you may have the right to:</p>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li>Request Access to or Portability of Your Personal Information;</li>
                <li>Request Correction of Your Personal Information;</li>
                <li>Request Deletion of Your Personal Information;</li>
              </ul>
              <p>
                If you would like to exercise any of these rights, please contact us as set forth in &quot;<a href="#contact" className="text-evryn-teal-dark hover:underline">Contact Us</a>&quot; below.
              </p>
            </section>

            <section id="transfers" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. INTERNATIONAL TRANSFERS OF PERSONAL INFORMATION</h2>
              <p className="mb-3">
                All personal information processed by us may be transferred, processed, and stored anywhere in the world, including, but not limited to, the United States or other countries, which may have data protection laws that are different from the laws where you live.
              </p>
              <p>
                For more information about the safeguards we use for international transfers of your personal information, please contact us as set forth below.
              </p>
            </section>

            <section id="retention" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. RETENTION OF PERSONAL INFORMATION</h2>
              <p className="mb-3">
                We will not retain personal information we collect as described in this Privacy Notice longer than necessary to provide the Services.
              </p>
              <p>
                To determine the appropriate retention period for personal information, we may consider applicable legal requirements; the amount, nature, and sensitivity of personal information; certain risk factors; the purposes for which we process your personal information; and whether we can achieve those purposes through other means.
              </p>
            </section>

            <section id="children" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. CHILDREN&apos;S PERSONAL INFORMATION</h2>
              <p className="mb-3">
                The Services are not directed to children under 18, and we do not knowingly collect personal information from children.
              </p>
              <p>
                If you are a parent or guardian and believe that your child has uploaded personal information to the Services in violation of applicable law, you may contact us as described in &quot;<a href="#contact" className="text-evryn-teal-dark hover:underline">Contact Us</a>&quot; below.
              </p>
            </section>

            <section id="contact" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. CONTACT US</h2>
              <p className="mb-3">
                Evryn is the controller of the personal information we process under this Privacy Notice.
              </p>
              <p>
                If you have any questions about our privacy practices or this Privacy Notice, or to exercise your rights as detailed in this Privacy Notice, please contact us at:{" "}
                <a href="mailto:privacy@evryn.ai" className="text-evryn-teal-dark hover:underline">
                  privacy@evryn.ai
                </a>
              </p>
            </section>
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center text-white/80 hover:text-white mt-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
