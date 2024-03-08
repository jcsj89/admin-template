"use client";
import { createContext } from "react";

const AppContext = createContext({
    nome: "Teste API agora funcionou caceta, ainda esta",
});

export function AppProvider(props: any) {
    return (
        <AppContext.Provider value={{ nome: "Teste Context API" }}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContext;
