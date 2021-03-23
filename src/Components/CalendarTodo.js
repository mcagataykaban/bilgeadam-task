import { Calendar, Badge } from "antd";
import "./CalendarTodo.css";

const CalendarTodo = (props) => {
  function getListData(value) {
    let listData = [];
    for (let i = 0; i <= todos.length; i++) {
      let todo = todos[i];
      let dateOfTodo = new Date(todos[i]?.date).toLocaleDateString("tr-TR");
      let dayOfTodo = dateOfTodo.substring(0, 2);
      dayOfTodo = parseInt(dayOfTodo);
      let monthOfTodo = parseInt(dateOfTodo.substring(3, 5));
      let yearOfTodo = parseInt(dateOfTodo.substr(6, 10));
      let newCalendarTodo = { type: "warning", content: todo?.title };
      if (
        value.date() === dayOfTodo &&
        value.month() === monthOfTodo - 1 &&
        value.year() === yearOfTodo
      ) {
        listData.push(newCalendarTodo);
      }
    }
    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  const { todos } = props;
  return <Calendar dateCellRender={dateCellRender} />;
};

export default CalendarTodo;
