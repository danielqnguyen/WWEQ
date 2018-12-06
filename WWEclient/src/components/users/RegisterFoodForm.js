import React from 'react';
import TextInputWithValidation from '../common/TextInputWithValidation';
import TextInput from '../common/TextInput';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const RegisterFoodForm = props => {
  return (
    <React.Fragment>
      <PerfectScrollbar>
        <div className="test">
          <TextInputWithValidation
            name="name"
            label="name"
            type="text"
            value={props.name}
            placeholder="resturant name"
            onChange={props.onChange}
            isValid={props.nameValid}
            hintText="Please enter an name"
          />
          <TextInputWithValidation
            name="categories"
            label="categories"
            type="text"
            value={props.categories}
            placeholder="categories"
            onChange={props.onChange}
            isValid={props.categoriesValid}
            hintText="Please enter an categories"
          />
          <TextInput
            name="phone"
            label="phone"
            type="text"
            value={props.phone}
            placeholder="(123)123-1234"
            onChange={props.onChange}
          />
          <TextInput
            name="hours"
            label="hours"
            type="text"
            value={props.hours}
            placeholder="hours"
            onChange={props.onChange}
          />
          <TextInput
            name="website"
            label="website"
            type="text"
            value={props.website}
            placeholder="website"
            onChange={props.onChange}
          />
          <TextInputWithValidation
            name="address1"
            label="street address"
            type="text"
            value={props.address1}
            placeholder="address"
            onChange={props.onChange}
            isValid={props.address1Valid}
            hintText="Please enter an address"
          />
          <TextInput
            name="address2"
            label="street address 2 (optional)"
            type="text"
            value={props.address2}
            placeholder="address"
            onChange={props.onChange}
          />
          <div style={{ display: "inline-block" }}>
            <TextInputWithValidation
              name="city"
              label="city"
              type="text"
              value={props.city}
              placeholder="city"
              onChange={props.onChange}
              isValid={props.cityValid}
              hintText="Please enter an city"
            />
          </div>
          <div style={{ display: "inline-block" }}>
            <TextInputWithValidation
              name="state"
              label="state"
              type="text"
              value={props.state}
              placeholder="state"
              onChange={props.onChange}
              isValid={props.stateValid}
              hintText="Please enter an state"
            />
          </div>
          <div style={{ display: "inline-block" }}>
            <TextInputWithValidation
              name="zip"
              label="zip"
              type="text"
              value={props.zip}
              placeholder="zip"
              onChange={props.onChange}
              isValid={props.zipValid}
              hintText="Please enter an zip"
            />
          </div>
          <TextInput
            name="range"
            label="range"
            type="text"
            value={props.range}
            placeholder="range"
            onChange={props.onChange}
          />
          <TextInput
            name="rating"
            label="rating"
            type="text"
            value={props.rating}
            onChange={props.onChange}
          />
          <TextInput
            name="delivery"
            label="delivery"
            type="text"
            value={props.delivery}
            onChange={props.onChange}
            placeholder="yes or no"
          />
          <button
            style={{ width: 283 }}
            type="button"
            className="btn btn-primary btn-block mt-4"
            onClick={props.onClick}
          >
            Submit
      </button>
        </div>
      </PerfectScrollbar>
    </React.Fragment>
  );
}

export default RegisterFoodForm;