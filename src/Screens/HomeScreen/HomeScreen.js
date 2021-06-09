import Button from "../../Components/Button/Button";
import ListItem from "../../Components/ListItem/ListItem";
import "./Styles.css";
//import { data } from "../../data";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useState, useEffect } from "react";

function HomeScreen() {
  const [error, setError] = useState('');
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );

      setList(response.data.splice(0, 30));

    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="inner-container">
      <h1 className="page-title">To Do List App</h1>

      <section className="input-section">
        {/*We used onChange to handle input from user*/}
        <div className="input-box">
          <input
            className="add-task-input"
            type="text"
            placeholder="Enter a new task..."
            onChange={(event) => {
              setValue(event.target.value);
            }}
            value={value}
          />
          {error ? <span>{error}</span> : null}
        </div>
        <Button
          text="Add"
          handleClick={() => {
            if (value) {
              const newArr = [
                {
                  title: value,
                  /*import { v4 as uuidv4 } from 'uuid'; */
                  id: uuidv4(),
                },
                ...list,
              ];
              
              setError('')
              setList(newArr)
              setValue('')
            } else {
              setError("Please submit a task");
            }
          }}
        />
      </section>

      <section className="items-section">
        {list?.length ? (
          list.map((item) => (
            <ListItem
              task={item.title}
              key={item.id}
              handleDelete={() => {
                const filterdItems = list.filter(
                  (filterItem) => filterItem.id != item.id // true => return the item
                );
                
                setList(filterdItems)
              }}
            />
          ))
        ) : (
          <span>loading.....</span>
        )}
      </section>
    </div>
  );
}

export default HomeScreen;
