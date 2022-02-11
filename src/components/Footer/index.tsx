import React from "react";
import { IconContainer } from "..";
import {
  CodepenIcon,
  FacebookIcon,
  GithubIcon,
  Logo,
  TwitterIcon,
  WhatsappIcon,
} from "../../../public/assets/icons";
interface Props {}
const Index: React.FC<Props> = () => {
  return (
    <div className="w-full p-32 bg-secondry flex-center ">
      <div className="flex flex-col">
        <span className="m-auto text-gray-200">
          <Logo width={40} />
        </span>
        <h4 className="text-center m-10 text-gray-300">
          Living, learning, and leveling up one day at a time.
        </h4>
        <div className="flex flex-center gap-4">
          <IconContainer>
            <GithubIcon fill="currentColor" stroke="none" />
          </IconContainer>
          <IconContainer>
            <FacebookIcon />
          </IconContainer>
          <IconContainer>
            <WhatsappIcon />
          </IconContainer>{" "}
          <IconContainer>
            <TwitterIcon />
          </IconContainer>{" "}
          <IconContainer>
            <CodepenIcon />
          </IconContainer>
        </div>
      </div>
    </div>
  );
};
export default Index;
