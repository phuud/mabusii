import React from "react";
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
import PageLayout from "./components/PageLayout";
import { ROUTER_PATH } from "./constants/Router.constants";
import NotFound from "./components/NotFound";

import EigoTipsPage from "./pages/EigoTipsPage";
import AboutPage from "./pages/AboutPage";
import TranslatorPage from "./pages/TranslatorPage";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <PageLayout>
          <Switch>
            <Route path={ROUTER_PATH.TIPS} component={EigoTipsPage} />
            <Route path={ROUTER_PATH.ABOUT} component={AboutPage} />
            <Route path={ROUTER_PATH.TRANSLATOR} component={TranslatorPage} />
            <Redirect from="/" exact to={ROUTER_PATH.TIPS} />
            <Route path="*" component={NotFound} />
          </Switch>
        </PageLayout>
      </Router>
    </div>
  );
};

export default App;
