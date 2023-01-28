import { useState } from "react";

const DiaryItem = ({ it, onDelete, onEdit }) => {
  const { id, author, content, emotion, created_date } = it;
  const [isEdit, setIsEdit] = useState(false);
  const [newContent, setNewContent] = useState(content);

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
          <button onClick={() => onEdit(id, newContent)}>수정완료</button>
          <button onClick={handleQuitEdit}>수정취소</button>
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
