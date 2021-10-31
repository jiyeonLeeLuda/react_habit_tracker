import React, { PureComponent } from 'react';

class NaviBar extends PureComponent {
  render() {
    const { totalCount } = this.props;
    console.log('naviBar');
    return (
      <nav className='navi-bar'>
        <i className='navi icon fas fa-leaf'></i>
        <span className='navi title'>Habit Tracker</span>
        <span className='navi habit-count'>{totalCount}</span>
      </nav>
    );
  }
}

export default NaviBar;
