import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

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

const experiences = [
  {
    company: "Peoplebox",
    role: "SDE - Fullstack",
    period: "Sep 2021 - Dec 2024",
    logo: "/pplbx.png",
  },
  {
    company: "Medallia",
    role: "SDE2 - Frontend",
    period: "Jan 2024 - Present",
    logo: "/medallia.png",
  },
];

const Socials = () => {
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

const Experience = () => {
  return (
    <>
      <div className="text-3xl mt-15">Experience</div>
      <div className="flex flex-col gap-5 mt-10">
        {experiences.map((exp) => (
          <div key={exp.company} className="flex">
            <Image src={exp.logo} alt={exp.company} width={80} height={80} />
            <div className="ml-5">
              <div className="text-xl font-medium">{exp.company}</div>
              <div>{exp.role}</div>
              <div>{exp.period}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export const Intro = () => {
  return (
    <div className="mt-20 font-light leading-relaxed">
      <div className="text-3xl">Hi there! 👋</div>
      <div className="mt-10">
        {"I'm"} a frontend engineer who loves building fast, scalable, and
        delightful user experiences on the web. My work ranges from designing
        sleek interfaces to diving deep into complex engineering challenges —
        like exploring ProseMirror, real-time collaboration, and local-first
        applications. I enjoy tackling problems around scalability, performance,
        and developer experience. You can read more about my journey and
        projects on my about page.
      </div>
      <Socials />
      <Experience />
    </div>
  );
};
