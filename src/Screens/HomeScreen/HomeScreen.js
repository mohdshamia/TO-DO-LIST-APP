
import ListItem from "../../Components/ListItem/ListItem";
//import { data } from "../../data";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import {useState, useEffect,} from "react";
import Button from "../../Components/Button/Button";
import {ErrorMessage, Icon, InnerContainer, InputBox, ItemsSection, StyledLink, Section, StyledInput, Title} from "./Styles";
import Circle from "../../Components/Circle/Circle";


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
    <InnerContainer>
      <Title>To Do List App</Title>

      <Section>
        {/*We used onChange to handle input from user*/}
        <InputBox>
          <StyledInput
            placeholder="Enter a new task..."
            onChange={(event) => {
              setValue(event.target.value);
            }}
            value={value}
          />
          {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        </InputBox>
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
      </Section>

      <ItemsSection as={'section'}>
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
      </ItemsSection>

 {/*     <Circle to={"/"} as={StyledLink} fontSize={18} size={200} color={'#ddd'} background={"#000"} progress={70}/>
      <Circle fontSize={18} size={200} color={'#ddd'} background={"#000"} progress={70}/>
      <Circle fontSize={18} size={200} color={'#ddd'} background={"#000"} progress={70}/>
      <Circle fontSize={18} size={200} color={'#ddd'} background={"#000"} progress={70}/>
      <Circle fontSize={18} size={200} color={'#ddd'} background={"#000"} progress={70}/>
      <Circle fontSize={18} size={200} color={'#ddd'} background={"#000"} progress={70}/>
      <Circle fontSize={18} size={200} color={'#ddd'} background={"#000"} progress={70}/>
      <Circle fontSize={18} size={200} color={'#ddd'} background={"#000"} progress={70}/>
   */}

        <StyledLink  to="#">
            <Icon viewBox="0 0 20 20">
                <path d="M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1 1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z"/>
            </Icon>
            <label>Hovering my parent changes my style!</label>
        </StyledLink>
    </InnerContainer>
  );
}

export default HomeScreen;
