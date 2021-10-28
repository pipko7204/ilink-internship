import {FC} from "react";
import {SCREENS} from "./endpints";
import {LoginPage} from "../compnents/Pages/LoginPage";
import {ChatPage} from "../compnents/Pages/ChatPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export const Routes: FC = () => {
    return (
        <Switch>
            <Route path={SCREENS.SCREEN_LOGIN} exact>
                <LoginPage/>
            </Route>
            <Route path={SCREENS.SCREEN_CHAT} exact>
                <ChatPage/>
            </Route>
        </Switch>
    )

}