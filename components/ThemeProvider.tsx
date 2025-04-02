import { useTheme } from 'nextra-theme-docs';
import { useEffect } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    // Apply theme immediately on component mount
    const root = document.documentElement;
    
    // Set dark as default theme if theme is undefined or system
    if (!theme || theme === 'system') {
      setTheme('dark');
      root.classList.add('dark');
    } else {
      root.classList.toggle('dark', theme === 'dark');
    }

    // Add listener for system theme changes when using 'system' theme
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        root.classList.toggle('dark', e.matches);
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme, setTheme]);
  
  return <>{children}</>;
}

export default ThemeProvider; 