import React from "react";
import Section1 from "./components/section-1/Section1";
import Section2 from "./components/section2/Section2";

function App() {
  const users = [
    {
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.xKWv2PvnmFHgXzeyjotngAHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=d120dac95a75d15e0805c03cb8b1e4886b16c5d5b22b60503e166faad736c34d&ipo=images",
      intro: "",
      tag: "Satisfied",
    },
    {
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.k4NriJ0URMAyQAgC-WhGxgHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=85c9041964b06f15a94fcb3aad7ae8a7189f09eb55e25e75194da5c0358ff937&ipo=images",
      intro: "",
      tag: "Underserved",
    },
    {
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.5jdiXW1EwYw6szxPsE66NAHaER%3Fr%3D0%26pid%3DApi&f=1&ipt=975947d0397e24e3d44684fda5d91eadc5142b6c0deea3a511093d376fbdd061&ipo=images",
      intro: "",
      tag: "UnderBanked",
    },
  ];
  return (
    <>
      <Section1 users={users}/>
      <Section2 />
    </>
  );
}

export default App;
