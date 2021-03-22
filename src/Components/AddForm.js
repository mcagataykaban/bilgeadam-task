import { Input } from "antd";
import { Select } from "antd";

import React from "react";

const AddForm = (props) => {
  const { Option } = Select;
  const {title, setTitle, content,setContent, status, setStatus} = props

  function onChange(value) {
    setStatus(value);
  }

  function onSearch(val) {
    console.log("search:", val);
  }
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const contentHandler = (e) => {
    setContent(e.target.value);
  };
  return (
    <div>
      <Input onChange={titleHandler} value={title} placeholder="Title"></Input>
      <Input.TextArea
        onChange={contentHandler}
        value={content}
        style={{ marginTop: 10, marginBottom: 10 }}
        placeholder="Content"
        rows="5"
      ></Input.TextArea>
      <Select
        showSearch
        style={{ width: 200 }}
        value={0}
        placeholder="Select status"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value={0}>todo</Option>
        <Option value={1}>doing</Option>
        <Option value={2}>done</Option>
      </Select>
    </div>
  );
};

export default AddForm;
