import { App } from "./components/App";
import store from "./store";
import AuthCheckerContainer from "./components/AuthChecker/AuthChecker.container";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store()}>
        <AuthCheckerContainer>
            <App />
        </AuthCheckerContainer>
    </Provider>
)
