"use client";
import { createContext, useState } from "react";

type Tema = "dark" | "";

interface AppContextProps {
    tema?: Tema;
    alternarTema?: () => void;
}

const AppContext = createContext<AppContextProps>({
    tema: "",
    alternarTema: undefined,
});

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [tema, setTema] = useState<Tema>("");

    function alternarTema() {
        setTema(tema === "" ? "dark" : "");
    }

    return (
        <AppContext.Provider value={{ tema, alternarTema }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;
