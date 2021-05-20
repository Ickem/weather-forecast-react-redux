import React from 'react';
import PropTypes from 'prop-types';

export const ErrorText = ({error}) => (
    <div className="col m-2 text-center">
        <p>{error}</p>
    </div>
);


ErrorText.propTypes = {
  error: PropTypes.string
};
