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

          <p className="text-gray-600 mb-8">Last Updated: 10/24/25</p>

          <div className="prose prose-gray max-w-none text-gray-800">
            <p className="mb-6">
              This Privacy Notice applies to the processing of personal
              information by Evryn, Inc. ("Evryn," "we," "us," or "our") on our
              website available at evryn.ai (the "Site").
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
                <li><a href="#gdpr" className="text-evryn-teal-dark hover:underline">SUPPLEMENTAL NOTICE FOR EU/UK GDPR</a></li>
                <li><a href="#children" className="text-evryn-teal-dark hover:underline">CHILDREN'S PERSONAL INFORMATION</a></li>
                <li><a href="#contact" className="text-evryn-teal-dark hover:underline">CONTACT US</a></li>
              </ol>
            </nav>

            <section id="updates" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. UPDATES TO THIS PRIVACY NOTICE</h2>
              <p>
                We may update this Privacy Notice from time to time in our sole
                discretion. If we do, we'll let you know by posting the updated
                Privacy Notice on our website, and we may also send other
                communications.
              </p>
            </section>

            <section id="collect" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. PERSONAL INFORMATION WE COLLECT</h2>
              <p className="mb-4">
                We collect personal information that you provide to us, personal
                information we collect automatically when you use the Site, and
                personal information from third-party sources, as described below.
              </p>

              <h3 className="text-xl font-semibold mb-3">A. Personal Information You Provide to Us Directly</h3>
              <p className="mb-3">We may collect personal information that you provide to us.</p>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li><strong>Contact Information.</strong> We may collect contact information that you provide to us, such as your email address.</li>
                <li><strong>Your Communications with Us.</strong> We, and our service providers, may collect the information you communicate to us, such as through email.</li>
                <li><strong>Interactive Features.</strong> We and others who use our Site may collect personal information that you submit or make available through our interactive features (e.g., social media pages). Any information you provide using the public sharing features of the Site will be considered "public."</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">B. Personal Information Collected Automatically</h3>
              <p className="mb-3">We may collect personal information automatically when you use the Site.</p>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li><strong>Device Information.</strong> We may collect personal information about your device, such as your Internet protocol (IP) address, user settings, cookie identifiers, other unique identifiers, browser or device information, Internet service provider, and location information (including, as applicable, an approximate location derived from the IP address).</li>
                <li><strong>Usage Information.</strong> We may collect personal information about your use of the Site, such as the pages that you visit, items that you search for, the types of content you interact with, information about the links you click, the frequency and duration of your activities, and other information about how you use the Site.</li>
                <li><strong>Cookie Notice (and Other Technologies).</strong> We, as well as third parties, may use cookies, pixel tags, and other technologies ("Technologies") to automatically collect personal information through your use of the Site.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">C. Personal Information Collected from Third Parties</h3>
              <p>
                We may collect personal information about you from third parties. For example, if you access the Site using a third-party website, application, service, products, or technology (each a "Third-Party Service"), we may collect personal information about you from that Third-Party Service that you have made available via your privacy settings.
              </p>
            </section>

            <section id="use" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. HOW WE USE PERSONAL INFORMATION</h2>
              <p className="mb-4">
                We use personal information for a variety of business purposes, including to provide the Site, for administrative purposes, and to provide you with marketing materials, as described below.
              </p>

              <h3 className="text-xl font-semibold mb-3">A. Provide the Site</h3>
              <p className="mb-3">We use personal information to provide the Site, such as:</p>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li>Providing access to certain areas, functionalities, and features of the Site;</li>
                <li>Communicating with you;</li>
                <li>Answering requests; and</li>
                <li>Sharing personal information with third parties as needed to provide the Site.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">B. Improve the Site and Develop New Products and Site</h3>
              <p className="mb-3">We use personal information to improve the Site and to develop new products and Site, such as:</p>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li>Developing, training, and fine-tuning models, algorithms, and artificial intelligence technologies; and</li>
                <li>Improving, upgrading, or enhancing the Site.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">C. Operate Our Business</h3>
              <p className="mb-3">We use personal information to operate our business, such as:</p>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li>Pursuing our legitimate interests such as direct marketing, research and development (including marketing research), network and information security, and fraud prevention;</li>
                <li>Carrying out analytics;</li>
                <li>Creating de-identified and/or aggregated information;</li>
                <li>Enforcing our agreements and policies; and</li>
                <li>Carrying out activities that are required to comply with our legal obligations.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">D. Marketing</h3>
              <p className="mb-4">
                We may use personal information in connection with our marketing activities including to tailor and provide you with marketing communications, promotions, and offers that may interest you.
              </p>

              <h3 className="text-xl font-semibold mb-3">E. With Your Consent or Direction</h3>
              <p>
                We may use personal information: (i) for other purposes that are clearly disclosed to you at the time you provide the personal information, (ii) with your consent, or (iii) as otherwise directed by you.
              </p>
            </section>

            <section id="share" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. HOW WE SHARE PERSONAL INFORMATION</h2>
              <p className="mb-4">
                We share personal information with third parties for a variety of business purposes, including to provide the Site, to protect us or others, or in connection with a major business transaction such as a merger, sale, or asset transfer, as described below.
              </p>

              <h3 className="text-xl font-semibold mb-3">A. Disclosures to Provide the Site</h3>
              <p className="mb-3">We may share any of the personal information we collect with the categories of third parties described below.</p>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li><strong>Service Providers.</strong> We may share personal information with service providers that assist us with the provision of the Site. This may include, but is not limited to, service providers that provide us with hosting services, customer service, AI or machine learning services, analytics, marketing services, IT support, and related services.</li>
                <li><strong>Third-Party Site You Share or Interact With.</strong> The Site may link to or allow you to interface with, interact with, share information with, direct us to share information with, access, and/or use a Third-Party Service.</li>
              </ul>
              <p className="mb-3">
                Any personal information shared with a Third-Party Service will be subject to the Third-Party Service's privacy policy. We are not responsible for the processing of personal information by Third-Party Site.
              </p>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li><strong>Affiliates.</strong> We may share your personal information with our corporate affiliates.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">B. Disclosures to Protect Us or Others</h3>
              <p className="mb-4">
                We may share your personal information and related information with external parties if we, in good faith, believe doing so is required or appropriate to comply with law enforcement requests, national security requests, or other government requests; comply with legal process, such as a court order or subpoena; protect your, our, or others' rights, property, or safety; enforce our policies or contracts; collect amounts owed to us; or assist with an investigation or prosecution of suspected or actual unauthorized or illegal activity.
              </p>

              <h3 className="text-xl font-semibold mb-3">C. Disclosure in the Event of Merger, Sale, or Other Asset Transfers</h3>
              <p>
                If we are involved in a merger, acquisition, financing, reorganization, bankruptcy, receivership, purchase or sale of assets, transition of service to another provider, or other similar corporate transaction, your personal information may be shared, sold, or transferred as part of such a transaction.
              </p>
            </section>

            <section id="choices" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. YOUR PRIVACY CHOICES AND RIGHTS</h2>

              <h3 className="text-xl font-semibold mb-3">Your Privacy Choices</h3>
              <p className="mb-3">The privacy choices you may have about your personal information are described below.</p>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li><strong>Email Communications.</strong> If you receive an unwanted email from us, you can use the unsubscribe functionality found at the bottom of the email to opt out of receiving future emails. Note that you will not be able to opt out of certain communications (e.g., communications regarding the Site or updates to this Privacy Notice).</li>
                <li><strong>"Do Not Track."</strong> Do Not Track ("DNT") is a privacy preference that users can set in certain web browsers. Please note that we do not respond to or honor DNT signals or similar mechanisms transmitted by web browsers.</li>
                <li><strong>Cookies.</strong> You may stop or restrict the placement of Technologies on your device or remove them by adjusting your preferences as your browser or device permits. However, if you adjust your preferences, the Site may not work properly.</li>
              </ul>
              <p className="mb-3">
                Please note that cookie-based opt-outs are not effective on mobile applications. However, you may opt out of certain tracking on some mobile applications by following the instructions for Android, iOS, and other mobile operating systems.
              </p>
              <p className="mb-4">
                Please note you must separately opt out in each browser and on each device.
              </p>

              <h3 className="text-xl font-semibold mb-3">Your Privacy Rights</h3>
              <p className="mb-3">In accordance with applicable law, you may have the right to:</p>
              <ul className="list-disc pl-8 space-y-2 mb-4">
                <li>Request Access to or Portability of Your Personal Information;</li>
                <li>Request Correction of Your Personal Information;</li>
                <li>Request Deletion of Your Personal Information;</li>
                <li>Request Restriction of or Object to Our Processing of Your Personal Information; and</li>
                <li>Withdraw Your Consent to Our Processing of Your Personal Information. Please note that your withdrawal will take effect only for future processing and will not affect the lawfulness of processing before the withdrawal.</li>
              </ul>
              <p className="mb-3">
                If you would like to exercise any of these rights, please contact us as set forth in "Contact Us" below.
              </p>
              <p className="mb-3">
                We will process such requests in accordance with applicable laws.
              </p>
              <p>
                If your personal information is subject to the applicable data protection laws of the European Economic Area or the United Kingdom, you have the right to lodge a complaint with the competent supervisory authority if you believe that our processing of your personal information violates applicable law.
              </p>
            </section>

            <section id="transfers" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. INTERNATIONAL TRANSFERS OF PERSONAL INFORMATION</h2>
              <p className="mb-3">
                All personal information processed by us may be transferred, processed, and stored anywhere in the world, including, but not limited to, the United States or other countries, which may have data protection laws that are different from the laws where you live. These countries may or may not have adequate data protection laws as defined by the data protection authority in your country.
              </p>
              <p className="mb-3">
                If we transfer personal information from the European Economic Area, Switzerland, and/or the United Kingdom to a country that does not provide an adequate level of protection under applicable data protection laws, one of the safeguards we may use to support such transfer is the EU Standard Contractual Clauses.
              </p>
              <p>
                For more information about the safeguards we use for international transfers of your personal information, please contact us as set forth below.
              </p>
            </section>

            <section id="retention" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. RETENTION OF PERSONAL INFORMATION</h2>
              <p className="mb-3">
                We store the personal information we collect as described in this Privacy Notice for as long as you use the Site, or as long as necessary to fulfill the purpose(s) for which it was collected, or as long as necessary to pursue our business purposes.
              </p>
              <p>
                To determine the appropriate retention period for personal information, we may consider applicable legal requirements; the amount, nature, and sensitivity of the personal information; certain risk factors; the purposes for which we process your personal information; and whether we can achieve those purposes through other means.
              </p>
            </section>

            <section id="gdpr" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. SUPPLEMENTAL NOTICE FOR EU/UK GDPR</h2>
              <p className="mb-3">
                This Supplemental Notice for EU/UK GDPR applies only to our processing of personal information that is subject to the EU or UK General Data Protection Regulation.
              </p>
              <p className="mb-4">
                In some cases, providing personal information may be a requirement under applicable law, a contractual requirement, or a requirement necessary to enter into a contract. If you choose not to provide personal information in cases where it is required, we will inform you of the consequences at the time of your refusal to provide the personal information.
              </p>
              <p className="mb-3">
                Evryn's processing of your personal information may be supported by one or more of the following lawful bases: Performance of a Contract, Legitimate Interest, Consent, or Compliance with Legal Obligations.
              </p>
            </section>

            <section id="children" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. CHILDREN'S PERSONAL INFORMATION</h2>
              <p className="mb-3">
                The Site are not directed to children under 18 (or other age as required by local law outside the United States), and we do not knowingly collect personal information from children.
              </p>
              <p>
                If you are a parent or guardian and believe that your child has uploaded personal information to the Site in violation of applicable law, you may contact us as described in "Contact Us" below.
              </p>
            </section>

            <section id="contact" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. CONTACT US</h2>
              <p className="mb-3">
                Evryn is the controller of the personal information we process under this Privacy Notice.
              </p>
              <p>
                If you have any questions about our privacy practices or this Privacy Notice, or to exercise your rights as detailed in this Privacy Notice, please contact us at:{" "}
                <a href="mailto:contact@evryn.ai" className="text-evryn-teal-dark hover:underline">
                  contact@evryn.ai
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
