import './App.scss';
import { Switch , Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import ViewTask from './pages/viewTask/viewTask';
import DeleteTask from './pages/deleteTask/deleteTask';
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import FormPage from './pages/FormPage/FormPage';


function App(props){
  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/view/:id" component={ViewTask}/>
          <Route path="/add" component={FormPage}/>
          <Route path="/edit/:id" component={FormPage}/>
          <Route path="/delete/:id" component ={DeleteTask}/>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
