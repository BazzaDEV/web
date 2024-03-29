"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function DarkModeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme()

  return (
    <Button
      variant="secondary"
      className="relative rounded-lg h-7 w-7"
      size="icon"
      onClick={() =>
        resolvedTheme === "light"
          ? setTheme(theme === "system" ? "dark" : "system")
          : setTheme(theme === "system" ? "light" : "system")
      }
    >
      <Moon className="h-4 w-4 scale-0 dark:scale-100" />
      <Sun className="absolute h-4 w-4 scale-100 dark:scale-0" />
    </Button>
  )
}
