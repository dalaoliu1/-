import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './HomePage/homePage';
import Login1 from './Login/Login1/login1';
import * as serviceWorker from './serviceWorker';
import{BrowserRouter,Route,Switch,Redirect,withRouter} from  'react-router-dom';
import Register from './Login/Register/register';
import Video from './Films/Video/video';
import Educate from './Films/Educate/educate';
import Match from './Films/Match/match';
import Communicate from './Interflow/Communicate/communicate';
import News from './Ad/News/new';
import Personal from './Login/Personal/personal';
import Forest from './ComboBox/Forest/forest';
import Afforest from './ComboBox/Afforest/afforest';
import City from './ComboBox/City/city';



class IndexPage extends React.Component{
    

    render(){
        return(
            <div>
                <BrowserRouter basename="react-example">
               <Switch>
                <Route path="/" exact component={HomePage}></Route> 
                <Route path="/homepage" exact component={HomePage}></Route> 
                <Route path="/Login1" component={Login1} history={this.history}></Route>
                <Route path="/Register" component={Register}></Route>
                <Route path="/Educate" component={Educate}></Route>
                <Route path="/Video" component={Video}></Route>
                <Route path="/Match" component={Match}></Route>
                <Route path="/Communicate" component={Communicate}></Route>
                <Route path="/News" component={News}></Route>
                <Route path="/homepage/Personal"  component={Personal}></Route>
                <Route path="/forest" component={Forest}></Route>
                <Route path="/afforest" component={Afforest}></Route>
                <Route path="/city" component={City}></Route>

                <Redirect to="/Login1"></Redirect>                         
                </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
export default withRouter(IndexPage)
    

ReactDOM.render(<IndexPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
