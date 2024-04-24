interface Discount {
  start: string;
  end: string;
  discountPrice: number;
  discountPercent: number;
}

interface Color {
  url: string;
}

export interface Spec {
  country: string;
  desc: string;
  weight: string;
}

export interface IImage {
  url: string;
  order: number;
}

export interface ProductCardProps {
  id: number;
  created_at: string;
  name: string;
  nameEn: string;
  price: string;
  type: string;
  related: string[];
  discount: Discount;
  color: Color;
  description: string;
  descriptionEn: string;
  spec: Spec;
  specEn: Spec;
  images: IImage[];
}

