import React from "react";
import { Container } from "../layouts";
interface Props {}
const Index: React.FC<Props> = () => {
  return (
    <Container>
      <h2 className="text-green mt-20 font-bold">Snippets</h2>
      <h4 className="text-lg mt-4">
        Short solutions to discrete problems that can be copy and pasted
      </h4>
      <table className="table-auto mt-20">
        <thead>
          <tr className="text-grey">
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Last Modified</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-8 m-8">useAnimationFrames</td>
            <td className="p-8 m-8">
              Short solutions to discrete problems that can be copy and pasted
            </td>
            <td className="p-8 m-8">React</td>
            <td className="p-8 m-8">January 10,2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
export default Index;
