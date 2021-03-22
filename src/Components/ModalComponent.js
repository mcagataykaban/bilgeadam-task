import React, { useState } from "react";
import AddForm from "./AddForm";
import { Modal } from "antd";
import EditForm from "./EditForm";

const ModalComponent = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState(0);

  const [editingTitle, setEditingTitle] = useState("");
  const [editingContent, setEditingContent] = useState("");
  const [editingStatus, setEditingStatus] = useState(0);

  const {
    isModalVisible,
    setIsModalVisible,
    todos,
    setTodos,
    whichModal,
    editingId,
    setEditTodo,
  } = props;
  const handleOk = () => {
    if (editingId !== -1) {
      var editedTodo = todos.filter((x) => x.id === editingId)[0];
      editedTodo.title = editingTitle === "" ? editedTodo.title : editingTitle;
      editedTodo.content =
        editingContent === "" ? editedTodo.content : editingContent;
      editedTodo.status =
        editingStatus === 0 ? editedTodo.status : editingStatus;
      //düzeltme olması lazım
      var newArr = todos.filter((x) => x.id !== editingId);
      setTodos([...newArr, editedTodo]);
      setEditingTitle("");
      setEditingContent("");
      setEditingStatus(0);
      setIsModalVisible(false);
      setEditTodo(-1);
      newArr.push(editedTodo)
      localStorage.setItem('todos', JSON.stringify(newArr))
    } else {
      var todo = {
        id: Math.random() * 100,
        title: title,
        content: content,
        status: status,
        date: Date.now(),
      };
      var newArr2 = todos
      newArr2.push(todo)
      localStorage.setItem('todos', JSON.stringify(newArr2))
      setTodos(newArr2);
      setTitle("");
      setContent("");
      setStatus(0);
      setIsModalVisible(false);
      
    }

  };

  const handleCancel = () => {
    setEditingTitle("");
    setEditingContent("");
    setEditingStatus(0);

    setTitle("");
    setContent("");
    setIsModalVisible(false);
  };
  return (
    <Modal
      title={whichModal === 0 ? "Add todo" : "Edit todo"}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {whichModal !== 0 ? (
        <EditForm
          key={editingId}
          editingTitle={editingTitle}
          editingContent={editingContent}
          editingStatus={editingStatus}
          setEditingTitle={setEditingTitle}
          setEditingContent={setEditingContent}
          setEditingStatus={setEditingStatus}
          todos={todos}
          editingId={editingId}
        />
      ) : (
        <AddForm
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          status={status}
          setStatus={setStatus}
        />
      )}
    </Modal>
  );
};

export default ModalComponent;
