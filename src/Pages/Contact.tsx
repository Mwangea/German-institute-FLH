import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-light text-gray-900 mb-3">Contact Us</h1>
          <div className="w-16 h-0.5 bg-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-lg mx-auto">
            We're here to help you with any questions about our programs, admissions, or campus life.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Information */}
          <div className="md:w-1/3 space-y-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary-500 mt-0.5 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-800">Email</h3>
                  <a 
                    href="mailto:admissions@academia.edu" 
                    className="text-primary-600 hover:underline text-sm"
                  >
                    admissions@academia.edu
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary-500 mt-0.5 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-800">Phone</h3>
                  <a 
                    href="tel:5551234567" 
                    className="text-primary-600 hover:underline text-sm"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-500 mt-0.5 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-800">Address</h3>
                  <p className="text-gray-600 text-sm">
                    123 University Avenue<br />
                    College Town, CT 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary-500 mt-0.5 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-800">Hours</h3>
                  <p className="text-gray-600 text-sm">
                    Monday - Friday<br />
                    8:30am - 5:00pm
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <h3 className="font-medium text-gray-800 mb-3">Admissions Office</h3>
              <p className="text-gray-600 text-sm">
                For specific questions about applications, requirements, or deadlines, 
                please contact our admissions team directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-2/3">
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-700 mb-1">Name*</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 text-sm border-b border-gray-300 focus:border-primary-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-700 mb-1">Email*</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 text-sm border-b border-gray-300 focus:border-primary-500 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-gray-700 mb-1">Subject*</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 text-sm border-b border-gray-300 focus:border-primary-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="department" className="block text-sm text-gray-700 mb-1">Department</label>
                <select
                  id="department"
                  className="w-full px-3 py-2 text-sm border-b border-gray-300 focus:border-primary-500 focus:outline-none bg-transparent"
                >
                  <option value="">Select department</option>
                  <option value="admissions">Admissions</option>
                  <option value="academics">Academic Affairs</option>
                  <option value="financial">Financial Aid</option>
                  <option value="registrar">Registrar</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-700 mb-1">Message*</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 text-sm border-b border-gray-300 focus:border-primary-500 focus:outline-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center w-full sm:w-auto px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium rounded-sm transition-colors"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;