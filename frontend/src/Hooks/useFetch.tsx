import { useState, useEffect, useCallback, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";

interface ParamType {
  id: string;
}

function useFetch() {
  const { navTheme, bodyTheme } = useContext(ThemeContext);
  let { id } = useParams<ParamType>();
  const history = useHistory();
  let contactObj = {
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    age: "",
    datee: "",
    phoneNumber: "",
    email: "",
    github: "",
    linkedin: "",
    category: "",
    gender: "",
  };

  const [inputData, setInputData] = useState(contactObj);

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (id) {
      fetch("http://localhost:3001/contacts/" + id)
        .then((response) => response.json())
        .then((data) => setInputData(data.Item));
    }
  }, [id]);

  // const contactList = useCallback(() => {
  //   fetch("http://localhost:3001/contacts")
  //     .then((response) => response.json())
  //     .then((data) => setContacts(data.Items));
  // }, [contacts, setContacts]);

  useEffect(() => {
    fetch("http://localhost:3001/contacts")
      .then((response) => response.json())
      .then((data) => setContacts(data.Items));
  }, [contacts]);

  function handleChange(event: any) {
    const { name, value } = event.target;
    setInputData((prevInputData) => ({ ...prevInputData, [name]: value }));
  }

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    const contactDetails = {
      title: capitalizeFirstLetter(inputData.title.toLowerCase()),
      firstName: capitalizeFirstLetter(inputData.firstName.toLowerCase()),
      middleName: capitalizeFirstLetter(inputData.middleName.toLowerCase()),
      lastName: capitalizeFirstLetter(inputData.lastName.toLowerCase()),
      age: inputData.age,
      datee: inputData.datee,
      phoneNumber: inputData.phoneNumber,
      email: inputData.email,
      github: inputData.github,
      linkedin: inputData.linkedin,
      category: inputData.category,
      gender: inputData.gender,
      navTheme: navTheme,
      bodyTheme: bodyTheme,
    };

    let phone = contacts.some(
      (contact: any) => contactDetails.phoneNumber === contact.phoneNumber
    );
    let email = contacts.some(
      (contact: any) => contactDetails.email === contact.email
    );

    console.log(phone);
    console.log(email);

    if (id) {
      const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactDetails),
      };
      fetch("http://localhost:3001/contacts/" + id, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
      setInputData(contactObj);
      history.push("/");
    } else if (!phone && !email) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactDetails),
      };
      fetch("http://localhost:3001/contacts", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
      setInputData(contactObj);
      history.push("/");
    } else {
      alert(
        "Contact Details for this Phone Number and Email-Id already Exists."
      );
    }
  }

  const handleDelete = (id: string) => {
    if (window.confirm("Are you Sure?")) {
      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };
      fetch("http://localhost:3001/contacts/" + id, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data.Items));
    }
  };

  return { contacts, handleDelete, handleChange, handleSubmit, inputData };
}

export { useFetch };
