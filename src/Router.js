import{ BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';

function Router(){
return(
    <BrowserRouter>
    <switch>
        <Route parth="/">
        <App />
        </Route>
        </switch>
    </BrowserRouter>
)
};

export default Router;