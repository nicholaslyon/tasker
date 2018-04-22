import React, {Component} from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks } = this.props;

    return (
      <ul className={'task-list'}>
        {tasks.map((task, idx) => {
          return <li key={`list_${idx}`} className={'task-list__task'}>{ task }</li>
        })}
      </ul>
    );
  }
}

List.propTypes = {};

export default List;
