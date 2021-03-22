import { Calendar } from 'antd'
import React from 'react'

const CalendarTodo = () => {
    function onPanelChange(value, mode) {
        console.log(value.format('YYYY-MM-DD'), mode);
      }
    return (
        <Calendar onPanelChange={onPanelChange} />
    )
}

export default CalendarTodo
