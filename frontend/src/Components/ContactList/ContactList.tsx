import { useFetch } from "../../Hooks/useFetch";
import { Link } from "react-router-dom";
import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";
import { BiPhone } from "react-icons/bi";
import { Table } from "react-bootstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import TopBar from "../Navbar/TopBar";
import "./ContactList.scss";
import { ThemeContext } from "../../Context/ThemeContext";
import { useContext } from "react";

const ContactList = () => {
  const { contacts, handleDelete } = useFetch();
  const { bodyTheme } = useContext(ThemeContext);
  return (
    <div>
      <TopBar to="/add" />
      <Table
        striped
        bordered
        hover
        variant={bodyTheme}
        size="sm"
        className="table"
      >
        <thead>
          <tr>
            <th>Title</th>
            <th>Name</th>
            <th>Age</th>
            <th>DOB</th>
            <th>
              Phone <BiPhone />
            </th>
            <th>
              Email <SiGmail />
            </th>
            <th>
              Github <SiGithub />
            </th>
            <th>
              LinkedIn <SiLinkedin />
            </th>
            <th>Contact Type</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact: any) => {
            return (
              <tr>
                <td>{contact.title}</td>
                <td>
                  {contact.firstName} {contact.middleName} {contact.lastName}
                </td>
                <td>{contact.age}</td>
                <td>{contact.datee}</td>
                <td>{contact.phoneNumber}</td>
                <td>{contact.email}</td>
                <td>{contact.github}</td>
                <td>{contact.linkedin}</td>
                <td>{contact.category}</td>
                <td>{contact.gender}</td>
                <td>
                  <Link to={`/add/${contact.id}`}>
                    <AiFillEdit
                      style={{ cursor: "pointer" }}
                      // onClick={() => handleUpdate(contact.id)}
                    />
                  </Link>

                  <AiFillDelete
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(contact.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ContactList;
