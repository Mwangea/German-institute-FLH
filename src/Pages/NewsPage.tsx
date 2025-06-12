import  { useState } from "react";
import { Calendar, Clock, MapPin, ChevronRight, Play } from "lucide-react";

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const newsItems = [
    {
      id: 1,
      title: "June 2025 Intake Now Open for Applications",
      excerpt:
        "We're now accepting applications for our June 2025 intake across all hospitality and language programs.",
      date: "2025-06-01",
      category: "admissions",
      image:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      featured: true,
    },
    // Other news items removed - coming soon
  ];

  const filteredNews =
    activeCategory === "all"
      ? newsItems
      : newsItems.filter((item) => item.category === activeCategory);

  const featuredNews = newsItems.find((item) => item.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative z-10 py-24">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-500 opacity-90"></div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-4 md:mb-6">
              School News & Updates
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
              Stay informed about the latest happenings in our hospitality
              education community
            </p>
            <div className=" justify-between gap-4 w-full max-w-md mx-auto">
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Featured News */}
        {featuredNews && (
          <div className="mb-16 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  className="w-full h-full object-cover"
                  src={featuredNews.image}
                  alt={featuredNews.title}
                />
              </div>
              <div className="p-8 md:w-1/2">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-accent-500 rounded-full mb-4">
                  Featured
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredNews.title}
                </h2>
                <p className="text-gray-700 mb-6">{featuredNews.excerpt}</p>
                <div className="flex items-center text-gray-500 mb-6">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="mr-4">
                    {new Date(featuredNews.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <button className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition">
                  Read full story <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* YouTube Video Section */}
        <div className="mb-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3 relative">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full min-h-[400px]"
                  src="https://www.youtube.com/embed/5YNy8lVx_o0?autoplay=1&mute=1&rel=0&modestbranding=1"
                  title="Staff Interviews - Our School Community"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="p-8 md:w-1/3">
              <div className="flex items-center mb-4">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-red-600 rounded-full mr-3">
                  Video
                </span>
                <span className="text-sm text-gray-500">
                  Published: May 2025
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meet Our Dedicated Staff
              </h2>
              <p className="text-gray-700 mb-6">
                Hear directly from our faculty and staff about what makes our
                school special. In these interviews, they share their passion
                for education and the unique learning environment we've created
                together.
              </p>
              <div className="flex items-center text-gray-500 mb-6">
                <Clock className="w-5 h-5 mr-2" />
                <span className="mr-4">3:45 min</span>
                <MapPin className="w-5 h-5 mr-2" />
                <span>Main Campus</span>
              </div>
              <button className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition">
                <Play className="w-5 h-5 mr-2" />
                Watch Full Interviews
              </button>
            </div>
          </div>
        </div>

        {/* News Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full ${
              activeCategory === "all"
                ? "bg-primary-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All News
          </button>
          <button
            onClick={() => setActiveCategory("admissions")}
            className={`px-4 py-2 rounded-full ${
              activeCategory === "admissions"
                ? "bg-primary-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Admissions
          </button>
          <button
            onClick={() => setActiveCategory("programs")}
            className={`px-4 py-2 rounded-full ${
              activeCategory === "programs"
                ? "bg-primary-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Programs
          </button>
          <button
            onClick={() => setActiveCategory("events")}
            className={`px-4 py-2 rounded-full ${
              activeCategory === "events"
                ? "bg-primary-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Events
          </button>
          <button
            onClick={() => setActiveCategory("achievements")}
            className={`px-4 py-2 rounded-full ${
              activeCategory === "achievements"
                ? "bg-primary-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Achievements
          </button>
          <button
            onClick={() => setActiveCategory("partnerships")}
            className={`px-4 py-2 rounded-full ${
              activeCategory === "partnerships"
                ? "bg-primary-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Partnerships
          </button>
        </div>

        {/* Empty News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredNews.map((news) => (
            <div key={news.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-primary-600 rounded-full mb-4">
                  {news.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{news.title}</h3>
                <p className="text-gray-600 mb-4">{news.excerpt}</p>
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>
                    {new Date(news.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Events Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Upcoming Events
          </h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              Events Coming Soon
            </h3>
            <p className="text-gray-500">
              We're planning some great events for our community. Details will be posted here when available.
            </p>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-24 bg-primary-600 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news and updates
            about our programs and events.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
            <button className="bg-primary-500 hover:bg-button-50 text-white font-semibold px-6 py-3 rounded-lg transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;