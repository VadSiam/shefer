import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface SeparatorProps {
  extraStyles?: string;
}

const Separator: React.FC<SeparatorProps> = ({ extraStyles = "" }) => (
  <div className={`shrink-0 w-px h-4 border border-solid bg-zinc-800 border-zinc-800 ${extraStyles}`} />
);

interface BreadcrumbItem {
  title: string;
  link: string;
}

interface NavigationProps {
  items: BreadcrumbItem[];
}

const NavigationBreadcrumbs: React.FC<NavigationProps> = ({ items }) => {
  const router = useRouter();

  return (
    <>
      <nav className="sm:hidden flex items-center gap-2 self-start mt-2 mb-4 text-xs text-center uppercase">
        <Link
          href="#"
          onClick={() => router.back()}
        >
          <svg
            height="512px"
            id="Layer_1"
            className="w-8 h-8"
            version="1.1"
            viewBox="0 0 512 512"
            width="512px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="currentColor"
          >
            <path d="M189.3,128.4L89,233.4c-6,5.8-9,13.7-9,22.4c0,8.7,3,16.5,9,22.4l100.3,105.4c11.9,12.5,31.3,12.5,43.2,0  c11.9-12.5,11.9-32.7,0-45.2L184.4,288h217c16.9,0,30.6-14.3,30.6-32c0-17.7-13.7-32-30.6-32h-217l48.2-50.4  c11.9-12.5,11.9-32.7,0-45.2C220.6,115.9,201.3,115.9,189.3,128.4z" />
          </svg>
        </Link>
      </nav>
      <nav className="sm:flex hidden gap-5 self-start mt-2 mb-4 text-xs text-center uppercase max-md:mt-10 max-md:ml-2.5">
        {items.map((item, index) => (
          <React.Fragment key={item.link}>
            <Link className="" href={item.link}>{item.title}</Link>
            {index < items.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
};

export default NavigationBreadcrumbs;