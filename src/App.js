
import './App.css';
import {Switch,Route} from "react-router-dom"
import Apply from './components/Apply/Apply';
import Login from './components/Apply/Login';
import Signup from './components/Apply/Signup';
import Forgot from './components/Apply/Forgot1';
import Forgot2 from './components/Apply/Forgot2';
import Forgot3 from './components/Apply/Forgot3';
import Passwordupd from './components/Apply/Passwordupd';
import Fill1 from './components/Apply/Fill1';
import Fill2 from './components/Apply/Fill2';
import Fill3 from './components/Apply/Fill3';
import Fill4 from './components/Apply/Fill4';
import Fill5 from './components/Apply/Fill5';
import Fill6 from './components/Apply/Fill6';
import Admin from './components/Admin/Admin';
import Fill7 from './components/Apply/Fill7';
import Fill8 from './components/Apply/Fill8';
import Fill9 from './components/Apply/Fill9';
import Fill10 from './components/Apply/Fill10';
import Fill11 from './components/Apply/Fill11';
import Fill12 from './components/Apply/Fill12';
import Fill13 from './components/Apply/Fill13';
import Fill14 from './components/Apply/Fill14';
import Fill15 from './components/Apply/Fill15';
import Fill16 from './components/Apply/Fill16';
import Fill17 from './components/Apply/Fill17';
import Fill18 from './components/Apply/Fill18';
import Fill19 from './components/Apply/Fill19';
import W91 from './components/Apply/W-9/W91';
import W92 from './components/Apply/W-9/W92';
import W93 from './components/Apply/W-9/W93';
import W94 from './components/Apply/W-9/W94';
import W95 from './components/Apply/W-9/W95';
import W96 from './components/Apply/W-9/W96';
import W97 from './components/Apply/W-9/W97';
function App() {
  
  return (
    <>

  <Switch>
    
  <Route exact path="/" component={Apply} />
    <Route exact path="/page-0" component={Fill1} />
    <Route exact path="/page-1" component={Fill2} />
    <Route exact path="/page-2" component={Fill3} />
    <Route exact path="/page-3" component={Fill4} />
    <Route exact path="/page-4" component={Fill5} />
    <Route exact path="/page-5" component={Fill6} />\
    <Route exact path="/page-6" component={Fill7} />
    <Route exact path="/page-7" component={Fill8} />
    <Route exact path="/page-8" component={Fill9} />
    <Route exact path="/page-9" component={Fill10} />
    <Route exact path="/page-10" component={Fill11} />
    <Route exact path="/page-11" component={Fill12} />
    <Route exact path="/page-12" component={Fill13} />
    <Route exact path="/page-13" component={Fill14} />
    <Route exact path="/page-14" component={Fill15} />
    <Route exact path="/page-15" component={Fill16} />
    <Route exact path="/page-16" component={Fill17} />
    <Route exact path="/page-17" component={Fill18} />
      <Route exact path="/page-18" component={Fill19} />
      <Route exact path="/w9form-1" component={W91} />
      <Route exact path="/w9form-2" component={W92} />
      <Route exact path="/w9form-3" component={W93} />
      <Route exact path="/w9form-4" component={W94} />
      <Route exact path="/w9form-5" component={W95} />

      <Route exact path="/w9form-6" component={W96} />

      <Route exact path="/w9form-7" component={W97} />





        <Route exact path="/signup" component={Signup} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/forgot" component={Forgot} />
    <Route exact path="/forgot2" component={Forgot2} />
    <Route exact path="/forgot3" component={Forgot3} />
    <Route exact path="/changed" component={Passwordupd} />
    <Route exact path="/admin" component={Admin} />
    


    </Switch>
 
    
    

    </>
  );
}

export default App;
