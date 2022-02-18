import Link from "next/link";
import React from "react";
import { IconContainer } from "..";
import {
  CodepenIcon,
  FacebookIcon,
  GithubIcon,
  Logo,
  MailIcon,
  WhatsappIcon,
} from "../../../public/assets/icons";
import { socialLinks } from "../../constants";
interface Props {}
const Index: React.FC<Props> = () => {
  return (
    <div className="w-full px-4 py-12 xs:p-20 md:mt-20 bg-secondry flex-center ">
      <div className="flex flex-col">
        <span className="w-12 m-auto text-gray-200">
          <Logo />
        </span>
        <h4 className="text-center mt-10 text-gray-300">
          Living, learning, and leveling up
        </h4>
        <h4 className="text-center mb-10 text-gray-300"> one day at a time.</h4>
        <div className="flex flex-center gap-4 flex-wrap">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconContainer>
              <GithubIcon />
            </IconContainer>
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconContainer>
              <FacebookIcon />
            </IconContainer>
          </a>
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconContainer>
              <WhatsappIcon />
            </IconContainer>
          </a>
          <a
            href={"mailto:" + socialLinks.email}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconContainer>
              <MailIcon />
            </IconContainer>
          </a>
          <a
            href={socialLinks.codepen}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconContainer>
              <CodepenIcon />
            </IconContainer>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Index;
