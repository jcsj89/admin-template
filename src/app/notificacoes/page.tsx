"use client";
import Layout from "@/components/template/Layout";
import useAppData from "@/data/context/hook/useAppData";

export default function Notificacoes(props: any) {
    const contexto = useAppData();

    return (
        <main className="">
            <Layout titulo="Notificacoes" subtitulo="Pagina notificacoes">
                <h1>Pagina Notificacoes</h1>
                {contexto.nome}
            </Layout>
        </main>
    );
}
