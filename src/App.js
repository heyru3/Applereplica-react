import './App.css';
import react,{Routes,Route, Router} from "react-router-dom"
import  'bootstrap/dist/css/bootstrap.min.css'
import  'bootstrap/dist/js/bootstrap.min.js'
import  './css/style.css'
import './js/script.js'
import SharedLayout from './SharedLayout.js';
import Main from './component/section/Main.js';
import Mac from './component/pages/Pages/Mac.js';
import Iphones from './component/pages/Pages/Iphone/Iphones.js'
import Ipad from './component/pages/Pages/Ipad.js';
import Watch from './component/pages/Pages/Watch.js';
import Tv from './component/pages/Pages/Tv.js';
import Music from './component/pages/Pages/Music.js';
import Support from './component/pages/Pages/Support.js';
import Four04 from './component/pages/Pages/Four04.js';
import Productpage from './component/pages/Pages/Productpage/Productpage.js';
function App() {
  return (
   <div>
      <Routes>
          <Route path='/' element={<SharedLayout />}>
           <Route path='/' element={<Main />}/>        
            <Route path='/Mac' element={<Mac />}/>
            <Route path='Iphone' element={<Iphones />}/>
            <Route path="/Iphone/:productID" element={<Productpage/>} />
            <Route path='Ipad' element={<Ipad />}/>
            <Route path='Watch' element={<Watch />}/>
            <Route path='Tv' element={<Tv />}/>
            <Route path='Music' element={<Music />}/>
            <Route path='Support' element={<Support />} /> 
            <Route path='*' element={<Four04 />} /> 
          </Route>
      </Routes>
    </div>
  );
}
export default App;
