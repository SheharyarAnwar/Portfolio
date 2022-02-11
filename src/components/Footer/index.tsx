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
    <div className="w-full px-4 py-12 xs:p-20 bg-secondry flex-center ">
      <div className="flex flex-col">
        <span className="w-12 m-auto text-gray-200">
          <Logo />
        </span>
        <h4 className="text-center mt-10 text-gray-300">
          Living, learning, and leveling up
        </h4>
        <h4 className="text-center mb-10 text-gray-300"> one day at a time.</h4>
        <div className="flex flex-center gap-4 flex-wrap">
          <IconContainer>
            <GithubIcon />
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
