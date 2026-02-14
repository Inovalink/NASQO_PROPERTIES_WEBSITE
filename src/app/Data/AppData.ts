import { 
    FunnelPlus, 
    CctvIcon, 
    FenceIcon, 
    WifiIcon, 
    BusFrontIcon, 
    CableIcon, 
    ShowerHeadIcon,
    FootprintsIcon,
    WavesIcon
    
} from "lucide-react"
import { Users } from "lucide-react"
import { ShieldCheck } from "lucide-react"
import { BadgeCent } from "lucide-react"

export const coreValuesData = [
    {
        id: "1", 
        title: "Long lasting service",
        subtext: "Quality developments built for durability and long-term value.",
        icon: FunnelPlus
    },
    {
        id: "2", 
        title: "Client-Focused Service",
        subtext: "Quality developments built for durability and long-term value.",
        icon: Users
    },
    {
        id: "3", 
        title: "Safe Haven Living",
        subtext: "Quality developments built for durability and long-term value.",
        icon: ShieldCheck
    },
    {
        id: "4", 
        title: "Transparent Transactions",
        subtext: "Quality developments built for durability and long-term value.",
        icon: BadgeCent
    },
]





// Properties Data 
export const propertiesData = [
    {
        id: "1",
        title: "Modern luxe villa",
        location: "Palm Springs, CA",
        description: "Experience luxury living at modern luxe villa, located at 20 s aurora ave, miami. priced at $1,650,500, this 560 ft² smart home offers 4 bedrooms, 3 bathrooms, and spacious living areas. enjoy energy efficiency, natural light, security systems, outdoor spaces, and 2 bar areas—perfect for 8+ guests. Built in 2025",
        imageSrc: "/HomeAssets/Img10.jpg",
        amenities: [
            {
                id: "1",
                name: "Security Gate Post",
                icon: CctvIcon
            },
            {
                id: "2",
                name: "Perimeter fence wall",
                icon: FenceIcon
            },
            {
                id: "3",
                name: "Fast and Reliable internet",
                icon: WifiIcon
            },
            {
                id: "4",
                name: "Asphalt Roads",
                icon: BusFrontIcon
            },
            {
                id: "5",
                name: "Good electricity",
                icon: CableIcon
            },
          
            {
                id: "6",
                name: "Good water supply",
                icon: ShowerHeadIcon
            },
            {
                id: "7",
                name: "Ultramodern washrooms",
                icon: CctvIcon
            },
            {
                id: "8",
                name: "Sidewalks",
                icon: FootprintsIcon
            },
            {
                id: "9",
                name: "Swimming Pool",
                icon: WavesIcon
            },
        ],

        href: "/properties",
        price: "$1,650,500"
    },
    {
        id: "1",
        title: "Rocky Mountains",
        location: "Palm Springs, CA",
        description: "Experience luxury living at modern luxe villa, located at 20 s aurora ave, miami. priced at $1,650,500, this 560 ft² smart home offers 4 bedrooms, 3 bathrooms, and spacious living areas. enjoy energy efficiency, natural light, security systems, outdoor spaces, and 2 bar areas—perfect for 8+ guests. Built in 2025",
        imageSrc: "/HomeAssets/Img11.jpg",
        amenities: [
            {
                id: "1",
                name: "Security Gate Post",
                icon: CctvIcon
            },
            {
                id: "2",
                name: "Perimeter fence wall",
                icon: FenceIcon
            },
            {
                id: "3",
                name: "Fast and Reliable internet",
                icon: WifiIcon
            },
            {
                id: "4",
                name: "Asphalt Roads",
                icon: BusFrontIcon
            },
            {
                id: "5",
                name: "Good electricity",
                icon: CableIcon
            },
          
            {
                id: "6",
                name: "Good water supply",
                icon: ShowerHeadIcon
            },
            {
                id: "7",
                name: "Ultramodern washrooms",
                icon: CctvIcon
            },
           
        ],

        href: "/properties",
        price: "$1,650,500"
    }
]










// Testimonial Data

export const testimonialData = [
    {
        id: "1",
        description: "After months of searching across different websites, I finally found my ideal home in no time using this platform. The listings were detailed, and the photos accurately reflected each property. Everything was clearly presented, which made comparing options easy and stress-free. Scheduling viewings and making inquiries felt smooth and straightforward. Customer service was top-notch, answering all my questions promptly and professionally. I will definitely use this platform again in the future and highly recommend it to others!",
        name: "John Doe",
        title: "Property Owner",
        icon: "/Main_Assets/Tag_outline_main.svg",
        imageSrc: "/HomeAssets/Img18.jpg"
    },
    {
        id: "2",
        description: "I discovered the perfect property much faster than I expected! The platform provided clear descriptions, high-quality images, and all the essential details I needed to make a confident decision. The entire experience was smooth and hassle-free, and the support team was incredibly responsive whenever I needed assistance. I would absolutely recommend this service to anyone searching for their next home and will gladly return in the future.",
        name: "Caleb Mensah",
        title: "MD, Rome Estate",
        icon: "/Main_Assets/Tag_outline_main.svg",
        imageSrc: "/HomeAssets/Img6.jpg"
    },
    {
        id: "3",
        description: "I had an amazing experience using this platform to find my new home! The property listings were informative and well-organized, making it easy to compare options and narrow down my choices. The photos truly reflected what was available, and the entire process felt straightforward and stress-free. Whenever I had questions, the customer support team responded promptly and professionally. I wouldn’t hesitate to use this service again and highly recommend it to anyone looking for a reliable real estate solution.",
        name: "Caleb Mensah",
        title: "MD, Rome Estate",
        icon: "/Main_Assets/Tag_outline_main.svg",
        imageSrc: "/HomeAssets/Img11.jpg"
    },
]

// FAQ Data
export const faqData = [
  {
    id: "1",
    number: "01",
    question: "What is your key expertise?",
    answer:
      "We specialize in complete product development: from the very first ideation stages, through design, prototyping and testing to development and launch. Our development team can deliver both web and mobile products using technologies like Angular, PWA, PHP, Laravel, Flutter and native technologies for applications.",
  },
  {
    id: "2",
    number: "02",
    question: "Which project's details do you need to provide an estimation?",
    answer:
      "To provide an accurate estimation, we typically need project scope, timelines, technical requirements, design assets, and any specific integrations or third-party services. Share your brief or schedule a call and we'll outline what we need.",
  },
  {
    id: "3",
    number: "03",
    question: "How do you ensure the delivery of agreed-upon requirements?",
    answer:
      "We follow a structured process with regular milestones, reviews, and client sign-offs. Our team uses agile methodologies, detailed documentation, and transparent communication to ensure we meet and exceed the agreed requirements.",
  },
  {
    id: "4",
    number: "04",
    question: "How quick can you start the project?",
    answer:
      "Depending on team availability and project complexity, we can typically start within 1–2 weeks after kickoff. For urgent projects, we offer expedited onboarding—contact us to discuss your timeline.",
  },
  {
    id: "5",
    number: "05",
    question: "What are your pricing models?",
    answer:
      "We offer flexible pricing: fixed-price for well-defined scopes, time-and-materials for evolving projects, and retainer arrangements for ongoing work. We'll recommend the best model based on your project needs.",
  },
]


