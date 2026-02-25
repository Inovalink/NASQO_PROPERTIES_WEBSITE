import { 
    FunnelPlus, 
    CctvIcon, 
    FenceIcon, 
    WifiIcon, 
    BusFrontIcon, 
    CableIcon, 
    ShowerHeadIcon,
    FootprintsIcon,
    WavesIcon,
    AmpersandIcon,
    UtensilsCrossed,
    Dumbbell,
    Store,
    Scissors,
    Building2,
    Baby
} from "lucide-react"
import { Users } from "lucide-react"
import { ShieldCheck } from "lucide-react"
import { BadgeCent } from "lucide-react"
import type { PropertiesPageItem } from "../Types/types"

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

        href: "/Properties/grace-city-prime-lands",
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

        href: "/Properties/rocky-mountains",
        price: "$1,650,500"
    }
]






export const propertiesPageData: PropertiesPageItem[] = [
    {
        id: "1",
        slug: "rocky-mountains",
        heroTitle: 	"Rocky Mountains",
        heroImages: [
            "/PropertiesAssets/Img11.jpeg",
            "/PropertiesAssets/Img22.jpeg",
            "/PropertiesAssets/Img33.jpeg",
            "/PropertiesAssets/Img44.jpeg",
            "/PropertiesAssets/Img55.jpeg",
            "/PropertiesAssets/Img66.jpeg",
        ],
        ctoHref: "/Contact",
        SectionTag: "Properties" ,  
        priceRange: "$10,000 - $100,000",
        description: "Rocky Mountains is where life offers you the opportunity to blend nature seamlessly with the conveniences of modern living. It is a carefully planned 500-acre eco-friendly community located in the lush, serene enclave of Aburi, in the Eastern Region. This development offers fully serviced plots, designed to provide a sustainable and organic lifestyle, freeing you from the burdens of infrastructure development. Grace City Prime Land is more than just a residential area; it's a model community birthed from the high demand of our discerning clientele. Responding to countless requests, RKE has stepped in to create a space where essential infrastructure- including electricity, water, asphalt roads, sidewalks, a green park, efficient drainage, a secure gate post, parameter fence wall and ambient street lights – is already in place. This means you can focus on building your dream home and embracing a holistic way of life from day one, without the stress of coordinating these essential amenities yourself. Grace City Prime Land offers a unique opportunity to own fully serviced plots with convenient and affordable payment terms. The community is within reasonable proximity to major landmarks and amenities, and just a 40-minute drive from the airport, this is your chance to move into a community that takes away the burden of infrastructure worries. Embrace the ease of holistic and organic living at Grace City Prime Land, where your dream lifestyle becomes a reality.",
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

        href: "/Properties/rocky-mountains",
        price: "$1,650,500",
        locationDetails: {
            sectionTitle: "Location Details",
            locationName: "East Legon-Accra",
            mapEmbedUrl: "https://www.google.com/maps?q=East+Legon,Accra,Ghana&z=15&output=embed",
            mapTitle: "Map - East Legon, Accra",
            brochureButtonText: "Download Brochure",
            brochureHref: "#",
        }
    },
    {
        id: "2",
        slug: "rocky-mountains-estate",
        title: "Rocky Mountains Estate",
        heroTitle: "Rocky Mountains Estate",
        location: "Palm Springs, CA",
        description: "Rocky Mountains is where life offers you the opportunity to blend nature seamlessly with the conveniences of modern living. It is a carefully planned 500-acre eco-friendly community located in the lush, serene enclave of Aburi, in the Eastern Region. This development offers fully serviced plots, designed to provide a sustainable and organic lifestyle, freeing you from the burdens of infrastructure development. Grace City Prime Land is more than just a residential area; it's a model community birthed from the high demand of our discerning clientele. Responding to countless requests, RKE has stepped in to create a space where essential infrastructure- including electricity, water, asphalt roads, sidewalks, a green park, efficient drainage, a secure gate post, parameter fence wall and ambient street lights – is already in place. This means you can focus on building your dream home and embracing a holistic way of life from day one, without the stress of coordinating these essential amenities yourself. Grace City Prime Land offers a unique opportunity to own fully serviced plots with convenient and affordable payment terms. The community is within reasonable proximity to major landmarks and amenities, and just a 40-minute drive from the airport, this is your chance to move into a community that takes away the burden of infrastructure worries. Embrace the ease of holistic and organic living at Grace City Prime Land, where your dream lifestyle becomes a reality.",
        imageSrc: "/HomeAssets/Img11.jpg",
        heroImages: [
            "/HomeAssets/Img10.jpg",
            "/HomeAssets/Img11.jpg",
            "/PropertiesAssets/Img1.jpg",
            "/PropertiesAssets/Img2.jpg",
            "/PropertiesAssets/Img3.jpg",
            "/PropertiesAssets/Img4.jpg",
        ],
        amenities: [
            { id: "1", name: "Gated community", icon: FenceIcon },
            { id: "2", name: "24/7 security", icon: CctvIcon },
            { id: "3", name: "Community swimming pool", icon: WavesIcon },
            { id: "4", name: "Restaurant and bar", icon: UtensilsCrossed },
            { id: "5", name: "Gym", icon: Dumbbell },
            { id: "6", name: "Supermarket", icon: Store },
            { id: "7", name: "Unisex saloon", icon: Scissors },
            { id: "8", name: "Laundry services office", icon: ShowerHeadIcon },
            { id: "9", name: "Children playground", icon: Baby },
            { id: "10", name: "On-site facility management office", icon: Building2 },
        ],
        href: "/Properties/rocky-mountains-estate",
        price: "$50,000 - $85,000",
        priceTiers: [
            { label: "2 bedroom semi-detached", price: "$50,000" },
            { label: "2 bedroom detached", price: "$60,000" },
            { label: "3 bedroom", price: "$75,000" },
            { label: "4 bedroom", price: "$85,000" },
        ],
        paymentMode: "Pay 30% deposit and pay the rest in 3 years (monthly instalment)",
        paymentDeposits: [
            { label: "30% of $50,000", amount: "$15,000" },
            { label: "30% of $60,000", amount: "$18,000" },
            { label: "30% of $75,000", amount: "$22,500" },
            { label: "30% of $85,000", amount: "$25,500" },
        ],
        additionalInfo: "All rooms ensuite. Wardrobes, kitchen cabinet, tiled compound, solar power supply available in case of power-outage. Reserved poly tank also available.",
        locationDetails: {
            sectionTitle: "Location Details",
            locationName: "Palm Springs, CA",
            mapEmbedUrl: "https://www.google.com/maps?q=Palm+Springs,CA,USA&z=15&output=embed",
            mapTitle: "Map - Palm Springs, CA",
            brochureButtonText: "Download Brochure",
            brochureHref: "#",
        }
    },
    {
        id: "3",
        slug: "rico-lands",
        heroTitle: "Rico Lands",
        ctoHref: "/Contact",
        SectionTag: "Properties",
        priceRange: "$45,000 - $85,000",
        description: "Rocky Mountains is where life offers you the opportunity to blend nature seamlessly with the conveniences of modern living. It is a carefully planned 500-acre eco-friendly community located in the lush, serene enclave of Aburi, in the Eastern Region. This development offers fully serviced plots, designed to provide a sustainable and organic lifestyle, freeing you from the burdens of infrastructure development. Grace City Prime Land is more than just a residential area; it's a model community birthed from the high demand of our discerning clientele. Responding to countless requests, RKE has stepped in to create a space where essential infrastructure- including electricity, water, asphalt roads, sidewalks, a green park, efficient drainage, a secure gate post, parameter fence wall and ambient street lights – is already in place. This means you can focus on building your dream home and embracing a holistic way of life from day one, without the stress of coordinating these essential amenities yourself. Grace City Prime Land offers a unique opportunity to own fully serviced plots with convenient and affordable payment terms. The community is within reasonable proximity to major landmarks and amenities, and just a 40-minute drive from the airport, this is your chance to move into a community that takes away the burden of infrastructure worries. Embrace the ease of holistic and organic living at Grace City Prime Land, where your dream lifestyle becomes a reality.",
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
        href: "/Properties/rico-lands",
        price: "$78,000",
        locationDetails: {
            sectionTitle: "Location Details",
            locationName: "Aburi, Eastern Region",
            mapEmbedUrl: "https://www.google.com/maps?q=Aburi,Eastern+Region,Ghana&z=15&output=embed",
            mapTitle: "Map - Aburi, Eastern Region",
            brochureButtonText: "Download Brochure",
            brochureHref: "#",
        }
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



// Core Values Data - About Page

export const coreValuesDataAboutPage = [
    {
        id: "1",
        title: "Long lasting service",
        subtext: "We ensure every deal is transparent, secure, and reliable, giving clients peace of mind.Our commitment to honesty and integrity sets the foundation for lasting client relationships.",
        icon: FunnelPlus
    },
    {
        id: "2",
        title: "Client-Focused Service",
        subtext: "We ensure every deal is transparent, secure, and reliable, giving clients peace of mind.Our commitment to honesty and integrity sets the foundation for lasting client relationships.",
        icon: Users
    },
    {
        id: "3",
        title: "Safe Haven Living",
        subtext: "We ensure every deal is transparent, secure, and reliable, giving clients peace of mind.Our commitment to honesty and integrity sets the foundation for lasting client relationships.",
        icon: ShieldCheck
    },
    {
        id: "4",
        title: "Transparent Transactions",
        subtext: "We ensure every deal is transparent, secure, and reliable, giving clients peace of mind.Our commitment to honesty and integrity sets the foundation for lasting client relationships.",
        icon: BadgeCent
    },

    {
        id: "5",
        title: "Transparent Transactions",
        subtext: "We ensure every deal is transparent, secure, and reliable, giving clients peace of mind.Our commitment to honesty and integrity sets the foundation for lasting client relationships.",
        icon: BadgeCent
    },
    {
        id: "6",
        title: "Transparent Transactions",
        subtext: "We ensure every deal is transparent, secure, and reliable, giving clients peace of mind.Our commitment to honesty and integrity sets the foundation for lasting client relationships.",
        icon: BadgeCent
    },
]


