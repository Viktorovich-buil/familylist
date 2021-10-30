import { BrowserRouter, Switch, Route } from "react-router-dom";
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
                </Switch>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
