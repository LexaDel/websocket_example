import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { Provider } from "react-redux";
import store from "./store";
import AuthCheckerContainer from "./components/AuthChecker/AuthChecker.container";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store()}>
        <AuthCheckerContainer>
            <App />
        </AuthCheckerContainer>
    </Provider>
)
