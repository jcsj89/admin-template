"use client";
import { AppProvider } from "@/data/context/AppContext";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import MenuLateral from "./MenuLateral";

interface LayoutProps {
    titulo: string;
    subtitulo: string;
    children?: any;
}

const Layout = (props: LayoutProps) => {
    return (
        <AppProvider>
            <div className={`dark flex h-screen w-screen`}>
                <MenuLateral />
                <div
                    className={`flex flex-col bg-gray-300 dark:bg-gray-800 w-full p-7`}
                >
                    <Cabecalho
                        titulo={props.titulo}
                        subtitulo={props.subtitulo}
                    />
                    <Conteudo>{props.children}</Conteudo>
                </div>
            </div>
        </AppProvider>
    );
};

export default Layout;