import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

export const InputField = ({inputValue, onChange, changeCity}) => (
    <Fragment>
        <label className="d-block text-center mt-3" htmlFor="location">YOUR LOCATION</label>
        <div className="input-group my-3 mx-auto" style={{width:'17rem'}}>
            <input
                type="text"
                className="form-control"
                placeholder="Enter your city"
                id="location"
                onChange={onChange}
                value={inputValue}
            />
            <div className="input-group-append">
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={()=>changeCity(inputValue)}
                >
                    Search
                </button>
            </div>
        </div>
    </Fragment>
);


InputField.propTypes = {
    inputValue: PropTypes.string,
    onChange: PropTypes.func,
    changeCity: PropTypes.func
};





