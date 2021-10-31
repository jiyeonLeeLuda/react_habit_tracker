import React, { Component } from 'react';
import HabitAddForm from './habitAddForm';
import Habit from './habit';

class Habits extends Component {
  render() {
    console.log('it render habits!');
    const {
      habits,
      handleDecrement,
      handleDelete,
      handleIncrement,
      handleAdd,
      handleResetAll,
    } = this.props;
    return (
      <div>
        <HabitAddForm onAdd={handleAdd} />
        <ul>
          {habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onDelete={handleDelete}
            />
          ))}
        </ul>
        <button
          type='button'
          className='habit-button reset-all-habit'
          onClick={handleResetAll}
        >
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;
