import Container from "../../../../components/Container";

const TermsPage = () => {
  return (
    <div className="bg-white py-12 text-gray-800">
      <Container className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-darkColor">
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-500 text-center mb-10">
          Last updated: June 21, 2025
        </p>

        <div className="space-y-8 text-lg leading-relaxed">
          <p>
            Welcome to <strong>WearHaus</strong>! These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the WearHaus website (&quot;Site&quot;), including any content, functionality, and services offered on or through the Site. By placing an order through wearhaus.com, you signify that you have read, understood, and agree to be bound by these Terms, along with our Privacy Policy. If you do not agree with any part of these Terms, you may not use our Site or services.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">
              1. Your Account
            </h2>
            <p>
              If you create an account with WearHaus, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device, and you agree to accept responsibility for all activities that occur under your account or password. You agree to provide accurate and current information and to update such information as necessary.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">
              2. Product Information and Availability
            </h2>
            <p>
              WearHaus strives to ensure that all information about our products, including descriptions, images, and prices, is accurate and up-to-date. However, we do not warrant that product descriptions or other content of this Site are accurate, complete, reliable, current, or error-free. All products are subject to availability. We reserve the right to limit the quantity of products we supply; to discontinue any product at any time; and to change prices without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">
              3. Pricing and Payment
            </h2>
            <p>
              All prices displayed on the Site are in USD (United States Dollars) unless otherwise specified and are subject to change without notice. We accept various payment methods as indicated on our checkout page. By submitting an order, you represent and warrant that you are authorized to use the designated payment method and authorize us to charge your order (including taxes, shipping, and handling) to that payment method.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">
              4. Orders, Shipping, and Delivery
            </h2>
            <p>
              After placing an order, you will receive an order confirmation email. This email does not signify our acceptance of your order, nor does it constitute confirmation of our offer to sell; we are simply confirming that we received your order. We reserve the right at any time after receipt of your order to accept or decline your order for any reason. All purchases are subject to our Shipping Policy, which is incorporated into these Terms by reference. Please review our Shipping Policy for detailed information on shipping times, costs, and international delivery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">
              5. Returns and Exchanges
            </h2>
            <p>
              Our Returns &amp; Exchanges Policy governs all returns and exchanges of products purchased from WearHaus. Please refer to our dedicated Returns &amp; Exchanges Policy page for detailed information on eligibility, procedures, and timelines for returns and exchanges.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">
              6. User Conduct
            </h2>
            <p>
              You agree not to use the Site for any unlawful purpose or any purpose prohibited by these Terms. You agree not to use the Site in any manner that could damage, disable, overburden, or impair the Site or interfere with any other party&apos;s use and enjoyment of the Site. Prohibited activities include, but are not limited to, attempting to gain unauthorized access to the Site, systems, or networks.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">
              7. Intellectual Property
            </h2>
            <p>
              All content and materials available on the WearHaus Site, including text, graphics, logos, images, audio clips, and software, are the property of WearHaus or its content suppliers and are protected by international copyright, trademark, and other intellectual property laws. You may not use, reproduce, modify, distribute, or display any content from the Site without our express written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">
              8. Limitation of Liability
            </h2>
            <p>
              WearHaus shall not be liable for any indirect, incidental, punitive, special, or consequential damages (including, without limitation, damages for loss of profits, goodwill, use, data, or other intangible losses) arising out of or related to your use of, or inability to use, the Site or our products. Our total liability to you for any damages shall not exceed the amount paid by you, if any, for accessing or using the Site or for any products purchased through the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">
              9. Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Country/State - e.g., the State of Delaware, USA], without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in [Your City/County - e.g., Wilmington, Delaware], and you consent to the personal jurisdiction of such courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">
              10. Changes to Terms
            </h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">
              11. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at <a href="mailto:support@wearhaus.com" className="text-darkColor hover:underline">support@wearhaus.com</a> or visit our Contact Us page.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default TermsPage;
