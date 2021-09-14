import './App.scss';
import { Switch , Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import ViewTask from './pages/viewTask/viewTask';
import AddTask from "./pages/addTask/addTask";
import DeleteTask from './pages/deleteTask/deleteTask';
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/view/:id" component={ViewTask}/>
          <Route path="/add" component={AddTask}/>
          <Route path="/delete/:id" component ={DeleteTask}/>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
