import { useEffect, useRef, useState } from "react";
import "./App.css";
import Input_form from "./input_form/Input_form";

function App() {
  const [form_details_array , set_form_details_array] = useState([])

  const [form_details, set_form_details] = useState({
    
    firstname0: "",
    lastname0: "",
    email0: "",
    password0: "",
  });
  const [object_array, set_object_array] = useState(['loop']);

  const [error, set_error] = useState({
    fname0: "",
    lname0: "",
    email0: "",
    pass0: "",
  });

  const [n, set_n] = useState(1);

  const input_handler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    set_form_details({ ...form_details, [name]: value });
  };

  const add_button = () => {
    set_object_array([...object_array, 'loop']);
    set_form_details({
      ...form_details,
      ["firstname" + n]: "",
      ["lastname" + n]: "",
      ["email" + n]: "",
      ["password" + n]: "",
    });
    set_error({
      ...error,
      ["fname" + n]: "",
      ["lname" + n]: "",
      ["email" + n]: "",
      ["pass" + n]: "",
    });

    set_n(n + 1);

    

    
  };

  const submit_button = (e) => {

    e.preventDefault()

    const array_form_new_details = {...form_details, id: new Date().getTime().toString() }

     set_form_details_array([...form_details_array , array_form_new_details])

  
    object_array.map((curElem, i)=>{
     

      form_details['firstname'+i]=''
      form_details['lastname'+i]=''
      form_details['email'+i]=''
      form_details['password'+i]=''
       
    })
     
  };

  const delete_input_form = (e) =>{

    delete form_details['firstname'+e.target.name]
    delete form_details['lastname'+e.target.name]
    delete form_details['email'+e.target.name]
    delete form_details['password'+e.target.name]



    set_object_array((oldItems)=>{
      return oldItems.slice(0, -1)

    })


    set_n(n-1)

    


    
  }

  

  const Show_input_forms = () => {
    return object_array.map((curElem, i) => {
      if (
        form_details["firstname" + i].length < 5 &&
        form_details["firstname" + i].length !== 0
      ) {
        error["fname" + i] = "first name nust be 5 characters";
      } else {
        error["fname" + i] = "";
      }
      if (
        form_details["lastname" + i].length < 5 &&
        form_details["lastname" + i].length !== 0
      ) {
        error["lname" + i] = "last name name nust be 5 characters";
      } else {
        error["lname" + i] = "";
      }
      if (
        form_details["email" + i].length < 8 &&
        form_details["email" + i].length !== 0
      ) {
        error["email" + i] = "email nust be 8 characters";
      } else {
        error["email" + i] = "";
      }
      if (
        form_details["password" + i].length < 8 &&
        form_details["password" + i].length !== 0
      ) {
        error["pass" + i] = "password nust be 8 characters";
      } else {
        error["pass" + i] = "";
      }

      return (
        <Input_form
          key={i}
          fname_onchange={input_handler}
          lname_onchange={input_handler}
          email_onchange={input_handler}
          pass_onchange={input_handler}
          fname_value={form_details["firstname" + i]}
          lname_value={form_details["lastname" + i]}
          email_value={form_details["email" + i]}
          pass_value={form_details["password" + i]}
          fname_error={error["fname" + i]}
          lname_error={error["lname" + i]}
          email_error={error["email" + i]}
          password_error={error["pass" + i]}
          fname_name={"firstname" + i}
          lname_name={"lastname" + i}
          email_name={"email" + i}
          pass_name={"password" + i}
          del_onClick={delete_input_form}
          btn_name={i}
          
        />
      );
    });
  };

 

  useEffect(() => {

    console.log(form_details);
    console.log(form_details_array)
    
  }, [form_details, object_array, n, error,form_details_array ,delete_input_form]);

  return (
    <>
      <div className="input_form_main">
        <div className="input_form_box">
        <form action="" onSubmit={submit_button}>

          {Show_input_forms()}

          <div className="main_btns">
            <button type="submit" className="form_btn">
              submit
            </button>
            <button type="button" onClick={add_button} className="form_btn">
              Add member
            </button>
          </div>

          </form>
        </div>
      </div>
    </>
  );
}

export default App;
