import { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, is_complete, onToggle, onDelete }) => {
  const buttonClass = is_complete ? 'tasks__item__toggle--completed'
    : 'tasks__item__toggle--incompleted';

  return (
    <li className="tasks__item">
      {/* WHEN click, CALL FUNTIONS BECAUSE THE PROPS */}
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => onToggle(id)}
      >
        {title}
      </button>

      {/*  DELETE TASK */}
      <button
        className="tasks__item__remove button"
        onClick={() => onDelete(id)}
      >
        x
      </button>
    </li>
  );
};


Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  is_complete: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
