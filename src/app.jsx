import React, { Component } from 'react';

import './app.css';
import Habits from './components/habits';
import NaviBar from './components/naviBar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };
  handleIncrement = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++;
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };
  handleDecrement = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    // habits[index].count = count < 0 ? 0 : count;
    const habits = this.state.habits.map((item) => {
      const count = habit.count - 1;
      if (item.id === habit.id) {
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleResetAll = () => {
    //const habits = this.state.habits.map((item) => ({ ...item, count: 0 }));
    const habits = this.state.habits.map((item) => {
      if (item.count > 0) {
        return { ...item, count: 0 };
      }
      return item;
    });
    this.setState({ habits });
  };
  render() {
    const totalCount = this.state.habits.filter(
      (item) => item.count > 0
    ).length;
    console.log('app');
    return (
      <>
        <NaviBar totalCount={totalCount} />
        <Habits
          habits={this.state.habits}
          handleDecrement={this.handleDecrement}
          handleDelete={this.handleDelete}
          handleIncrement={this.handleIncrement}
          handleAdd={this.handleAdd}
          handleResetAll={this.handleResetAll}
        />
      </>
    );
  }
}

export default App;
