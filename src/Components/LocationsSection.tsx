import { X, MapPin, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type BalloonColor = 'red' | 'blue' | 'yellow' | 'green' | 'pink';

interface BalloonProps {
  color: BalloonColor;
  delay: number;
}

interface Balloon {
  id: number;
  color: BalloonColor;
  delay: number;
}

// Balloon component
const Balloon = ({ color, delay }: BalloonProps) => {
  const colors: Record<BalloonColor, string> = {
    red: "bg-red-400",
    blue: "bg-blue-400",
    yellow: "bg-yellow-400",
    green: "bg-green-400",
    pink: "bg-pink-400"
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ 
        y: -150,
        opacity: [0, 1, 0],
        x: [0, Math.random() * 40 - 20]
      }}
      transition={{
        delay: delay,
        duration: 8,
        repeat: Infinity,
        repeatDelay: Math.random() * 5,
        ease: "linear"
      }}
      className={`absolute ${colors[color]} w-8 h-10 rounded-full`}
      style={{
        left: `${10 + Math.random() * 80}%`,
        bottom: 0
      }}
    >
      <div className="absolute bottom-0 left-1/2 w-0.5 h-6 bg-gray-300 transform -translate-x-1/2"></div>
    </motion.div>
  );
};

export const ExpandingBanner = () => {
  const [isOpen, setIsOpen] = useState(true);
  const locations = ["Kajiado County", "Nakuru", "Kisumu", "Kitale", "Kericho"];
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  // Generate random balloons
  useEffect(() => {
    const colors: BalloonColor[] = ['red', 'blue', 'yellow', 'green', 'pink'];
    const newBalloons = Array(8).fill(0).map((_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 3
    }));
    setBalloons(newBalloons);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 20 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
        >
          <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 shadow-xl rounded-xl overflow-hidden">
            {/* Balloons */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              {balloons.map((balloon) => (
                <Balloon key={balloon.id} color={balloon.color} delay={balloon.delay} />
              ))}
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-10 p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close banner"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Banner Content */}
            <div className="relative z-0 p-5">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Exciting News! We're Expanding
                  </h3>
                  <p className="text-white/90 text-sm mb-3">
                    New branches coming soon to these locations:
                  </p>
                  
                  {/* Location Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {locations.map((location, index) => (
                      <motion.span
                        key={index}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="inline-flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium"
                      >
                        <MapPin className="w-4 h-4 mr-1.5" />
                        {location}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative z-10 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-primary-600 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors"
                  >
                    Get Notified When We Launch
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white/5"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/5"></div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};