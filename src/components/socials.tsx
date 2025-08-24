import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socials = [
  { name: "Github", href: "https://github.com/tarun-29", Icon: FaGithub },
  { name: "Twitter", href: "https://x.com/onemineng", Icon: FaTwitter },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kantiwal/",
    Icon: FaLinkedin,
  },
  { name: "Email", href: "mailto:29kantiwaltarun@gmail.com", Icon: FaEnvelope },
];

export const Socials = () => {
  return (
    <div className="flex items-center gap-4 mt-5">
      <span className="opacity-80">Find me on:</span>
      <span className="flex items-center gap-4">
        {socials.map(({ name, href, Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <Icon className="w-4 h-4" aria-hidden="true" />
          </a>
        ))}
      </span>
    </div>
  );
};
