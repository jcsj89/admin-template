interface AuthInputProps {
    label: string;
    valor: any;
    obrigatorio?: boolean;
    naoRenderizarQuando?: boolean;
    tipo?: "text" | "email" | "password";
    valorMudou?: (novoValor: any) => void;
}

const AuthInput = (props: AuthInputProps) => {
    return props.naoRenderizarQuando ? null : (
        <div className={`flex flex-col mt-4`}>
            <label>{props.label}</label>
            <input
                type={props.tipo ?? "text"}
                value={props.valor}
                required={props.obrigatorio}
                onChange={(e) => props.valorMudou?.(e.target.value)}
                className={`px-4 rounded-lg bg-gray-300 mt-2 border focus:border-blue-500 focus:outline-none focus:bg-white p-3`}
            />
        </div>
    );
};

export default AuthInput;
