import Usuario from "@/model/Usuario";
import { createContext, useState } from "react";
import firebase from '@/firebase/config'

interface AuthContextProps {
    usuario?: Usuario | null;
    loginGoogle?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

async function usuarioNormalizado(usuarioFirebase: firebase.FirebaseApp) {}

export function AuthProvider(props: any) {
    const [usuario, setUsuario] = useState(null);

    async function loginGoogle() {}

    return (
        <AuthContext.Provider value={{ usuario, loginGoogle }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
