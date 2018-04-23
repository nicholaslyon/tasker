import React, {Component} from 'react';
import PropTypes from 'prop-types';

import List from "./components/List";

import { generateUUID } from './utils';

class Tasker extends Component {
  constructor(props) {
    super(props);

    // vars
    this.input = null;

    // function binding
    this.onTaskAdd = this.onTaskAdd.bind(this);
    this.onAddClicked = this.onAddClicked.bind(this);

    // start state
    this.state = {
      tasks: [],
    }
  }

  onAddClicked() {
    console.log('clicked');
  }

  onTaskAdd(evt) {
    // stop page refresh
    evt.preventDefault();

    // process input
    const newTask = this.processNewTaskString(this.input.value.trim());

    // set new state
    this.setState({ tasks: [newTask, ...this.state.tasks]});

    // clear value
    // TODO - this part of state?
    this.input.value = '';
  }

  processNewTaskString(taskString) {
    // only single add
    if (taskString.indexOf('/') === -1) return { name: taskString, id: generateUUID() };

    // new section add
    const taskParts = taskString.split('/');
    return {
      name: taskParts[0].trim(),
      id: generateUUID(),
      subTasks: taskParts.splice(1).map((subTaskString) => {
        return {
          name: subTaskString.trim(),
          id: generateUUID(),
        }
      }),
    };
  }

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <h1>tasker</h1>
        <form onSubmit={this.onTaskAdd}>
          <input
            type="text"
            className={'tasker__input'}
            ref={ref => this.input = ref}
          />
        </form>
        {!!tasks.length &&
        <List
          tasks={tasks}
          onAddClicked={this.onAddClicked}
        />
        }
      </div>
    );
  }
}

Tasker.propTypes = {};

export default Tasker;
