export interface coreValueProps {
    id: string;
    title: string;
    subtext: string;
    icon: React.ElementType;
}

export type amenityProps = {
    id:string;
    name:string;
    icon:React.ElementType;
}

export interface propertiesProps {
    id:string;
    title:string;
    location:string;
    description:string;
    imageSrc:string;
    amenities:amenityProps[];
    href:string;
    price:string;
}
