import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// const dummyList = [
//   {
//     id: 1,
//     author: "lee",
//     content: "hi 1",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "kim",
//     content: "hi 2",
//     emotion: 1,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "hee",
//     content: "hi 3",
//     emotion: 3,
//     created_date: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);
  const id = useRef(0);
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: id.current,
    };
    id.current += 1;
    setData([newItem, ...data]);
  };

  const onDelete = (id) => {
    const newData = data.filter((it) => it.id !== id);
    setData(newData);
  };

  const onEdit = (id, newContent) => {
    console.log(id, newContent);
    const newData = data.map((it) =>
      it.id === id ? { ...it, content: newContent } : it
    );
    setData(newData);
    // const editData = data.map((it) => {
    //   return it.id === id ? { [it.content]: content } : [...it];
    // });
    // setData(editData);
  };
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}

export default App;
