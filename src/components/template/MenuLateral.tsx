"use client";
import { IconeCasa, IconeSair, IconeSino, IconeTag } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

const MenuLateral = () => {
    return (
        <aside className={`flex flex-col dark:bg-gray-900 dark:text-gray-200`}>
            <div
                className={`flex flex-col items-center justify-center h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800`}
            >
                <Logo />
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Home" icone={IconeCasa} />
                <MenuItem
                    url="/notificacoes"
                    texto="Notificacoes"
                    icone={IconeSino}
                />
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeTag} />
            </ul>
            <ul>
                <MenuItem
                    texto="Sair"
                    icone={IconeSair}
                    className={`text-red-600 hover:bg-red-400 hover:text-white`}
                    onClick={() => console.log("logout")}
                />
            </ul>
        </aside>
    );
};

export default MenuLateral;
