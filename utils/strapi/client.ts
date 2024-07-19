// lib/strapi.ts
import Strapi from 'strapi-sdk-js';
import { Description, Product, TransformedProduct, Image } from './types';

const serverURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
const strapi = new Strapi({
  url: serverURL,
  store: {
    key: 'strapi_jwt',
    useLocalStorage: false,
    cookieOptions: { path: "/" },
  },
  axiosOptions: {},
});

const transformProduct = (product: Product): TransformedProduct => {
  const transformDescription = (desc: Description[]): string =>
    desc.map((d) => d.children.map((child) => child.text).join('')).join('');

  const transformImages = (images: Image[]) =>
    images.map((img) => ({
      id: img.id,
      order: img.order,
      url: `${serverURL}${img.url.data.attributes.url}`,
    }));

  return {
    id: product.id,
    name: product.attributes.name,
    price: product.attributes.price,
    type: product.attributes.type,
    description: transformDescription(product.attributes.description),
    descriptionEn: transformDescription(product.attributes.descriptionEn),
    createdAt: product.attributes.createdAt,
    updatedAt: product.attributes.updatedAt,
    publishedAt: product.attributes.publishedAt,
    nameEn: product.attributes.nameEn,
    images: transformImages(product.attributes.images),
    spec: product.attributes.spec,
    specEn: product.attributes.specEn,
    color: `${serverURL}${product.attributes.color.url.data.attributes.url}`,
  };
};

// GET request
export const fetchProducts = async (): Promise<TransformedProduct[]> => {
  const response = await strapi.find<Product[]>('products', {
    populate: {
      images: {
        populate: '*'
      },
      spec: {
        populate: '*'
      },
      color: {
        populate: '*'
      },
      specEn: {
        populate: '*'
      }
    }
  });

  const transformedData = response.data.map(transformProduct);
  return transformedData;
};

// POST request
export const createProduct = async (product: Product): Promise<Product> => {
  const response = await strapi.create('products', product);
  return response.data as Product;
};

// DELETE request
export const deleteProduct = async (id: string): Promise<Product> => {
  const response = await strapi.delete('products', id);
  return response.data as Product;
};

export default strapi;