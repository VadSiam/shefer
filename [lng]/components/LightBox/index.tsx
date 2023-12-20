'use client'

import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "./NextJsImage";

export const galleryTab = [
  // you can add more image if you want
  {
    id: '1',
    imageUrl: "https://wiesbdispmispsuqfjne.supabase.co/storage/v1/object/public/products_images/public/machine.png",
    type: "Machine",
    title: "Beautiful Work",
    price: "100",
  },
  {
    id: '22',
    imageUrl: "https://wiesbdispmispsuqfjne.supabase.co/storage/v1/object/public/products_images/public/pigment.png",
    type: "Pigment",
    title: "Beautiful Work",
    price: "130",
  },
  {
    id: '333',
    imageUrl: "https://wiesbdispmispsuqfjne.supabase.co/storage/v1/object/public/products_images/public/machine.png",
    type: "Machine",
    title: "Beautiful Work",
    price: "110",
  },
  {
    id: '4444',
    imageUrl: "https://wiesbdispmispsuqfjne.supabase.co/storage/v1/object/public/products_images/public/pigment.png",
    type: "Pigment",
    title: "Beautiful Work",
    price: "180",
  },
  {
    id: '55555',
    imageUrl: "https://wiesbdispmispsuqfjne.supabase.co/storage/v1/object/public/products_images/public/machine.png",
    type: "Machine",
    title: "Beautiful Work",
    price: "150",
  },
];

const galleryTab2 = [
  // you can add more image if you want
  {
    imageUrl: "https://wiesbdispmispsuqfjne.supabase.co/storage/v1/object/public/products_images/public/pigment.png",
    type: "Pigment",
    title: "Beautiful Work",
  },
  {
    imageUrl: "https://wiesbdispmispsuqfjne.supabase.co/storage/v1/object/public/products_images/public/pigment.png",
    type: "Pigment",
    title: "Beautiful Work",
  },
  {
    imageUrl: "https://wiesbdispmispsuqfjne.supabase.co/storage/v1/object/public/products_images/public/pigment.png",
    type: "Pigment",
    title: "Beautiful Work",
  },
];

const LightBox = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");

  const slides = galleryTab2.map((item) => ({
    src: item.imageUrl,
    width: 3840,
    height: 2560,
    srcSet: [
      { src: item.imageUrl, width: 320, height: 213 },
      { src: item.imageUrl, width: 640, height: 426 },
      { src: item.imageUrl, width: 1200, height: 800 },
      { src: item.imageUrl, width: 2048, height: 1365 },
      { src: item.imageUrl, width: 3840, height: 2560 },
    ],
  }));

  return (
    <div className="w-full">
      <div className=" ">
        <div className="flex flex-col md:grid md:grid-cols-3 h-full gap-0 flex-wrap mx-2 md:mx-0">
          {galleryTab.map((x, index) => {
            return (
              <div key={index} className="md:h-[50vw] h-screen relative">
                <div className="group h-full">
                  <div
                    className="bg-cover bg-center h-full w-full bg-no-repeat"
                    style={{ backgroundImage: `url("${x.imageUrl}")` }}
                  >
                    <div className="text-3xl text-white absolute bottom-0 left-2 z-10">
                      <div>{x.type}</div>
                      <div>{x.title}</div>
                    </div>
                  </div>
                  <div
                    className="bg-black opacity-0 group-hover:opacity-75 absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out"
                    onClick={() => {
                      setOpen(true);
                      setImage(x.imageUrl);
                    }}
                  >
                    <p className="text-white">
                      XXX
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        showPrevNext={false}
        slides={slides}
        render={{ slide: NextJsImage }}
      />
    </div>
  );
};

export default LightBox;