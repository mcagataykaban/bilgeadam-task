import { Calendar, Badge } from "antd";
import "./CalendarTodo.css";
const CalendarTodo = (props) => {
function getListData(value) {
  let listData;
  for(let i=0; i <= todos.length; i++){
      let todo = todos[i]
      let dayOfTodo = new Date(todos[i]?.date).toLocaleDateString('tr-TR').substring(0,2)
    if (value.date() == dayOfTodo) {
        listData = [
            { type: "warning", content: todo.title },
          ];
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

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

  const { todos } = props;
    console.log(new Date(todos[0]?.date).toLocaleDateString('tr-TR').substring(0,2))
  return (
    <Calendar
      dateCellRender={dateCellRender}
      monthCellRender={monthCellRender}
    />
  );
};

export default CalendarTodo;
