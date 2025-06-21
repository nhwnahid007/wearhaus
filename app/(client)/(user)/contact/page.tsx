import { Label } from '@radix-ui/react-label';
import { Input } from '../../../../components/ui/input';
import { Textarea } from '../../../../components/ui/textarea';

const ContactPage = () => {
  return (
    <div className="bg-white py-12 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-darkColor mb-4">
            Get in Touch with WearHaus
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;d love to hear from you! Whether you have a question about
            our products, an inquiry about your order, or just want to say
            hello, our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Information
            </h2>
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-darkColor"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a4 4 0 115.656-5.656 4 4 0 01-5.656 5.656z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.172 7.071l-1.414-1.414a2 2 0 00-2.828 0L7.071 10.101M13.414 13.414L9.172 17.657"
                ></path>
              </svg>
              <div>
                <p className="font-semibold text-gray-900">Our Location</p>
                <p className="text-gray-700">New Orlean, USA</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-darkColor"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <p className="text-gray-700">+12 958 890 800</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-darkColor"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-gray-700">support@wearhaus.com</p>
              </div>
            </div>
            {/* Optional: Add business hours */}
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-darkColor"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <div>
                <p className="font-semibold text-gray-900">Business Hours</p>
                <p className="text-gray-700">Mon - Sat: 10AM - 7 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-5">
              <div className="space-y-1">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkColor focus:border-darkColor transition-all"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Your Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your-email@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkColor focus:border-darkColor transition-all"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="subject">Subject (Optional)</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Inquiry about an order"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-darkColor focus:border-darkColor transition-all"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md resize-y focus:ring-darkColor focus:border-darkColor transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-darkColor text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-darkColor/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
