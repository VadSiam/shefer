import Link from "next/link";
import React from "react";
import ArrowBack from "./ArrowBack";

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

  return (
    <>
      <nav className="flex items-center self-start gap-2 mt-2 mb-4 text-xs text-center uppercase sm:hidden">
        <ArrowBack />
      </nav>
      <nav className="sm:flex hidden gap-5 self-start mt-4 mb-4 text-xs text-center uppercase max-md:mt-10 max-md:ml-2.5">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <Link className="" href={item.link}>{item.title}</Link>
            {index < items.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
};

export default NavigationBreadcrumbs;