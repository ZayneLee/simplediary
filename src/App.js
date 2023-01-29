import { useEffect, useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// https://jsonplaceholder.typicode.com/comments

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

  const getData = async () => {
    // await 으로 반환 시 타입 any
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => {
      return res.json();
    });
    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: id.current++,
      };
    });
    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   getData();
  //   // await 없이 반환 시 Promise 객체 반환 => pendintData : Promise<void>
  //   const pendingData = fetch(
  //     "https://jsonplaceholder.typicode.com/comments"
  //   ).then((res) => {
  //     return res.json();
  //   });
  //   console.log("pendingData", pendingData);
  // }, []);

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
