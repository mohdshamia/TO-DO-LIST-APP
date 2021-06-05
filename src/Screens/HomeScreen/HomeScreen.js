import { Component } from 'react';
import Button from '../../Components/Button/Button';
import ListItem from '../../Components/ListItem/ListItem';
import "./Styles.css";
import {data} from '../../data';

class HomeScreen extends Component {
    render() {
        return (
            <div className="inner-container">
                <h1 className="page-title">
                To Do List App
                </h1>

                <section className="input-section">
                    <input
                    className="add-task-input"
                        type="text" 
                        placeholder="Enter a new task..."
                    />
                    <Button
                        text="Add"
                        handleClick={()=>{}}
                    />
                </section>

                <section className='items-section'>{
                    data.map(item=><ListItem 
                            task={item.text} 
                            key={item.id}
                        />
                        )
                }</section>
            </div>
        );
    }
}

export default HomeScreen;
