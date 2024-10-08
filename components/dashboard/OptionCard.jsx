"use client";
import React from "react";
import Link from "next/link";
import { Shirt } from "lucide-react";

export default function OptionCard({ optionData }) {
  const {
    title,
    description,
    link,
    linkTitle,
    enabled,
    icon: Icon,
  } = optionData;
  return (
    <div className="shadow-md bg-white flex flex-col items-center justify-center gap-4 p-6 rounded">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="">
        <Icon strokeWidth=".5px" className="w-36 h-36" />
      </div>
      <p className="line-clamp-1">
        {/* Create multiple variants of the same item using Item Groups */}
        {description}
      </p>
      {enabled ? (
        <Link
          href={link}
          className="p-2 rounded-sm bg-blue-600 inline-flex items-center space-x-2 px-3 text-white  "
        >
          {linkTitle}
        </Link>
      ) : (
        <button className="p-2 rounded-sm bg-blue-600 inline-flex items-center space-x-2 px-3 text-white  ">
          Enable
        </button>
      )}
    </div>
  );
}
