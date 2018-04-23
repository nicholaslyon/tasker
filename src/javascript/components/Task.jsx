import React, {Component} from 'react';
import PropTypes from 'prop-types';
import List from "./List";
import Add from "./Add";

class Task extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, subTasks, onAddClicked } = this.props;

    return (
      <li className={'task-list__task'}>
        <div className="task-list__name">
          { name }
          {onAddClicked && <Add onClick={onAddClicked}/>}
        </div>
        {(subTasks && !!subTasks.length) && <List tasks={subTasks} />}
      </li>
    );
  }
}

Task.propTypes = {
  name: PropTypes.string.isRequired,
  subTasks: PropTypes.array,
  onAddClicked: PropTypes.func,
};

export default Task;
