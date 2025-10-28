import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Contact form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-primary-dark text-text-light">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-accent-blue/20 rounded-full blur-2xl animate-bounce-slow"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent-blue/30 rounded-full blur-2xl animate-bounce-slow" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-accent-blue drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
              CONTACT US
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We'd Love to Hear From You – Get in Touch with Tasty Burger
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent-blue">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Have questions about your order, need help with delivery, or want to share feedback?
                We're here to help! Reach out to us through any of the channels below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl text-accent-blue">📍</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Our Location</h3>
                  <p className="text-gray-300">
                    123 Food Street<br />
                    Flavor City, FC 12345<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl text-accent-blue">📞</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">
                    Customer Support: (555) 123-TASTY<br />
                    Business Inquiries: (555) 123-BURG
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl text-accent-blue">✉️</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-gray-300">
                    General: hello@tastyburger.com<br />
                    Support: support@tastyburger.com<br />
                    Partnerships: partners@tastyburger.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl text-accent-blue">🕒</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Business Hours</h3>
                  <p className="text-gray-300">
                    Monday - Friday: 9:00 AM - 10:00 PM<br />
                    Saturday - Sunday: 10:00 AM - 11:00 PM<br />
                    24/7 Online Ordering Available
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl text-accent-blue hover:text-accent-hover transition-colors">📘</a>
                <a href="#" className="text-2xl text-accent-blue hover:text-accent-hover transition-colors">🐦</a>
                <a href="#" className="text-2xl text-accent-blue hover:text-accent-hover transition-colors">📷</a>
                <a href="#" className="text-2xl text-accent-blue hover:text-accent-hover transition-colors">🎥</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondory-dark p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-700/50">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent-blue">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-primary-dark border border-gray-700 focus:ring-accent-blue focus:border-accent-blue outline-none text-text-light placeholder-gray-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-primary-dark border border-gray-700 focus:ring-accent-blue focus:border-accent-blue outline-none text-text-light placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-primary-dark border border-gray-700 focus:ring-accent-blue focus:border-accent-blue outline-none text-text-light"
                >
                  <option value="">Select a subject</option>
                  <option value="order">Order Inquiry</option>
                  <option value="delivery">Delivery Issue</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnership">Partnership</option>
                  <option value="technical">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full p-3 rounded-lg bg-primary-dark border border-gray-700 focus:ring-accent-blue focus:border-accent-blue outline-none text-text-light placeholder-gray-500 resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 text-lg font-semibold rounded-full text-center transition duration-300
                          bg-accent-blue text-primary-dark shadow-lg shadow-blue-500/40
                          hover:bg-accent-hover hover:shadow-blue-600/60 transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-accent-blue">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondory-dark p-6 rounded-xl shadow-lg border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-3">How long does delivery take?</h3>
              <p className="text-gray-400">Most orders are delivered within 30-45 minutes. You can track your order in real-time through our app.</p>
            </div>
            <div className="bg-secondory-dark p-6 rounded-xl shadow-lg border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-3">What if my food arrives cold?</h3>
              <p className="text-gray-400">Contact our support team immediately. We'll send a replacement or refund your order right away.</p>
            </div>
            <div className="bg-secondory-dark p-6 rounded-xl shadow-lg border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-3">Can I modify my order?</h3>
              <p className="text-gray-400">Orders can be modified within 5 minutes of placement. Contact support for assistance.</p>
            </div>
            <div className="bg-secondory-dark p-6 rounded-xl shadow-lg border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-3">Do you offer refunds?</h3>
              <p className="text-gray-400">Yes, we offer full refunds for unsatisfactory orders. Our customer satisfaction guarantee covers all issues.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
