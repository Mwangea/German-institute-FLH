import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    question: "What are the admission requirements?",
    answer: "Admission requirements vary by program. Generally, you'll need a high school diploma or equivalent, English proficiency test scores (IELTS/TOEFL), and a successful admission interview. Some advanced programs may require prior work experience or specific academic backgrounds.",
    category: "Admissions"
  },
  {
    question: "Are there scholarship opportunities available?",
    answer: "Yes, we offer various scholarships based on academic merit, financial need, and specific talents. We also provide early-bird discounts and special grants for international students. Our financial aid office can help you explore all available options.",
    category: "Financial"
  },
  {
    question: "How long are the programs?",
    answer: "Program duration varies: Certificate programs typically run 6-12 months, Diploma programs 1-2 years, and Language courses 3-12 months depending on the level and intensity. We offer both full-time and part-time study options to accommodate different schedules.",
    category: "Programs"
  },
  {
    question: "Do you offer internship placements?",
    answer: "Yes, all our hospitality management programs include mandatory internship periods with our partner hotels, restaurants, and tourism organizations worldwide. Our career services team assists in finding placements that match your career goals.",
    category: "Career"
  },
  {
    question: "Can I work while studying?",
    answer: "Yes, many of our students work part-time while studying. We offer flexible class schedules and online learning options to accommodate working professionals. However, full-time programs may have specific attendance requirements.",
    category: "Student Life"
  },
  {
    question: "What career support services do you provide?",
    answer: "We offer comprehensive career support including resume workshops, interview preparation, job fairs, industry networking events, and lifetime access to our alumni network and job portal. Our career counselors provide personalized guidance throughout your journey.",
    category: "Career"
  },
  {
    question: "Are the programs internationally recognized?",
    answer: "Yes, our programs are accredited by leading international hospitality education bodies. Our qualifications are recognized by major hotel chains, restaurants, and tourism organizations worldwide.",
    category: "Programs"
  },
  
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...new Set(faqs.map(faq => faq.category))];
  const filteredFAQs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <section className="py-24 bg-blue-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          {/* <h2 className="text-4xl font-bold text-black-900 mb-6">
            Frequently Asked Questions
          </h2>
        <div className="w-24 h-1 bg-button-50 mx-auto mb-6"></div> */}
        <div className="inline-block text-center py-6">
  <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
  <div className="h-1 bg-button-50 w-full"></div>
</div>


          <p className="text-lg text-black-700">
            Find answers to common questions about our programs, admissions process, and student life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-primary-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-primary-500" />
                    ) : (
                      <Plus className="w-5 h-5 text-primary-500" />
                    )}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="p-6 pt-0 text-gray-700">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-black-700 mb-8">
              Can't find what you're looking for? We're here to help!
            </p>
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-button-50 rounded-full hover:bg-orange-600 transition-colors duration-300">
              Contact Our Support Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;