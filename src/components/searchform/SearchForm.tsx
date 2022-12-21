import React from "react";
import { TextField } from "@material-ui/core";

// Prop type
type Prop = {
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
};
const SearchForm = ({ setUserInput }: Prop) => {
  // User Input handler
  const onUserInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };
  // console.log(userInput, "input from search");

  return (
    <div>
      <TextField
        label="Enter recipe name"
        variant="standard"
        onChange={onUserInputHandler}
        helperText={`Suggetion:lamb, cake, salad`}
      />
    </div>
  );
};

export default SearchForm;
