"use client";
import Layout from "@/components/template/Layout";
import useAppData from "../../data/hook/useAppData";

export default function Notificacoes(props: any) {
    const { alternarTema } = useAppData();

    return (
        <main className="">
            <Layout titulo="Notificacoes" subtitulo="Pagina notificacoes">
                <h1 className="border border-cyan-200">Pagina Notificacoes</h1>
            </Layout>
        </main>
    );
}
