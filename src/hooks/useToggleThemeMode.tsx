import { useState } from "react";

interface useToggleThemeModeProps {
    themeMode: string;
}
function useToggleThemeMode({ themeMode }: useToggleThemeModeProps){
    const toggleColorMode = () => setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
}

export default useToggleThemeMode