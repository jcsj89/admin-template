"use client";
import AuthInput from "@/components/auth/AuthInput";
import { IconeWarning } from "@/components/icons";
import { useState } from "react";

const Autenticacao = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [modo, setModo] = useState<"login" | "cadastro">("login");
    const [erro, setErro] = useState<string | null>(null);

    function exibirErro(msg: string, tempoEmSegundos = 5) {
        setErro(msg);
        setTimeout(() => {
            setErro(null);
        }, tempoEmSegundos * 1000);
    }

    function submeter() {
        if (modo === "login") {
            console.log("login");
            exibirErro("erro na tela login");
        } else {
            console.log("cadastrar");
            exibirErro("erro na tela cadastro");
        }
    }

    return (
        <div className={`flex justify-center items-center h-screen`}>
            <div className={`hidden md:block md:w-1/2 lg:w-2/3`}>
                <img
                    src="https://source.unsplash.com/ramdom"
                    alt="Imagem da tela de auth"
                    className="h-screen w-full object-cover"
                />
            </div>
            <div className={`m-10 w-full md:w-1/2 lg:w-1/3`}>
                <h1 className={`text-2xl font-bold mb-5`}>
                    {modo === "login"
                        ? "Entre com a sua conta"
                        : "Cadastre-se na Plataforma"}
                </h1>

                {erro ? (
                    <div
                        className={`flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg`}
                    >
                        {IconeWarning(8)}
                        <span className="ml-3">{erro}</span>
                    </div>
                ) : (
                    false
                )}

                <AuthInput
                    tipo="email"
                    label="Email"
                    valor={email}
                    obrigatorio
                    valorMudou={setEmail}
                />
                <AuthInput
                    tipo="password"
                    label="Senha"
                    valor={senha}
                    obrigatorio
                    valorMudou={setSenha}
                />

                <button
                    className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6 `}
                    onClick={submeter}
                >
                    {modo === "login" ? "Entrar" : "Cadastrar"}
                </button>

                <hr className={`my-6 w-full border-x-gray-300`} />

                <button
                    className={`w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3`}
                    onClick={submeter}
                >
                    Entrar com Google
                </button>

                {modo === "login" ? (
                    <p className="mt-8">
                        Novo por aqui?
                        <a
                            onClick={() => setModo("cadastro")}
                            className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
                        >
                            Crie uma conta gratuitamente
                        </a>
                    </p>
                ) : (
                    <p className="mt-8">
                        Ja faz parte da nossa comunidade?
                        <a
                            onClick={() => setModo("login")}
                            className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
                        >
                            Entre com suas credenciais
                        </a>
                    </p>
                )}
            </div>
        </div>
    );
};

export default Autenticacao;
