import axios from "axios";
import { useState } from "react";

export default function Weather() {
  const [time, setTime] = useState([]);
  const [temp, setTemp] = useState([]);
  function getCountry(e) {
    axios
      .post("http://localhost:2020/weather", { countryCode: e.target.value })
      .then(
        (res) => (setTime([res.data.time]), setTemp([res.data.temperature_2m]))
      );
  }
  return (
    <div>
      <select onChange={getCountry}>
        <option value="mn">Ulaanbaatar</option>
        <option value="ru">Moscow</option>
        <option value="ch">Beiging</option>
      </select>

      <div className="d-flex">
        {time.length > 0 &&
          temp.length > 0 &&
          temp.map((tem, i) =>
            time.map((hour, id) => {
              if (i == id) {
                return (
                  <div>
                    {hour}
                    {tem}
                  </div>
                );
              }
            })
          )}
      </div>
    </div>
  );
}
