import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Text, ExternalLink } from "lucide-react";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";

interface ProjectCardProps {
  title: string;
  tag: string;
  imageUrl: string;
  type?: string;
  detailsLink?: string;
  projectLink?: string;
  description?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  tag, 
  imageUrl,
  type = 'Web',
  detailsLink = '#',
  projectLink = '#',
}) => {
  return (
    <TooltipProvider>
      <div className="w-full bg-background group relative rounded-lg overflow-hidden border border-border/20">
        {/* Project Image */}
        <div className="w-full aspect-video relative overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500 brightness-75 group-hover:brightness-100"
          />
          
          {/* Action Buttons Overlay */}
          <div className="absolute bottom-2 right-2 flex space-x-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link 
                  href={detailsLink} 
                  className="bg-gray-500/70 hover:bg-gray-500 text-white p-2 rounded-full transition-colors duration-300 group"
                >
                  <Text size={16} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Details</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Link 
                  href={projectLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-500/70 hover:bg-gray-500 text-white p-2 rounded-full transition-colors duration-300 group"
                >
                  <ExternalLink className="group-hover:scale-110 transition-transform" size={16} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Website</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-primary">{title}</h3>
              <p className="text-muted-foreground text-xs mt-1">{tag}</p>
            </div>
            <span className="text-xs text-muted-foreground uppercase">{type}</span>
          </div>
          
        </div>
      </div>
    </TooltipProvider>
  );
};

export default ProjectCard;