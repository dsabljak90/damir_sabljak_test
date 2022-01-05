import { useState } from "react";
import Table from "./table";
export default function Form(props) {
  /* These 4 variables taking value from input */
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [telephone, setTelephone] = useState("");
  const [note, setNote] = useState("");
  /* These 4 setting output in table */
  const [id, setId] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [finalnote, setFinalNote] = useState("");

  function handleClick(e) {
    e.preventDefault();
    setId(`${name.toUpperCase()}_${surname.toUpperCase()}`);
    setFullname(`${name} ${surname}`);
    phoneNumber(telephone);
    setFinalNote(note);
  }

  function phoneNumber(
    str
  ) /* function checking and setting the correct format of phone number. It's called on click */ {
    let phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(
      str
    );
    let outputNum = String(str).replace(/(.)(?=(\d{3})+$)/g, "$1 ");
    let call = outputNum.substring(0, 4);
    let callTwo = outputNum.substring(0, 3);
    if (call != "+420" && callTwo !== "420") {
      setPhone(`+420 ${outputNum}`);
    } else if (callTwo == "420") {
      setPhone(`+${outputNum}`);
    } else {
      let finalPhone = outputNum;
      setPhone(`${outputNum}`);
    }
  }

  return (
    <div className="formForUser">
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={(name) => setName(name.target.value)}
          />
        </label>
        <label>
          Surname:
          <input
            type="text"
            name="surname"
            onChange={(event) => setSurname(event.target.value)}
          />
        </label>
        <label>
          Telephone:
          <input
            type="text"
            name="telephone"
            onChange={(event) => setTelephone(event.target.value)}
          />
        </label>
        <label>
          Note:
          <textarea
            type="text"
            name="name"
            onChange={(event) => setNote(event.target.value)}
          />
        </label>
        <input type="submit" value="Send" name="Send" onClick={handleClick} />
      </form>
      <Table id={id} name={fullname} telephone={phone} note={finalnote} />
    </div>
  );
}
