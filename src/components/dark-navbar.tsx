"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import type React from "react"
import { Home, BriefcaseBusiness , User , Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

export function DarkNavbar() {
  const router = useRouter()
  const [currentTime, setCurrentTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      const seconds = now.getSeconds().toString().padStart(2, "0")
      setCurrentTime(`${hours}:${minutes}:${seconds} ${now.getHours() >= 12 ? "p.m." : "a.m."}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="fixed top-4 left-4 text-zinc-400 text-sm font-mono">{currentTime}</div>

      <TooltipProvider>
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="flex items-center gap-4 p-2 bg-zinc-900/90 backdrop-blur-sm rounded border border-zinc-800">
            <NavButton icon={<Home size={18} />} onClick={() => router.push("/")} tooltip="Home" />
            <NavButton icon={<BriefcaseBusiness  size={18} />} onClick={() => router.push("/works")} tooltip="Works" />
            <NavButton icon={<User  size={18} />} onClick={() => router.push("/about")} tooltip="About me" />
            <NavButton icon={<Send size={18} />} onClick={() => router.push("/contact")} tooltip="Contact me" />
          </div>
        </div>
      </TooltipProvider>
    </>
  )
}

interface NavButtonProps {
  icon: React.ReactNode
  active?: boolean
  onClick?: () => void
  tooltip?: string
}

export function NavButton({ icon, active = false, onClick, tooltip }: NavButtonProps) {
  const button = (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "rounded-md bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-400 hover:text-accent transition-all",
        active && "bg-zinc-700/80 text-accent",
      )}
      onClick={onClick}
    >
      {icon}
    </Button>
  )

  if (tooltip) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent side="top" className="bg-zinc-800 border-zinc-700 text-white">
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    )
  }

  return button
}

