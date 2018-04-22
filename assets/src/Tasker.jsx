import React, {Component} from 'react';
import PropTypes from 'prop-types';
import List from "./components/List";

class Tasker extends Component {
  constructor(props) {
    super(props);

    // vars
    this.input = null;

    // function binding
    this.onTaskAdd = this.onTaskAdd.bind(this);

    // start state
    this.state = {
      tasks: [],
    }
  }

  onTaskAdd(evt) {
    // stop page refresh
    evt.preventDefault();

    // set new state
    this.setState({ tasks: [this.input.value, ...this.state.tasks]});

    // clear value
    // TODO - this part of state?
    this.input.value = '';
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
          />
        }
      </div>
    );
  }
}

Tasker.propTypes = {};

export default Tasker;
