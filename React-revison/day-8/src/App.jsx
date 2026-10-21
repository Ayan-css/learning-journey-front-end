import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const taskCopy = [...task];
    taskCopy.push({ title, details });
    setTask(taskCopy);
    console.log(task);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };
  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex lg:w-1/2 item-start gap-10 flex-col p-10"
      >
        <input
          value={title}
          type="text"
          placeholder="Heading"
          className="px-5 py-2 font-medium outline-none w-full border-2 rounded"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          type="text"
          placeholder="Write details"
          className="px-5 py-2 font-medium outline-none w-full h-32 border-2 rounded"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className="bg-white active:bg-amber-200 w-full text-black font-medium outline-none px-5 py-2 rounded ">
          Add Note
        </button>
      </form>
      <div className=" lg:w-1/2 flex-wrap p-10">
        <h1 className="font-bold">Your Notes</h1>
        <div className="h-full flex mt-5 items-start justify-start flex-wrap gap-5  overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="h-70 w-65 rounded-2xl bg-[url(https://pngtree.com/freepng/legal-pad-isolated-on-transparent-background_20688991.html)] bg-red-200 bg-cover bg-center text-black flex flex-col justify-between"
              >
                <div className="flex flex-col flex-1 min-h-0">
                  <h3 className="text-center leading-tight font-black text-white uppercase">
                    {elem.title}
                  </h3>
                  <p className="px-3 pt-2 leading-tight font-bold h-full text-wrap overflow-y-auto overflow-x-hidden whitespace-normal wrap-break-word text-gray-600">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-full cursor-pointer active:scale-95 bg-red-500 p-1 my-3 text-xs rounded font-bold text-white"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
