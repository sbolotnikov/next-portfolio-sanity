export interface Theme {
    dark: boolean;
}
export type ThemeContextType ={
    darkTheme: Theme;
    setTheme: (a:boolean) => void;
}