import React, { useState } from "react";
import { List, Card, Tag, Button } from "antd";
import {
  CloseOutlined,
  EditOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import ModalComponent from "./ModalComponent";
import { useTranslation } from "react-i18next";


const TodoList = (props) => {
  const { t, i18 } = useTranslation();
  const { todos, setTodos } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [whichModal, setWhichModal] = useState(0);
  const [editTodo, setEditTodo] = useState(-1);
  const showModalAddForm = () => {
    setWhichModal(0);
    setIsModalVisible(true);
  };

  const tagReturnHandler = (status) => {
    switch (status) {
      case 0:
        return (
          <Tag color={"blue"} key={"todo"}>
            todo
          </Tag>
        );
      case 1:
        return (
          <Tag color={"purple"} key={"doing"}>
            doing
          </Tag>
        );
      case 2:
        return (
          <Tag color={"green"} key={"done"}>
            done
          </Tag>
        );
    }
  };
  const getDateHandler = (a) => {
    var date = new Date(a);
    return date.toDateString().substring(4, 10);
  };

  return (
    <>
      <ModalComponent
              editingId={editTodo}
              whichModal={whichModal}
              todos={todos}
              setTodos={setTodos}
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
              setEditTodo={setEditTodo}
            />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>{t("todoList")}</h2>
        <Button onClick={showModalAddForm}>
          <PlusOutlined />
        </Button>
      </div>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={todos}
        renderItem={(item) => (
          <List.Item>
            <Card
              style={{ justifyContent: "center" }}
              bodyStyle={{ padding: 10 }}
              rowcount="5"
              title={item.title}
              actions={[
                <EditOutlined
                  onClick={() => {
                      setEditTodo(item.id)
                    setIsModalVisible(true);
                    setWhichModal(1);
                  }}
                  key="edit"
                />,
                <CloseOutlined
                  onClick={() => {
                    const newArr = todos.filter((x) => x.title !== item.title);
                    setTodos(newArr);              
                    localStorage.setItem('todos', JSON.stringify(newArr))             
                  }}
                  key="close"
                />,
              ]}
            >
              <div style={{ height: 90 }}>
                <span>{item.date ? getDateHandler(item.date) : ""}</span>
                <p style={{ marginBottom: 0 }}>
                  {item.content.length > 28
                    ? item.content.substring(0, 28) + "..."
                    : item.content}
                </p>
                <div>{tagReturnHandler(item.status)}</div>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </>
  );
};

export default TodoList;
