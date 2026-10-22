import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=12`,
    );
    setUserData(response.data);
  };
  const previouse = () => {
   if (index>1) {
    
     setIndex(index - 1);
     setUserData([])
   }
  };
  const next = () => {
     setUserData([])
  
    setIndex(index + 1);
  };

  useEffect(function () {
    getData();
  }, [index]);

  let printUserData =  <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem}/>
        </div>
      );
    });
  }

  return (
    <div className="p-0 m-0 bg-black h-screen overflow-auto text-white">
      <div className="flex-1">
        
      <div className="grid grid-cols-4 gap-1 items-center">{printUserData}</div>
      </div>

      <div className="flex justify-center gap-2">
        <button onClick={previouse} className="py-1 cursor-pointer active:scale-95 font-bold text-lg rounded-xs px-3 bg-green-500 ">Prev</button>
        <h3 className="py-1 cursor-pointer active:scale-95 font-bold text-lg rounded-xs px-3 bg-green-500">{index}</h3>
        <button onClick={next} className="py-1 px-3 cursor-pointer active:scale-95 font-bold text-lg rounded-xs bg-green-500 ">Next</button>
      </div>
    </div>
  );
}

export default App;
