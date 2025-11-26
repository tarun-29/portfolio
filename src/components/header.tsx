"use client";

import Image from "next/image";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
];
const NAME = "Tarun Kantiwal";
export const Header = () => {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex items-center gap-3">
        <Image
          src={"/morty.png"}
          alt={NAME}
          width={60}
          height={60}
          className="rounded-full mt-2"
        />
        <div>
          <div className="flex text-3xl">
            {NAME}
            <div
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1rH8O2fLMRowRvUdsKwshfKIEHF_D10Vk/view?usp=sharing"
                );
              }}
              title={"View Full Resume"}
              className="ml-2 mt-2 cursor-pointer"
            >
              {<ExternalLinkIcon size={20} />}
            </div>
          </div>
          <div className="flex items-center text-sm mt-2">
            {navLinks.map((link, i) => (
              <Link key={link.name} href={link.href} legacyBehavior>
                <a
                  className={`px-2 text-red-500 dark:text-green-500 ${
                    i !== 0 ? "border-l-2 border-dashed" : ""
                  }`}
                  style={{
                    borderLeftStyle: i !== 0 ? "dashed" : undefined,
                    borderImage:
                      i !== 0
                        ? "repeating-linear-gradient(0deg, currentColor 0 4px, transparent 4px 8px) 1"
                        : undefined,
                  }}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <ThemeToggle />
    </div>
  );
};
