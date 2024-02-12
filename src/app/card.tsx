import Image from "next/image";
import { FiGithub, FiLink } from "react-icons/fi";

interface cardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  githubLink: string;
  projectLink: string;
}

const card: React.FC<cardProps> = ({ src, alt, title, description, githubLink, projectLink }) => {
  return (
    <div className="mb-32 flex gap-10 items-center justify-center select-none pointer-events-none">
      <div className="flex flex-col overflow-hidden rounded-md  relative">
        <Image src={src} alt={alt} width={508} height={286} className="bg-slate-500 rounded-md " style={{ objectFit: "contain" }} />
        <h1 className="text-left text-xl mb-2 mt-4 font-bold text-white">{title}</h1>
        <p className="text-base leading-[1.8] text-zinc-400">{description}</p>

        <div className="flex mt-4 space-x-2 text-xl pointer-events-auto">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-white mr-2 hover:text-zinc-300 transition ease-in-out">
            <FiGithub />
          </a>
          <a href={projectLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-zinc-300 transition ease-in-out">
            <FiLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default card;
