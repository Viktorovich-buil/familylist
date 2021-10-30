import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Preview from "./components/Preview/Preview";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="container">
                <Switch>
                    <Route path="/" component={Form} exact={true}/>
                    <Route path="/preview" component={Preview} exact={true}/>
                    <Redirect to="/" />
                </Switch>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
