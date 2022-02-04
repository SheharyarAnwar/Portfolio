import Link from "next/link";
import React from "react";
import Tag from "../Tag";
interface Props {
  category: string;
  title: string;
  slug: string;
  summary: string;
}
const Index: React.FC<Props> = ({ category, title, summary, slug }) => {
  return (
    <Link href={`blog/${encodeURIComponent(slug)}`}>
      <a>
        <div className="group p-12 transition-colors mb-12 rounded-xl cursor-pointer bg-navy-accent">
          <Tag>{category}</Tag>
          <h4 className="mt-8 group-hover:text-green">{title}</h4>
          <p className="my-8 line-clamp-3 font-medium">{summary}</p>
          <p className=" font-bold ">Read More</p>
        </div>
      </a>
    </Link>
  );
};
export default Index;
