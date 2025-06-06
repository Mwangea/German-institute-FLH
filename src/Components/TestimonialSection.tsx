import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sempeyo",
    role: "Nurse",
    image: "user2.png",
    content: " from Narok north doing her Nursing Ausbildung in Berlin came through our international institute of foreign languages and hospitality management. Sempeyo indicated that, if you want to be a nurse in Germany, you must atleast have attained a B1 Level",
    rating: 5
  },
  {
    id: 2,
    name: "Saitoti",
    role: "Dairy Farmer",
    image: "kasaine.jpeg",
    content: "from Narok South working and doing Ausbildung in Dairy farm in Lilienthal Germany Also came through our international institute of foreign languages and hospitality management. Saitoti insist that learning the German language will help you connect and find your way to Germany",
    rating: 5
  },
  {
    id: 3,
    name: "Hilda",
    role: "Social Work",
    image: "user3.png",
    content: "Hilda, a Social Work graduate from the University of Nairobi, came to Germany through Flensburg University. She completed the Anerkennung process, gaining official recognition of her Kenyan qualifications. Now fully certified to work in Germany, she stresses the importance of learning German at least B1 or B2 for a smoother transition and integration",
    rating: 5
  },
  {
    id: 4,
    name: "Kasaine",
    role: "Business Man",
    image: "user4.png",
    content: "from Kilgoris, Now in Flensburg University Germany also through our international institute of foreign languages and hospitality management",
    rating: 5
  },
  {
    id: 5,
    name: "Damaris",
    role: "Luxury Resort Manager",
    image: "user5.png",
    content: "DAMARIS, Narok South.In Flensburg University International institute of foreign languages and hospitality management help her secure her University.",
    rating: 5
  },
  {
    id: 6,
    name: "Zablon Ledama kimong'o.",
    role: "Professional Chef",
    image: "zablon.jpeg",
    content: "From Transmara a chef by professional currently in Germany after learning from International institute of foreign languages and hospitality management.",
    rating: 5
  }
];

const TestimonialSection: React.FC = () => (
  <section className="py-24 bg-gradient-to-b from-white to-gray-50">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        {/* <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Success Stories from Our Alumni
        </h2>
        <div className="w-24 h-1 bg-button-50 mx-auto mb-6"></div> */}
        <div className="inline-block text-center py-6">
  <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories from Our Alumni</h2>
  <div className="h-1 bg-button-50 w-full"></div>
</div>


        <p className="text-lg text-gray-700">
          Discover how our programs have helped shape successful careers in the hospitality industry worldwide.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4">
                  <Quote className="w-12 h-12 text-primary-100" />
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover" />
                    <div className="absolute -bottom-2 -right-2 bg-primary-500 rounded-full p-1">
                      <Quote className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-gray-700 mb-8">
          Join our community of successful graduates and start your journey towards a rewarding career in hospitality.
        </p>
        <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-button-50 rounded-full hover:bg-orange-600 transition-colors duration-300">
          Begin Your Success Story
        </button>
      </div>
    </div>
  </section>
);

export default TestimonialSection;