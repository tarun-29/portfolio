import Image from "next/image";
import ThemeToggle from "./theme-toggle";

const navLinks = [
  { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

export const Header = () => {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex items-center gap-3">
        <Image
          src={"/morty.png"}
          alt="Tarun Kantiwal"
          width={60}
          height={60}
          className="rounded-full"
        />
        <div>
          <div className="text-3xl">Tarun Kantiwal</div>
          <div className="flex items-center text-sm">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-2 text-red-500 dark:text-green-500 ${
                  i !== 0
                    ? "border-l border-dotted border-red-500 dark:border-green-500"
                    : ""
                }`}
                style={{ borderLeftWidth: i !== 0 ? "2px" : undefined }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <ThemeToggle />
    </div>
  );
};
