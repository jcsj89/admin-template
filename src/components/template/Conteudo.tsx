interface ConteudoProps {
    children?: any;
}

const Conteudo = ({ children }: ConteudoProps) => {
    return (
        <div className={`flex flex-col mt-7 dark:text-gray-200`}>
            {children}
        </div>
    );
};

export default Conteudo;
