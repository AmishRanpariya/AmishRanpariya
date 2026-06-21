import Image from "next/image";
import type { Header } from "@/data/resume";

interface ResumeHeaderProps {
  header: Header;
}

const ResumeHeader = ({ header }: ResumeHeaderProps) => {
  const { name, designation, avatarPath, bio, contact } = header;

  const githubDisplay = contact.githubUrl.replace(/^https?:\/\/(www\.)?/, "");
  const linkedinDisplay = contact.linkedinUrl.replace(/^https?:\/\/(www\.)?/, "");

  return (
    <header className="mb_48">
      <div className="main_heading">
        <h1 className="name_heading font-serif dark:text-gray-100">{name}</h1>
        <div className="flex-shrink-0 flex-grow-0 flex items-center w-16 h-16 md:w-32 md:h-32 absolute top-0 right-4 md:relative md:top-auto md:right-auto rounded-full overflow-hidden">
          <Image
            src={avatarPath}
            alt={name}
            width={128}
            height={128}
            className="object-cover scale-[1.35] w-16 h-16 md:w-32 md:h-32"
            priority
          />
        </div>
      </div>
      <div className="flex-grow">
        <div className="lead_line dark:text-gray-200">{bio}</div>
        <div className="lead_profession dark:text-gray-400">
          {designation}
          {" | "}
          <a
            href={`mailto:${contact.email}`}
            target="_blank"
            rel="noopener noreferrer nofollow ugc"
            className="link"
          >
            {contact.email}
          </a>
          {" | "}
          <a
            href={`tel:${contact.phone}`}
            target="_blank"
            rel="noopener noreferrer nofollow ugc"
            className="link"
          >
            {contact.phone}
          </a>
          {" | "}
          <a
            href={contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer nofollow ugc"
            className="link underline"
          >
            {githubDisplay}
          </a>
          {" | "}
          <a
            href={contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer nofollow ugc"
            className="link underline"
          >
            {linkedinDisplay}
          </a>
        </div>
      </div>
    </header>
  );
};

export default ResumeHeader;
