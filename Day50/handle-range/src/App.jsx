import React, { useState } from 'react';

const App = () => {
  const [range, setRange] = useState({
    price_range: '',
    date: '',
    time:"",
    themecolor: ""
  });

  const { price_range, date, time, themecolor } = range;

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setRange((prevRange) => ({
      ...prevRange,
      [name]: value
    }));
  };

  return (
    <div>
      {/* Price range */}
      <div className="form-group">
        <label htmlFor="price_range">Price Range</label>
        <input
          type="range"
          name="price_range"
          id="price_range"
          min={0}
          max={100}
          value={price_range}
          onChange={handleChange}
        />
        <span>{price_range}</span>
      </div>

      {/* Date */}
      <div className="form-group">
        <label htmlFor="date">Select Date</label>
        <input
          type="datetime-local"
          name="date"
          id="date"
          min={"2025-07-15T00:00"}
          value={date}
          onChange={handleChange}
        />
        <span>{date}</span>
      </div>

      {/* Time */}
      <div className="form-group">
        <label htmlFor="date">Select time</label>
        <input
          type="time"
          name="time"
          id="time"
          value={date}
          min="02:00"
          max="08:00"
          onChange={handleChange}
        />
        <span>{time}</span>
      </div>
      {/* Theme */}
      <div className="form-group">
        <label htmlFor="date">Select color</label>
        <input
          type="color"
          name="color"
          id="color"
          value={themecolor}
          onChange={handleChange}
        />
        <span>{time}</span>
      </div>
    </div>
  );
};

export default App;
