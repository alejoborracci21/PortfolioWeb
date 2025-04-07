"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Home, BriefcaseBusiness, User, Send, ArrowLeft, EyeOff, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

export function DarkNavbar() {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds} ${now.getHours() >= 12 ? "p.m." : "a.m."}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleNavbar = () => {
    document.startViewTransition(() => {
      setIsVisible((prev) => !prev);
    });
  };

  if (!isVisible) {
    // Botón para mostrar la navbar cuando está oculta
    return (
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-md bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-400 hover:text-accent transition-all"
                onClick={toggleNavbar}
              >
                <Eye size={18} />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-zinc-800 border-zinc-700 text-white">
              <p>Show Navbar</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    );
  }

  return (
    <>
      <div className="fixed top-4 left-4 text-zinc-400 text-sm font-mono">{currentTime}</div>

      <TooltipProvider>
        <div
          id="navbar-container"
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 view-transition-name-navbar"
        >
          <div className="flex items-center gap-4 p-2 bg-zinc-900/90 backdrop-blur-sm rounded border border-zinc-800">
            {/* Botón para volver a la página anterior */}
            <NavButton
              icon={<ArrowLeft size={18} />}
              onClick={() => router.back()}
              tooltip="Go Back"
            />

            {/* Botones de navegación */}
            <NavButton icon={<Home size={18} />} onClick={() => router.push("/")} tooltip="Home" />
            <NavButton
              icon={<BriefcaseBusiness size={18} />}
              onClick={() => router.push("/works")}
              tooltip="Works"
            />
            <NavButton icon={<User size={18} />} onClick={() => router.push("/about")} tooltip="About me" />
            <a href="mailto:alejotrabajo2001@hotmail.com">
              <NavButton icon={<Send size={18} />} tooltip="Contact me" />
            </a>

            {/* Botón para ocultar la navbar */}
            <NavButton
              icon={<EyeOff size={18} />}
              onClick={toggleNavbar}
              tooltip="Hide Navbar"
            />
          </div>
        </div>
      </TooltipProvider>
    </>
  );
}

interface NavButtonProps {
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  tooltip?: string;
}

export function NavButton({ icon, active = false, onClick, tooltip }: NavButtonProps) {
  const button = (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "rounded-md bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-400 hover:text-accent transition-all",
        active && "bg-zinc-700/80 text-accent"
      )}
      onClick={onClick}
    >
      {icon}
    </Button>
  );

  if (tooltip) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent side="top" className="bg-zinc-800 border-zinc-700 text-white">
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    );
  }

  return button;
}