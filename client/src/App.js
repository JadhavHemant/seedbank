import './App.css';
import StudentReg from './Student/Studentreg';

import Header from './componunts/Header';
import Home from './componunts/Home';
import Register from './componunts/Register';
// import Admin from './componunts/AdminSeedAdmin';

import Homebio from './BioCompo/Homebio';
import Registerbio from './BioCompo/Registerbio';
// import Adminbio from './BioCompo/Adminbio';

import Planthome from './PlantCo/PlantHome';
import Plantreg from './PlantCo/PlantRegi';

import Homebird from './Birdcom/BirdHome';
import Registerbirds from './Birdcom/BirdRegi';


import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div>
      
    <Header/>


     <Routes>
      <Route path='/' element={<StudentReg/>}/>

        <Route path='/home' element={ <Home/>}/> 
        <Route path='/register' element={ <Register/>}/>
          {/* <Route path='/AdminAdmin' element={ <Admin/>}/> */}

         <Route path='/homebio' element={<Homebio/>}/>
         <Route path='/registerbio' element={<Registerbio/>}/>
         {/* <Route path='/Adminbio' element={ <Adminbio/>}/> */}
     
         <Route path='/planthome' element={<Planthome/>}/>
         <Route path='/plantreg' element={<Plantreg/>}/>

         <Route path='/homebird' element={<Homebird/>}/>
         <Route path='/regibird' element={<Registerbirds/>}/>



    </Routes> 

  
   

    </div>
  );
}

export default App;
