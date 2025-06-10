interface CarouselItem {
  image: string;
  title: string;
  subtitle: string;
  altText?: string;
}

export const carouselData: CarouselItem[] = [
  {
    image: "/image8.jpeg",
    title: "Our Proud Students",
    subtitle: "Meet our diverse student community from the institute, united by ambition and driven by excellence.",
    altText: "Group of diverse students posing together"
  },
  {
    image: "/image6.jpeg",
    title: "Future Chef in Training",
    subtitle: "A proud culinary arts student posing confidently in uniform, embodying professionalism and passion for the kitchen.",
    altText: "Culinary arts student in professional uniform"
  },  
  {
    image: "/image4.jpeg",
    title: "Hospitality Excellence",
    subtitle: "Showcasing a vibrant hospitality meal presentation that reflects our commitment to industry-ready skills.",
    altText: "Professional meal presentation in hospitality setting"
  },
  {
    image: "/image3.jpeg",
    title: "Learning Environment",
    subtitle: "Students actively engaged in a classroom session, fostering knowledge through dynamic and inclusive education.",
    altText: "Students participating in classroom discussion"
  },
];
