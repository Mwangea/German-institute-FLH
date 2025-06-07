import SectionTitle from "./SectionTitle";

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
                 Meet the Founder
                </h2>
                <blockquote className="text-base italic border-l-4 border-primary-500 pl-4 py-2 text-gray-700">
                  "Language skills can open doors to new countries, cultures, careers, and a future you never thought possible."
                </blockquote>
                <div className="space-y-4 text-gray-700">
                  <p className="">
                    Welcome! I'm Soila Lasoi, Founder and CEO of the International Institute of Foreign Languages and Hospitality Management.
                  </p>
                  <p className="">
                    With a background in International Studies and hands on professional experience in both Kenya and Germany, I established this institute to bridge the gap between local talent and international opportunity.
                  </p>
                  <p className="">
                    While currently working in Germany, I've had the privilege of working closely with the German government, helping young refugees integrate into society. Many of these young people arrived after surviving extremely difficult journeys across the Sahara Desert and the Mediterranean Sea. I've supported them in learning the language, applying for education and employment, and finding their place in a new world.
                  </p>
                  <p className="">
                    That experience inspired the mission behind this institute: to help African youth starting here in Kenya access the right tools, training, and guidance to pursue safe, legal, and meaningful pathways abroad.
                  </p>
                  <p className="text-lg font-semibold">
                    We focus on three core areas:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Language Training</li>
                    <li>Hospitality Education</li>
                    <li>Nursing Career Preparation</li>
                  </ul>
                  <p className="">
                    These fields offer powerful, high demand pathways into global job markets especially in countries like Germany, Austria, and Switzerland.
                  </p>
                  <p className="">
                    At the heart of our work is a belief that language skills can open doors. Whether you're preparing to work abroad, study internationally, or begin your journey in the hospitality or healthcare industries, we're here to walk that journey with you.
                  </p>
                  <p className="text-lg font-semibold">
                    Together, we're not just building careers we're building futures.
                  </p>
                </div>
                <div className="pt-4">
                  <p className="text-lg font-semibold text-gray-900">Soila Lasoi</p>
                  <p className="text-gray-600">Founder & CEO</p>
                  <p className="text-gray-600">International Institute of Foreign Languages and Hospitality Management</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Faculty Section */}
        <section className="py-16 bg-gray-50">
          <div className="container text-center  mx-auto px-4">
            <SectionTitle title="Our Expert Faculty" />

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