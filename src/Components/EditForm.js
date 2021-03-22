import { Input } from "antd";
import { Select } from "antd";

import React, { useState } from "react";

const EditForm = (props) => {
  const { Option } = Select;
  const {
    todos,
    editingId,
    editingTitle,
    editingContent,
    editingStatus,
    setEditingTitle,
    setEditingContent,
    setEditingStatus,
  } = props;
  var editingItem = todos.filter((x) => x.id === editingId)[0];

  const editingTitleHandler = (e) => {
    setEditingTitle(e.target.value)
  }
  const editingContentHandler = (e) => {
      setEditingContent(e.target.value)
  }
  const statusHandler = (value) => {
      setEditingStatus(value)
  }
  return (
    <div>
      {editingItem ? (<><Input
        onChange={editingTitleHandler}
        defaultValue={editingItem.title}
        placeholder="Title"
      ></Input>
      <Input.TextArea
        defaultValue={editingItem.content}
        onChange={editingContentHandler}
        style={{ marginTop: 10, marginBottom: 10 }}
        placeholder="Content"
        rows="5"
      ></Input.TextArea>
      <Select
        showSearch
        style={{ width: 200 }}
        defaultValue={editingItem.status}        
        placeholder="Select status"
        optionFilterProp="children"
        onChange={statusHandler}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value={0}>todo</Option>
        <Option value={1}>doing</Option>
        <Option value={2}>done</Option>
      </Select></>) : null}
    </div>
  );
};

export default EditForm;
