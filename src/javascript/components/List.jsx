import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from "./Task";

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks, onAddClicked } = this.props;

    return (
      <ul className={'task-list'}>
        {tasks.map((task) => {
          return <Task {...task} key={task.id} onAddClicked={onAddClicked} />
        })}
      </ul>
    );
  }
}

List.propTypes = {
  tasks: PropTypes.array.isRequired,
  onAddClicked: PropTypes.func,
};

export default List;
