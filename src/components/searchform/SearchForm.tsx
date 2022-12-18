import React from "react";
import { TextField, Button } from "@material-ui/core";

// Prop type declaration
type PropType = {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;

  onSearchHandler: React.MouseEventHandler<HTMLButtonElement>;
};
const SearchForm = ({ setUserInput, onSearchHandler, userInput }: PropType) => {
  // User Input handler
  const onUserInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };
  // console.log(userInput, "input from search");

  return (
    <div>
      <form action="">
        {/* <label htmlFor="">Enter recipe name:</label> */}
        <TextField
          label="Please enter recipe name"
          variant="outlined"
          onChange={onUserInputHandler}
          value={userInput}
          helperText={`Suggetion:${userInput}`}
        />
        <Button variant="text" color="primary" onClick={onSearchHandler}>
          Search
        </Button>
        {/* <input type="text" onChange={onUserInputHandler} /> */}
        {/* <Button onClick={onSearchHandler}>Search</Button> */}
      </form>
    </div>
  );
};

export default SearchForm;
