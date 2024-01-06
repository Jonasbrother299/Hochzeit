import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../config/firebaseConfig";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contactsCollection = collection(firestore, "ContactForm");
        const querySnapshot = await getDocs(contactsCollection);

        const contactsData = querySnapshot.docs.map(async (doc) => {
          const contactData = {
            id: doc.id,
            ...doc.data(),
            persons: [],
          };

          // Fetch persons from the subcollection
          const personsCollection = collection(
            firestore,
            "ContactForm",
            doc.id,
            "persons"
          );
          const personsQuerySnapshot = await getDocs(personsCollection);

          contactData.persons = personsQuerySnapshot.docs.map((personDoc) => ({
            personId: personDoc.id,
            ...personDoc.data(),
          }));

          return contactData;
        });

        // Resolve the promises and set the state
        const resolvedContactsData = await Promise.all(contactsData);
        setContacts(resolvedContactsData);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Contact List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Attendance</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Food Choice</th>
            <th>Accommodation Choice</th>
            <th>Support Choice</th>
            <th>Persons</th>
            {/* Add more table headers for other fields */}
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.attendance}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.message}</td>
              <td>{contact.foodChoice}</td>
              <td>{contact.accommodationChoice}</td>
              <td>{contact.supportChoice}</td>
              <td>
                <tr>
                  {contact.persons &&
                    contact.persons.map((person, index) => (
                      <td key={index}>{person.name}</td>
                    ))}
                </tr>
              </td>
              {/* Add more table cells for other fields */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
