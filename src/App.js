import Components from "./Components";
import DndC from "./DndC";
import  {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import './App.css';
//Return Initialized formBuilder set it to HTML
function App() {



  return (
    <DndProvider backend={HTML5Backend}>
      <div className="row">
      <h1> FORM BUILDER</h1>
        <Components></Components>
        <DndC></DndC>
      </div>
    </DndProvider>
    
  );
}

export default App;