import React, {Component} from "react";
// import logo from './logo.svg';
import './App.css';
import TodoList from "../todo-list";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";


export default class App extends Component {
    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Make Awesome App', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3}
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };

    addItem = (text) => {
      //
      console.log('Added', text);
    };

    render() {
        return (
            <div className='todo-app'>
                <AppHeader todo={1} done={3}/>
                <div className='top-panel d-flex'>
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList todos={this.state.todoData}
                          onDeleted={this.deleteItem}/>

                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
}
