function Faculty() {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* CEO Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/ceo.jpeg"
                  alt="Soila Lasoi - Founder & CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  Welcome to the International Institute of Foreign Languages and Hospitality Management
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    I'm Soila Lasoi, the Founder and CEO of this institution, driven by a passion for education, cultural exchange, and professional excellence. With a background in international studies and hands-on experience both in Kenya and abroad, especially in Germany, I established this institute with the vision of opening global doors for our students.
                  </p>
                  <p className="text-lg">
                    Our goal is to equip learners with the language skills and hospitality knowledge they need to thrive in a competitive, interconnected world. Whether you're preparing to work abroad, study internationally, or build a career in the hospitality industry, we are here to support your journey every step of the way.
                  </p>
                  <p className="text-lg">
                    Thank you for choosing to grow with us.
                  </p>
                </div>
                <div className="pt-4">
                  <p className="text-lg font-semibold text-gray-900">Warm regards,</p>
                  <p className="text-lg text-gray-900">Soila Lasoi</p>
                  <p className="text-gray-600">Founder & CEO</p>
                  <p className="text-gray-600">International Institute of Foreign Languages and Hospitality Management</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Faculty Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Expert Faculty
            </h2>
            <div className="w-24 h-1 bg-button-50 mx-auto mb-6"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Institute Administrator */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                <div className="aspect-[4/3] relative">
                  <img
                    src="admin.jpeg"
                    alt="Institute Administrator"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Kennedy Sankale.</h3>
                  <p className="text-primary-600 mb-2">Institute Administrator</p>
                  <div className="space-y-2 text-gray-600">
                    <p>Supporting our students in their educational journey</p>
                  </div>
                </div>
              </div>
  
              {/* Katherine Müller */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                <div className="aspect-[4/3] relative">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/kathe.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Katherine Müller</h3>
                  <p className="text-primary-600 mb-2">Career Consultant</p>
                  <div className="space-y-2 text-gray-600">
                    <p>Bachelor's in Social sciences and IT</p>
                    <p>Helping students with CV preparation and consulting on careers in Germany 🇩🇪</p>
                  </div>
                </div>
              </div>
  
              {/* Sennah Chepkemboi */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                <div className="aspect-[4/3] relative">
                  <img
                    src="senna.jpeg"
                    alt="Sennah Chepkemboi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sennah Chepkemboi</h3>
                  <p className="text-primary-600 mb-2">German Language Teacher</p>
                  <div className="space-y-2 text-gray-600">
                    <p>Bachelor's Degree in education</p>
                    <p>Specializing in German Language instruction</p>
                  </div>
                </div>
              </div>
  
              {/* Sarah Jebet Janssen */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                <div className="aspect-[4/3] relative">
                  <img
                    src="/sarah.jpeg"
                    alt="Sarah Jebet Janssen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Jebet Janssen</h3>
                  <p className="text-primary-600 mb-2">German Language Teacher</p>
                  <div className="space-y-2 text-gray-600">
                    <p>Enthusiastic online German teacher with background in Hotel and Hospitality Management</p>
                    <p>Specializes in helping beginners, hospitality professionals, and international learners</p>
                    <p>Over 5 years experience in international service environments</p>
                    <p>Focuses on practical, supportive, and fun lessons for work and everyday situations</p>
                  </div>
                </div>
              </div>
  
              {/* Alex Sikawa */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                <div className="aspect-[4/3] relative">
                  <img
                    src="/alex.jpeg"
                    alt="Alex Sikawa"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Alex Sikawa</h3>
                  <p className="text-primary-600 mb-2">Head of Media and Marketing</p>
                  <div className="space-y-2 text-gray-600">
                    <p>Expert in digital marketing strategies and brand development</p>
                    <p>Specializes in creating engaging content and social media campaigns</p>
                    <p>Helps promote the institute's programs and student success stories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Faculty;