import Dropdown from "./Dropdown/Dropdown";
import { Label, Input, InputGroup } from "./HeroStyles";

const CurrencyInput = ({ sell, currency, value, setValue, setCurrency }) => {
  return (
    <InputGroup>
      <Label $absolute $bold>
        {sell ? "You Sell" : "You Buy"}
      </Label>

      <Input
        type="number"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />

      <Dropdown currency={currency} setCurrency={setCurrency} />
    </InputGroup>
  );
};

export default CurrencyInput;
