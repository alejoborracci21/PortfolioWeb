import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectDetailsProps {
  title: string;
  imageUrl: string;
  projectLink: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  title,
  imageUrl,
  projectLink,
}) => {
  return (
    <div className="flex flex-col items-center bg-transparent text-white px-6 space-y-6 mt-12">
      {/* Header */}
      <div className="w-full max-w-4xl flex justify-between items-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <Link
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border bg-background border-gray-500 rounded-lg hover:bg-gray-800 transition"
        >
          Website
        </Link>
      </div>

      {/* Image Container */}
      <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg aspect-[2/1]">
        <Image
          src={imageUrl}
          alt={title}
          width={1200}
          height={600}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default ProjectDetails;