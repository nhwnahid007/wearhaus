import Container from "../../../../components/Container";

const PrivacyPage = () => {
  return (
    <div className="bg-white py-12 text-gray-800">
      <Container className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-darkColor">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 text-center mb-10">
          Last updated: June 21, 2025
        </p>

        <div className="space-y-8 text-lg leading-relaxed">
          <p>
            At <strong>WearHaus</strong>, we are committed to protecting your privacy. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from wearhaus.com (the &quot;Site&quot;).
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">
              1. Information We Collect
            </h2>
            <p className="mb-2">
              When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. As you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as &quot;Device Information.&quot;
            </p>
            <p>
              Additionally, when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number. We refer to this information as &quot;Order Information.&quot;
            </p>
            <p>
              &quot;Personal Information&quot; in this Privacy Policy refers to both Device Information and Order Information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">
              2. How We Use Your Personal Information
            </h2>
            <p className="mb-2">
              We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Communicate with you;</li>
              <li>Screen our orders for potential risk or fraud; and</li>
              <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
            </ul>
            <p className="mt-4">
              We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">
              3. Sharing Your Personal Information
            </h2>
            <p>
              We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Sanity.io to power our online store—you can read more about how Sanity uses your Personal Information here: <a className="text-darkColor hover:underline" href="https://www.sanity.io/legal/privacy" target="_blank" rel="noreferrer">Sanity Privacy Policy</a>. We also use Google Analytics to help us understand how our customers use the Site—you can read more about how Google uses your Personal Information here: <a className="text-darkColor hover:underline" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google Privacy Policy</a>. You can also opt-out of Google Analytics here: <a className="text-darkColor hover:underline" href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer">Google Analytics Opt-Out</a>.
            </p>
            <p className="mt-4">
              Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">
              4. Your Rights
            </h2>
            <p>
              If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">
              5. Data Retention
            </h2>
            <p>
              When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">
              6. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">
              7. Contact Us
            </h2>
            <p>
              For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:privacy@wearhaus.com" className="text-darkColor hover:underline">privacy@wearhaus.com</a> or by mail using the details provided on our Contact Us page.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPage;
