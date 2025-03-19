import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/KThemeProvider";

export function KToggleMode() {
  const { setTheme } = useTheme();

  return (
    <KDropdownMenu>
      <KDropdownMenuTrigger asChild>
        <KButton variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </KButton>
      </KDropdownMenuTrigger>
      <KDropdownMenuContent align="end">
        <KDropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </KDropdownMenuItem>
        <KDropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </KDropdownMenuItem>
        <KDropdownMenuItem onClick={() => setTheme("system")}>
          System
        </KDropdownMenuItem>
      </KDropdownMenuContent>
    </KDropdownMenu>
  );
}
