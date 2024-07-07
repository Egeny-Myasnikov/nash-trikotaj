import { loginAction } from "./actions/loginAction";
import { LoginSection } from "./sections/loginSection";

export default function Auth() {


    return (
        <>
            <LoginSection loginAction={loginAction} />
        </>
    )
}