"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Home,
  BriefcaseBusiness,
  User,
  Send,
  ArrowLeft,
  EyeOff,
  Eye,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function DarkNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentTime, setCurrentTime] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setCurrentTime(
        `${hours}:${minutes}:${seconds} ${
          now.getHours() >= 12 ? "p.m." : "a.m."
        }`
      );
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

  const toggleLocale = () => {
    const segments = pathname.split("/");
    const currentLocale = segments[1];
    const newLocale = currentLocale === "en" ? "es" : "en";

    segments[1] = newLocale;
    const newPath = segments.join("/");

    router.push(newPath);
  };

  if (!isVisible) {
    return (
      <TooltipProvider>
        <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-md bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-400 hover:text-accent transition-all"
                onClick={toggleNavbar}
                onMouseEnter={() => setActiveTooltip("show")}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <Eye size={18} />
              </Button>
            </TooltipTrigger>
            <TooltipContent
              side="left"
              className="bg-zinc-800 border-zinc-700 text-white"
              hidden={activeTooltip !== "show"}
            >
              <p>Show Navbar</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    );
  }

  return (
    <TooltipProvider>
      <div className="fixed top-4 left-4 text-zinc-400 text-sm font-mono">
        {currentTime}
      </div>

      <div
        id="navbar-container"
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 view-transition-name-navbar"
      >
        <div className="flex items-center gap-4 p-2 bg-zinc-900/90 backdrop-blur-sm rounded border border-zinc-800">
          <NavButton
            id="back"
            icon={<ArrowLeft size={18} />}
            onClick={() => router.back()}
            tooltip="Go Back"
            activeTooltip={activeTooltip}
            setActiveTooltip={setActiveTooltip}
          />

          <NavButton
            id="home"
            icon={<Home size={18} />}
            onClick={() => router.push("/")}
            tooltip="Home"
            activeTooltip={activeTooltip}
            setActiveTooltip={setActiveTooltip}
          />
          <NavButton
            id="works"
            icon={<BriefcaseBusiness size={18} />}
            onClick={() => router.push("/works")}
            tooltip="Works"
            activeTooltip={activeTooltip}
            setActiveTooltip={setActiveTooltip}
          />
          <NavButton
            id="about"
            icon={<User size={18} />}
            onClick={() => router.push("/about")}
            tooltip="About me"
            activeTooltip={activeTooltip}
            setActiveTooltip={setActiveTooltip}
          />
          <a href="mailto:alejotrabajo2001@hotmail.com">
            <NavButton
              id="contact"
              icon={<Send size={18} />}
              tooltip="Contact me"
              activeTooltip={activeTooltip}
              setActiveTooltip={setActiveTooltip}
            />
          </a>

          {/* Language switch button */}
          <NavButton
            id="lang"
            icon={
              <span className="text-xs font-bold">
                {pathname.includes("/es") ? "EN" : "ES"}
              </span>
            }
            onClick={toggleLocale}
            tooltip="Change language"
            activeTooltip={activeTooltip}
            setActiveTooltip={setActiveTooltip}
          />

          <NavButton
            id="hide"
            icon={<EyeOff size={18} />}
            onClick={toggleNavbar}
            tooltip="Hide Navbar"
            activeTooltip={activeTooltip}
            setActiveTooltip={setActiveTooltip}
          />
        </div>
      </div>
    </TooltipProvider>
  );
}

interface NavButtonProps {
  id: string;
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  tooltip?: string;
  activeTooltip: string | null;
  setActiveTooltip: (id: string | null) => void;
}

export function NavButton({
  id,
  icon,
  active = false,
  onClick,
  tooltip,
  activeTooltip,
  setActiveTooltip,
}: NavButtonProps) {
  const button = (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "rounded-md bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-400 hover:text-accent transition-all",
        active && "bg-zinc-700/80 text-accent"
      )}
      onClick={onClick}
      onMouseEnter={() => setActiveTooltip(id)}
      onMouseLeave={() => setActiveTooltip(null)}
    >
      {icon}
    </Button>
  );

  if (tooltip) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="top"
          className="bg-zinc-800 border-zinc-700 text-white"
          hidden={activeTooltip !== id}
        >
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    );
  }

  return button;
}
