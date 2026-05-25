import Link from "next/link";

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>

          <p className="text-gray-600 mb-8">Last Updated: April 7, 2026</p>

          <div className="prose prose-gray max-w-none text-gray-800">
            <p className="mb-4">
              Please read these Terms of Service (the &quot;<strong>Terms</strong>&quot;) and our Privacy Notice (<a href="/privacy" className="text-evryn-teal-dark hover:underline">https://www.evryn.ai/privacy</a>) (&quot;<strong>Privacy Notice</strong>&quot;) carefully because they govern your use of the website located at <a href="https://www.evryn.ai/" className="text-evryn-teal-dark hover:underline">https://www.evryn.ai/</a> (the &quot;<strong>Site</strong>&quot;) and services accessible via the Site, or as otherwise connected with your email or electronic communication services, in each case as offered by Evryn, Inc. (&quot;<strong>Evryn</strong>&quot;). To make these Terms easier to read, the Site and our services are collectively called the &quot;<strong>Services</strong>.&quot;
            </p>

            <p className="mb-6">
              <strong>IMPORTANT NOTICE REGARDING ARBITRATION FOR UNITED STATES USERS: WHEN YOU AGREE TO THESE TERMS YOU ARE AGREEING (WITH LIMITED EXCEPTION) TO RESOLVE ANY DISPUTE BETWEEN YOU AND EVRYN THROUGH BINDING, INDIVIDUAL ARBITRATION RATHER THAN IN COURT. PLEASE REVIEW CAREFULLY SECTION 17 (DISPUTE RESOLUTION) BELOW FOR DETAILS REGARDING ARBITRATION.</strong>
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Description of Services.</h2>
              <p>
                The Services include an AI-powered relationship broker that evaluates inbound contacts on behalf of individuals (&quot;<strong>Initiating Users</strong>&quot;), identifies high-quality mutual connections, and may facilitate introductions to other individuals across professional, creative, and personal domains (&quot;<strong>Non-initiating Users</strong>&quot;) (Initiating Users and Non-initiating Users, collectively, &quot;<strong>Users</strong>&quot;). A successful introduction between an Initiating User and a Non-initiating User is a &quot;<strong>Match</strong>.&quot; The Services involve processing Initiating User-forwarded email communications to identify, evaluate, and classify contacts according to mutual fit, relevance, connection quality (e.g., by labeling communications as &quot;Match,&quot; &quot;Edge Case,&quot; or &quot;Pass&quot; (collectively, &quot;<strong>Redirect Decisions</strong>&quot;)) and correspondence according to relevance, urgency, sender importance, and communication patterns.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Agreement to Terms.</h2>
              <p>
                By using our Services, you agree to be bound by these Terms. If you don&apos;t agree to be bound by these Terms, do not use the Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Privacy Notice.</h2>
              <p>
                Please review our Privacy Notice, which also governs your use of the Services, for information on how we collect, use and share your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Changes to these Terms or the Services.</h2>
              <p>
                We may update the Terms from time to time at our sole discretion. If we do, we&apos;ll let you know by posting the updated Terms on the Site and/or may also send other communications. It&apos;s important that you review the Terms whenever we update them or you use the Services. If you continue to use the Services after we have posted updated Terms it means that you accept and agree to the changes. If you don&apos;t agree to be bound by the changes, you may not use the Services anymore. Because our Services are evolving over time we may change or discontinue all or any part of the Services, at any time and without notice, at our sole discretion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Who May Use the Services?</h2>
              <p>
                You may use the Services only if you are 18 years or older and capable of forming a binding contract with Evryn and not otherwise barred from using the Services under applicable law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Feedback.</h2>
              <p>
                We appreciate feedback, comments, ideas, proposals and suggestions for improvements to the Services (&quot;<strong>Feedback</strong>&quot;). If you choose to submit Feedback, you agree that we are free to use it without any restriction or compensation to you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Fees.</h2>
              <p>
                Certain limited features or functionality of the Services may be used at no cost, and certain features or functionality of the Services may require payment of a fee for use thereof, in each case, as set forth through the Services. You agree to pay all applicable fees in connection with your use of the Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Representations and Warranties.</h2>
              <p>
                By using our Services, you represent and warrant that (i) your compliance with these Terms and use of the Services does not and will not violate or conflict with any agreement to which you are a party (including without limitation any employment or confidentiality agreement or otherwise); (ii) you have obtained and will maintain all necessary rights, permissions, consents, and authority (including without limitation from your employer, if applicable) for you to comply with these Terms, use the Services, and grant us the license rights in your User Data (defined below) under these Terms; (iii) neither your use of the Services nor your use or provision of User Data will infringe, misappropriate, or violate any third party&apos;s intellectual property rights, rights of publicity or privacy, or applicable law. FOR CLARITY, YOU ARE SOLELY RESPONSIBLE FOR ALL USER DATA, INCLUDING YOUR USE OF SUCH USER DATA AND MAKING SUCH USER DATA AVAILABLE TO THE SERVICES.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Your User Data.</h2>

              <h3 className="text-xl font-semibold mb-3">(a) <span className="underline">Providing User Data</span></h3>
              <p className="mb-4">
                Our Services may have access to, analyze, and/or ingest, or otherwise allow you to store or transmit content, such as emails and email attachments; files, documents, graphics, images, software, audio and video (collectively, excluding Feedback, &quot;<strong>User Data</strong>&quot;). You are solely responsible for the User Data you store, provide to, or transmit through the Services, and to the maximum extent permitted by law, Evryn will have no liability arising from or related to its processing of such User Data. Evryn does not claim any ownership rights in any User Data and nothing in these Terms will be deemed to restrict any rights that you may have to your User Data.
              </p>

              <h3 className="text-xl font-semibold mb-3">(b) <span className="underline">Permissions to Your User Data</span></h3>
              <p className="mb-4">
                By integrating or otherwise connecting the Services to your third-party email accounts (e.g., Google, Microsoft, etc.), granting access to your User Data (e.g., emails, email threads, and email attachments), or otherwise making any User Data available to the Services, you hereby grant to Evryn a non-exclusive, transferable, worldwide, royalty-free license, with the right to (i) sublicense, to use, analyze, copy, modify, create derivative works based upon, derive insights and information from, and distribute, the User Data which you connect, grant access to, or provide to the Services, in connection with operating, providing, and improving the Services and Evryn&apos;s other products, services, and technologies; (ii) disclosing and sharing such User Data with Evryn&apos;s third-party artificial intelligence and machine learning service providers in connection with operating, providing, and improving the Services (e.g., to propose Redirect Decisions, refine classification and ranking systems, and improve performance of the Services); and (iii) to fine-tune Evryn&apos;s machine learning models. For clarity, Evryn does not authorize the foregoing third parties to use your User Data to train their own models. For further clarity, if you provide Evryn with your User Data, Evryn will have access to such User Data, but not your email account or inbox. Evryn and the Services will only have access to those emails, email threads, messages, and attachments that you choose to share with the Services, such as by forwarding or carbon copying (cc&apos;ing) an Evryn e-mail address on an e-mail or conversation.
              </p>

              <h3 className="text-xl font-semibold mb-3">(c) <span className="underline">Removal of User Data</span></h3>
              <p className="mb-4">
                You can remove your User Data by emailing <a href="mailto:support@evryn.ai" className="text-evryn-teal-dark hover:underline">support@evryn.ai</a> with the subject line &quot;Delete my data&quot;. In certain instances, some User Data may be retained on the Services, pursuant to Evryn&apos;s privacy policy and its data retention and archival policies and processes. You may stop forwarding emails to Evryn at any time by removing any forwarding tool provided via the Service.
              </p>

              <h3 className="text-xl font-semibold mb-3">(d) <span className="underline">Evryn&apos;s Intellectual Property</span></h3>
              <p>
                We may make available through the Services content that is subject to intellectual property rights. We retain all rights to that content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. General Prohibitions and Evryn&apos;s Enforcement Rights.</h2>
              <p className="mb-4">You agree not to do any of the following:</p>
              <ol className="list-[lower-alpha] pl-8 space-y-3 mb-4">
                <li>Provide, transmit, or otherwise make available any User Data that: (i) infringes, misappropriates or violates a third party&apos;s patent, copyright, trademark, trade secret, moral rights or other intellectual property rights, or rights of publicity or privacy; (ii) violates, or encourages any conduct that would violate, any applicable law or regulation or would give rise to civil liability; (iii) is fraudulent, false, misleading or deceptive; (iv) is defamatory, obscene, pornographic, vulgar or offensive; (v) promotes discrimination, bigotry, racism, hatred, harassment or harm against any individual or group; (vi) is violent or threatening or promotes violence or actions that are threatening to any person or entity; or (vii) promotes illegal or harmful activities or substances;</li>
                <li>Use, display, mirror or frame the Services or any individual element within the Services, Evryn&apos;s name, any Evryn trademark, logo or other proprietary information, or the layout and design of any page or form contained on a page, without Evryn&apos;s express written consent;</li>
                <li>Access, tamper with, or use non-public areas of the Services, Evryn&apos;s computer systems, or the technical delivery systems of Evryn&apos;s providers;</li>
                <li>Attempt to probe, scan or test the vulnerability of any Evryn system or network or breach any security or authentication measures;</li>
                <li>Avoid, bypass, remove, deactivate, impair, descramble or otherwise circumvent any technological measure implemented by Evryn or any of Evryn&apos;s providers or any other third party (including another User) to protect the Services;</li>
                <li>Attempt to access or search the Services or download content from the Services using any engine, software, tool, agent, device or mechanism (including spiders, robots, crawlers, data mining tools or the like) other than the software and/or search agents provided by Evryn or other generally available third-party web browsers;</li>
                <li>Send any unsolicited or unauthorized advertising, promotional materials, email, junk mail, spam, chain letters or other form of solicitation;</li>
                <li>Use any meta tags or other hidden text or metadata utilizing an Evryn trademark, logo URL or product name without Evryn&apos;s express written consent;</li>
                <li>Use the Services, or any portion thereof, to commercially resell, sublicense, or offer the Services as part of a commercial product or service offered to third parties, including on behalf of any unaffiliated third party, without Evryn&apos;s prior written consent;</li>
                <li>Forge any TCP/IP packet header or any part of the header information in any email or newsgroup posting, or in any way use the Services to send altered, deceptive or false source-identifying information;</li>
                <li>Attempt to decipher, decompile, disassemble or reverse engineer any of the software used to provide the Services;</li>
                <li>Interfere with, or attempt to interfere with, the access of any User, host or network, including, without limitation, sending a virus, overloading, flooding, spamming, or mail-bombing the Services;</li>
                <li>Collect or store any personally identifiable information from the Services from other Users of the Services without their express permission;</li>
                <li>Impersonate or misrepresent your affiliation with any person or entity;</li>
                <li>Violate any applicable law or regulation; or</li>
                <li>Encourage or enable any other individual to do any of the foregoing.</li>
              </ol>
              <p className="mb-4">
                Evryn is not obligated to monitor access to or use of the Services or to review or edit any content. However, we have the right to access, review, or modify Output, in Evryn&apos;s discretion, including as necessary to operate and improve the Services, maintain accuracy, ensure compliance with these Terms, protect the integrity and functionality of the system, or to comply with applicable law or other legal requirements. We reserve the right, but are not obligated, to remove or disable access to any content, including User Data, at any time and without notice, including, but not limited to, if we, at our sole discretion, consider it objectionable or in violation of these Terms. We have the right to investigate violations of these Terms or conduct that affects the Services. Evryn reserves the right to contact an Initiating User to communicate that a Non-Initiating User is in distress or in the event of emergency. We may also consult and cooperate with law enforcement authorities in the event Evryn learns that a User is in distress and to prosecute Users who violate the law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">11. Links to Third Party Websites or Resources.</h2>
              <p>
                The Services may allow you to access third-party websites or other resources. We provide access only as a convenience and are not responsible for the content, products or services on or available from those resources or links displayed on such websites. You acknowledge sole responsibility for, and assume all risk arising from, your use of any third-party resources.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">12. Termination.</h2>
              <p>
                We may suspend or terminate your access to and use of the Services, including suspending access to or terminating your account, at our sole discretion, at any time, with or without notice to you. You may cancel your account at any time by sending us an email at <a href="mailto:support@evryn.ai" className="text-evryn-teal-dark hover:underline">support@evryn.ai</a> with the subject line &quot;Cancel my account.&quot; Upon any termination, discontinuation or cancellation of the Services or your account, the following Sections will survive: 6, 7 (only for payments due and owing to Evryn prior to the termination), 8, 9(b), 9(d), 10, 12, 13, 14, 15, 16, 17 and 18.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">13. Warranty Disclaimers.</h2>

              <h3 className="text-xl font-semibold mb-3">(a) <span className="underline">General</span>.</h3>
              <p className="mb-4">
                THE SERVICES ARE PROVIDED &quot;AS IS,&quot; WITHOUT WARRANTY OF ANY KIND. WITHOUT LIMITING THE FOREGOING, WE EXPLICITLY DISCLAIM ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT AND NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE. ADDITIONALLY, EVRYN WILL HAVE NO LIABILITY OR RESPONSIBILITY FOR ANY USER DATA, REDIRECT DECISION, OR YOUR RIGHTS TO PROVIDE OR MAKE AVAILABLE ANY USER DATA TO THE SERVICES OR EVRYN.
              </p>
              <p className="mb-4">
                We make no warranty that the Services will meet your requirements or be available on an uninterrupted, secure, or error-free basis. We make no warranty regarding the quality, accuracy, timeliness, truthfulness, completeness or reliability of any information or content on the Services.
              </p>

              <h3 className="text-xl font-semibold mb-3">(b) <span className="underline">No Reliance on Output</span>.</h3>
              <p className="mb-4">
                DUE TO THE PROBABILISTIC NATURE OF MACHINE LEARNING AND ARTIFICIAL INTELLIGENCE, THE SERVICES MAY PRODUCE ANY E-MAILS, TELECONFERENCE INVITATIONS, OR OTHER ELECTRONIC INVITATIONS, OR OTHER CONTENT (&quot;<strong>OUTPUT</strong>&quot;) THAT IS INACCURATE, INCORRECT, OFFENSIVE, OR OTHERWISE UNDESIRABLE, AND/OR MAY TAKE ACTIONS (E.G., CREATING, SENDING, OR DELETING E-MAILS, TELECONFERENCE OR OTHER ELECTRONIC INVITATIONS, OR OTHER CONTENT) IN AN UNINTENDED, UNDESIRABLE, OR INCORRECT MANNER (&quot;<strong>UNINTENDED ACTIONS</strong>&quot;). YOU WILL NOT RELY ON THE SERVICES OR ANY OUTPUT AND WILL CONDUCT YOUR OWN DILIGENCE AND EXERCISE YOUR OWN BEST BUSINESS JUDGMENT WITH MEANINGFUL HUMAN INVOLVEMENT IN MAKING ANY DECISIONS OR TAKING ANY ACTIONS REGARDING THE OUTPUT, INCLUDING SENDING ANY E-MAILS OR OTHER COMMUNICATIONS USING ANY OUTPUT. EVRYN HEREBY DISCLAIMS ANY AND ALL LIABILITY IN CONNECTION WITH ANY OUTPUT OR YOUR RELIANCE THEREON, OR ANY UNINTENDED ACTIONS, AND YOU ARE SOLELY RESPONSIBLE FOR ANY DECISIONS, ACTIONS, OR OUTCOMES RESULTING FROM THE USE OF, OR IN CONNECTION WITH, ANY OUTPUT OR THE SERVICES.
              </p>

              <h3 className="text-xl font-semibold mb-3">(c) <span className="underline">No Guarantee of Matching</span>.</h3>
              <p className="mb-4">
                EVRYN DOES NOT GUARANTEE THE MATCHING OF ANY USERS OR THAT A MATCH WILL BE MADE AT ALL.
              </p>

              <h3 className="text-xl font-semibold mb-3">(d) <span className="underline">No Professional Advice</span>.</h3>
              <p className="mb-4">
                EVRYN FACILITATES INTRODUCTIONS BETWEEN USERS, BUT IS NOT A PARTY TO ANY SUBSEQUENT AGREEMENT, ARRANGEMENT, TRANSACTION, OR ENGAGEMENT BETWEEN USERS, AND HAS NO RESPONSIBILITY OR LIABILITY FOR THE QUALITY, DELIVERY, PERFORMANCE, OR OUTCOMES OF ANY WORK, SERVICES, OR TRANSACTIONS BETWEEN USERS WHO ARE MATCHED THROUGH THE SERVICES.
              </p>

              <h3 className="text-xl font-semibold mb-3">(e) <span className="underline">No Referral Relationship</span>.</h3>
              <p>
                NO REFERRAL RELATIONSHIP EXISTS BETWEEN INITIATING USERS AND EVRYN. NOTHING IN THESE TERMS WILL RESTRICT EVRYN FROM MATCHING NON-INITIATING USERS ORIGINALLY DERIVED FROM AN INITIATING USER WITH OTHER USERS. INITIATING USERS ARE NOT ENTITLED TO ANY FEE, COMMISSION, OR OTHER COMPENSATION IN CONNECTION WITH SUCH MATCHES.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">14. Indemnity.</h2>
              <p>
                You will indemnify and hold Evryn and its officers, directors, employees and agents, harmless from and against any claims, disputes, demands, liabilities, damages, losses, and costs and expenses, including, without limitation, reasonable legal and accounting fees arising out of or in any way connected with (a) your access to or use of the Services, (b) any User Data, or (c) your violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">15. Limitation of Liability.</h2>
              <p className="mb-4">
                (a) TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER EVRYN NOR ITS SERVICE PROVIDERS INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE SERVICES WILL BE LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, OR DAMAGES FOR LOST PROFITS, LOST REVENUES, LOST SAVINGS, LOST BUSINESS OPPORTUNITY, LOSS OF DATA OR GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE OR SYSTEM FAILURE OR THE COST OF SUBSTITUTE SERVICES OF ANY KIND ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE THE SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT EVRYN OR ITS SERVICE PROVIDERS HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, EVEN IF A LIMITED REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.
              </p>
              <p className="mb-4">
                (b) TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL EVRYN&apos;S TOTAL CUMULATIVE LIABILITY TO YOU ARISING FROM ALL CLAIMS UNDER OR RELATED TO THESE TERMS OR FROM THE USE OF OR INABILITY TO USE THE SERVICES EXCEED THE AMOUNTS ACTUALLY PAID BY YOU OR PAYABLE BY YOU TO EVRYN FOR USE OF THE SERVICES, PROVIDED THAT IN NO EVENT WILL EVRYN&apos;S TOTAL CUMULATIVE LIABILITY FOR ALL CLAIMS MADE UNDER OR RELATED TO THESE TERMS EXCEED THE FEES ACTUALLY PAID BY YOU TO EVRYN IN THE SIX (6) MONTH PERIOD IMMEDIATELY PRECEDING THE FIRST EVENT GIVING RISE TO THE APPLICABLE CLAIM MADE UNDER OR RELATED TO THESE TERMS, LESS ALL AMOUNTS PAID BY YOU TO EVRYN FOR ALL PAST CLAIMS OF ANY KIND MADE UNDER OR RELATED TO THESE TERMS, REGARDLESS OF THE LEGAL OR EQUITABLE THEORY ON WHICH THE CLAIM OR LIABILITY IS BASED, AND WHETHER OR NOT EVRYN WAS ADVISED OF THE POSSIBILITY OF SUCH LOSS OR DAMAGE.
              </p>
              <p>
                (c) THE EXCLUSIONS AND LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN EVRYN AND YOU.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">16. Governing Law and Forum Choice.</h2>
              <p>
                For Users of the Service within the United States, these Terms and any action related thereto will be governed by the Federal Arbitration Act, federal arbitration law, and the laws of the State of California, without regard to its conflict of laws provisions. For all other Users of the Service, these Terms and any action related thereto will be governed by the laws of the State of California, without regard to its conflict of laws provisions, and Section 17 (Dispute Resolution) will not apply. Except as otherwise expressly set forth in Section 17 (Dispute Resolution), the exclusive jurisdiction for all Disputes (defined below) that you and Evryn are not required to arbitrate (e.g., pursuant to Section 17(b) and for Users of the Service outside of the United States) will be the state and federal courts located in the Northern District of California, and you and Evryn each waive any objection to jurisdiction and venue in such courts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">17. Dispute Resolution for United States Users.</h2>
              <p className="mb-4">This Section 17 applies to Users of the Service within the United States.</p>

              <h3 className="text-xl font-semibold mb-3">(a) <span className="underline">Mandatory Arbitration of Disputes</span>.</h3>
              <p className="mb-4">
                We each agree that any dispute, claim or controversy arising out of or relating to these Terms or the breach, termination, enforcement, interpretation or validity thereof or the use of the Services (collectively, &quot;<strong>Disputes</strong>&quot;) will be resolved <strong>solely by binding, individual arbitration and not in a class, representative or consolidated action or proceeding</strong>. You and Evryn agree that the U.S. Federal Arbitration Act governs the interpretation and enforcement of these Terms, and that you and Evryn are each waiving the right to a trial by jury or to participate in a class action. This arbitration provision shall survive termination of these Terms.
              </p>

              <h3 className="text-xl font-semibold mb-3">(b) <span className="underline">Exceptions</span>.</h3>
              <p className="mb-4">
                As limited exceptions to Section 17(a) above: (i) we both may seek to resolve a Dispute in small claims court if it qualifies; and (ii) we each retain the right to seek injunctive or other equitable relief from a court to prevent (or enjoin) the infringement or misappropriation of our intellectual property rights.
              </p>

              <h3 className="text-xl font-semibold mb-3">(c) <span className="underline">Conducting Arbitration and Arbitration Rules</span>.</h3>
              <p className="mb-4">
                The arbitration will be conducted by the American Arbitration Association (&quot;<strong>AAA</strong>&quot;) under its Consumer Arbitration Rules (the &quot;<strong>AAA Rules</strong>&quot;) then in effect, except as modified by these Terms. The AAA Rules are available at <a href="http://www.adr.org" className="text-evryn-teal-dark hover:underline">www.adr.org</a> or by calling 1-800-778-7879. A party who wishes to start arbitration must submit a written Demand for Arbitration to AAA and give notice to the other party as specified in the AAA Rules. The AAA provides a form Demand for Arbitration at <a href="http://www.adr.org" className="text-evryn-teal-dark hover:underline">www.adr.org</a>. Any arbitration hearings will take place in the county (or parish) where you live, unless we both agree to a different location. The parties agree that the arbitrator shall have exclusive authority to decide all issues relating to the interpretation, applicability, enforceability and scope of this arbitration agreement.
              </p>

              <h3 className="text-xl font-semibold mb-3">(d) <span className="underline">Arbitration Costs</span>.</h3>
              <p className="mb-4">
                Payment of all filing, administration and arbitrator fees will be governed by the AAA Rules, and we won&apos;t seek to recover the administration and arbitrator fees we are responsible for paying, unless the arbitrator finds your Dispute frivolous. If we prevail in arbitration we&apos;ll pay all of our attorneys&apos; fees and costs and won&apos;t seek to recover them from you. If you prevail in arbitration you will be entitled to an award of attorneys&apos; fees and expenses to the extent provided under applicable law.
              </p>

              <h3 className="text-xl font-semibold mb-3">(e) <span className="underline">Injunctive and Declaratory Relief</span>.</h3>
              <p className="mb-4">
                Except as provided in Section 17(b) above, the arbitrator shall determine all issues of liability on the merits of any claim asserted by either party and may award declaratory or injunctive relief only in favor of the individual party seeking relief and only to the extent necessary to provide relief warranted by that party&apos;s individual claim. To the extent that you or we prevail on a claim and seek public injunctive relief (that is, injunctive relief that has the primary purpose and effect of prohibiting unlawful acts that threaten future injury to the public), the entitlement to and extent of such relief must be litigated in a civil court of competent jurisdiction and not in arbitration. The parties agree that litigation of any issues of public injunctive relief shall be stayed pending the outcome of the merits of any individual claims in arbitration.
              </p>

              <h3 className="text-xl font-semibold mb-3">(f) <span className="underline">Class Action Waiver</span>.</h3>
              <p className="mb-4">
                <strong>YOU AND EVRYN AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.</strong> Further, if the parties&apos; Dispute is resolved through arbitration, the arbitrator may not consolidate another person&apos;s claims with your claims, and may not otherwise preside over any form of a representative or class proceeding. If this specific provision is found to be unenforceable, then the entirety of this Section 17 shall be null and void.
              </p>

              <h3 className="text-xl font-semibold mb-3">(g) <span className="underline">Severability</span>.</h3>
              <p>
                With the exception of any of the provisions in Section 17(f) of these Terms (&quot;<strong>Class Action Waiver</strong>&quot;), if an arbitrator or court of competent jurisdiction decides that any part of these Terms is invalid or unenforceable, the other parts of these Terms will still apply.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">18. General Terms.</h2>

              <h3 className="text-xl font-semibold mb-3">(a) <span className="underline">Reservation of Rights</span>.</h3>
              <p className="mb-4">
                Evryn and its licensors exclusively own all right, title and interest in and to the Services, including all associated intellectual property rights. You acknowledge that the Services are protected by copyright, trademark, and other laws of the United States and foreign countries. You agree not to remove, alter or obscure any copyright, trademark, service mark or other proprietary rights notices incorporated in or accompanying the Services.
              </p>

              <h3 className="text-xl font-semibold mb-3">(b) <span className="underline">Entire Agreement</span>.</h3>
              <p className="mb-4">
                These Terms constitute the entire and exclusive understanding and agreement between Evryn and you regarding the Services, and these Terms supersede and replace all prior oral or written understandings or agreements between Evryn and you regarding the Services. If any provision of these Terms is held invalid or unenforceable by an arbitrator or a court of competent jurisdiction, that provision will be enforced to the maximum extent permissible and the other provisions of these Terms will remain in full force and effect. Except where provided by applicable law in your jurisdiction, you may not assign or transfer these Terms, by operation of law or otherwise, without Evryn&apos;s prior written consent. Any attempt by you to assign or transfer these Terms absent our consent or your statutory right, without such consent, will be null. Evryn may freely assign or transfer these Terms without restriction. Subject to the foregoing, these Terms will bind and inure to the benefit of the parties, their successors and permitted assigns.
              </p>

              <h3 className="text-xl font-semibold mb-3">(c) <span className="underline">Notices</span>.</h3>
              <p className="mb-4">
                Any notices or other communications provided by Evryn under these Terms will be given: (i) via email; or (ii) by posting to the Services. For notices made by email, the date of receipt will be deemed the date on which such notice is transmitted.
              </p>

              <h3 className="text-xl font-semibold mb-3">(d) <span className="underline">Waiver of Rights</span>.</h3>
              <p>
                Evryn&apos;s failure to enforce any right or provision of these Terms will not be considered a waiver of such right or provision. The waiver of any such right or provision will be effective only if in writing and signed by a duly authorized representative of Evryn. Except as expressly set forth in these Terms, the exercise by either party of any of its remedies under these Terms will be without prejudice to its other remedies under these Terms or otherwise.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">19. Contact Information.</h2>
              <p>
                If you have any questions about these Terms or the Services, please contact Evryn at{" "}
                <a href="mailto:legal@evryn.ai" className="text-evryn-teal-dark hover:underline">legal@evryn.ai</a>.
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
