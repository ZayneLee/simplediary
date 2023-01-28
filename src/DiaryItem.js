import { useRef, useState } from "react";

const DiaryItem = ({ it, onDelete, onEdit }) => {
  const { id, author, content, emotion, created_date } = it;
  const [isEdit, setIsEdit] = useState(false);
  const [newContent, setNewContent] = useState(content);
  const localContentInput = useRef();

  const isEdittoggle = () => {
    setIsEdit(!isEdit);
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setNewContent(content);
  };
  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onDelete(id);
    }
  };

  const onEditItem = () => {
    if (newContent.length < 5) {
      return localContentInput.current.focus();
    }
    if (window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
      onEdit(id, newContent);
      isEdittoggle();
    }
  };
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <textarea
            ref={localContentInput}
            value={newContent}
            onChange={(e) => {
              setNewContent(e.target.value);
            }}
          />
        ) : (
          content
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정취소</button>
          <button onClick={onEditItem}>수정완료</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={isEdittoggle}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
