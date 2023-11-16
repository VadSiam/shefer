import { ThemeProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

export default function NextThemesProvider({ children, ...props }: ThemeProviderProps) {
  return (<ThemeProvider
    forcedTheme={undefined}
    attribute="class"{...props}>
    {children}
  </ThemeProvider>)
}