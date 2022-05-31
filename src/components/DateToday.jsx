import React from 'react';

function DateToday () {
  const time = new Date ();
  const day = ["Воскресенье","Понедельник","Вторник",
  "Среда","Четверг","Пятница","Суббота"];
  const month = ["января","февраля","марта","апреля","мая","июня",
  "июля","августа","сентября","октября","ноября","декабря"];
  const timeNow = day[time.getDay()]+" " + time.getDate()+ " " + month[time.getMonth()]
  + " " + time.getFullYear() + " г."

  return (
    <div className="time">
      <div id="date" className="date-item">
        <p>{timeNow}</p>
      </div>
    </div>
  )
}

export default DateToday;