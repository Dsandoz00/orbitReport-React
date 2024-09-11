import "./styling.css"

import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className="flex-container">
      {
        displaySats.map((sat, id) => {
          return (
            <button onClick={() => filterByType(sat)} key={id}>{sat} Orbit</button>
          )
        }) 
      }
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;

//-------------------------------------------------------------
//What's the purpose of this component? 
  //Create four clickable buttons (three of them will use the props [filterByType, setSat, displaySats])
  //one displays all of the satelites
  









//---------------------------------------------------------------
// import satData.jsx ;

// const Buttons = ({ filterByType, setSat, displaySats }) => {
//   return (
//     <div>
//       <button onClick={() => filterByType(sat)} key={id}>{sat} Orbit</button>
//       <button onClick={() => setSat(setData)} >All Orbits</button>
//     </div>
//   );
// };
//---------------------------------------------------------------