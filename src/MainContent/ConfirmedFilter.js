import React from "react";
import PropTypes from "prop-types";

const ConfirmedFilter = props =>
  <div>
    <h2>Invitees</h2>
    <lable>
      <input
        type="checkbox"
        onChange={props.toggleFilter}
        cheked={props.isFiltered}
      />{" "}
      Hide those who haven't responded
    </lable>
  </div>;

ConfirmedFilter.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired
};

export default ConfirmedFilter;  
