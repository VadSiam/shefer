// types/strapi.ts
export interface ImageAttributes {
  url: string;
}

export interface ImageData {
  attributes: ImageAttributes;
}

export interface Image {
  id: number;
  order: number;
  url: {
    data: ImageData;
  };
}

export interface Spec {
  id: number;
  desc: string;
  weight: string;
  country: string;
}

export interface Description {
  type: string;
  children: { text: string; type: string }[];
}

export interface Color {
  url: {
    data: ImageData;
  };
}

export interface ProductAttributes {
  name: string;
  price: number;
  type: string;
  description: Description[];
  descriptionEn: Description[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  nameEn: string;
  images: Image[];
  spec: Spec;
  specEn: Spec;
  color: Color;
}

export interface Product {
  id: number;
  attributes: ProductAttributes;
}

export interface TransformedProduct {
  id: number;
  name: string;
  price: number;
  type: string;
  description: string;
  descriptionEn: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  nameEn: string;
  images: { id: number; order: number; url: string }[];
  spec: Spec;
  specEn: Spec;
  color: string;
}