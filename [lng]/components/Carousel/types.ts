interface Discount {
  start: string;
  end: string;
  discountPrice: number;
  discountPercent: number;
}

interface Color {
  url: string;
}

interface Spec {
  country: string;
  desc: string;
  weight: string;
}

interface Image {
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
  images: Image[];
}

