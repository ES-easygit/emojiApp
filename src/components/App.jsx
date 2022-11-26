import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";


function createEntry(emojiprop){
  return (<Entry
    key= {emojiprop.id}
    emoji= {emojiprop.emoji}
    name= {emojiprop.name}
    description= {emojiprop.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">

     {emojipedia.map(createEntry)}

     </dl>
    </div>
  );
}

export default App;
