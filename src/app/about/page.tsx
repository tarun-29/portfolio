import { Socials } from "@/components/socials";

const AboutSection = () => {
  const Intro = `Hi, I’m Tarun. I’m a frontend engineer who loves building fast, scalable, and delightful user experiences on the web. Lately, I’ve been diving into areas like real-time collaboration, ProseMirror, and local-first applications. I am currently building a clone of the Linear app with real-time sync, focusing on performance, offline-first architecture, and seamless collaboration to better understand how complex product engineering challenges are solved at scale.`;
  const MidIntro = `I’m very good at bringing closure to tough problems, 
    no matter how challenging they are. I studied Computer Science at IIITDM Chennai, 
    where I built a strong foundation in operating systems, databases, 
    and core computer science fundamentals. During my time there, 
    I worked on several personal and course-related 
    projects that helped me sharpen my problem-solving skills and 
    deepen my understanding of software development.`;
  const ThirdIntro = [
    "Previously, I worked at ",
    <a
      key="peoplebox"
      href="https://www.peoplebox.ai"
      target="_blank"
      rel="noopener noreferrer"
      className="underline"
    >
      Peoplebox
    </a>,
    ", a Y Combinator–backed, high-performance startup that builds OKR, business review, and talent management software for enterprise customers. There, I contributed to many core features, including architecting the core OKR product module and revamping the legacy feedback survey system for improved performance. One of my most rewarding projects was building a fully-fledged collaborative note editor using Tiptap, ProseMirror, and Yjs. I implemented several complex extensions from scratch — such as image upload, contextual comments, mentions, and advanced table operations (like merge and split cells) — at a time when Tiptap’s libraries were still in beta.",
  ];

  return (
    <div className="mt-20">
      <div className="text-3xl">About</div>
      <div className="mt-5">{Intro}</div>
      <div className="mt-5">{MidIntro}</div>
      <div className="mt-5">{ThirdIntro}</div>
      <Socials />
      <div className="text-3xl mt-10">Tech i have worked with</div>
      <div className="mt-5">
        <div>
          <span className="font-medium">Programming languages:</span> Javscript,
          Typescript, Sass, GraphQL, Rails
        </div>
        <div>
          <span className="font-medium">Library & Frameworks:</span> React,
          Tiptap, Yjs, Prosemirror, Next.js, Node.js, React-Native, Tailwind,
          Styled Component
        </div>
      </div>
      <div className="text-3xl mt-10">Education</div>
      <div className="mt-5">
        <div>IITDM Chennai | B.Tech CSE 2017-2021</div>
      </div>
      <div className="text-3xl mt-10">Other Interest</div>
      <div className="mt-5">Running, Music, Travel</div>
    </div>
  );
};

export default AboutSection;
