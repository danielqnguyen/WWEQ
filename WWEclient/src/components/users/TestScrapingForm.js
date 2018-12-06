import React from 'react';
import TextInput from '../common/TextInput';

const Testform = props => {
  return (
    <React.Fragment>
      <div className="form-control">
        <TextInput
          name="url"
          label="url"
          type="text"
          value={props.url}
          onChange={props.onChange}
        />
        <button
          className="btn btn-success"
          onClick={props.onClick}
        >
          test
            </button>
      </div>
    </React.Fragment >
  );
}

export default Testform;
