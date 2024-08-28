import Link from "next/link";
import { buttonVariants } from "@/shad-components/button";
import { Download, DownloadCloud, Inbox, Link2 } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons";

export default function SocialLinks() {
  return (
    <div className="flex gap-3 max-sm:flex-col w-full">
      <Link
        className={buttonVariants({
          variant: "default",
          className: "gap-2 w-full",
        })}
        href={"https://linkedin.com/in/pedrocleal"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInLogoIcon />

        <span>LinkedIn</span>
      </Link>

      <Link
        className={buttonVariants({
          variant: "outline",
          className: "gap-2 w-full",
        })}
        href={"mailto:pedrocleal.dev@gmail.com"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Inbox size={16} />
        <span>E-mail</span>
      </Link>

      <Link
        className={buttonVariants({
          variant: "outline",
          className: "max-sm:w-full w-full gap-2",
        })}
        href="https://github.com/pedrocleal"
        target="_blank"
      >
        <GitHubLogoIcon />
        Github
      </Link>

      <Link
        className={buttonVariants({
          variant: "outline",
          className: "max-sm:w-full w-full gap-2",
        })}
        href="https://v1.pedrocleal.dev/"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
        Portfolio V1
      </Link>
    </div>
  );
}
