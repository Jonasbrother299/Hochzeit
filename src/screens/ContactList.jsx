import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../config/firebaseConfig";

const ContactList = () => {
  const [initialPersons, setInitialPersons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all person documents
        const personsSnapshot = await getDocs(collection(firestore, "Persons"));
        
        // Filter out documents without 'referenceToInitialPerson' field to get initial persons
        const initialPersonsData = personsSnapshot.docs
          .filter((doc) => doc.data().referenceToInitialPerson === undefined)
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
            associatedPersons: [],
          }));
        
        // Build a map of initial persons for quick lookup
        const initialPersonsMap = initialPersonsData.reduce((acc, current) => {
          acc[current.id] = current;
          return acc;
        }, {});
        
        // Append associated persons to their respective initial person
        personsSnapshot.docs.forEach((personDoc) => {
          const personData = personDoc.data();
          if (personData.referenceToInitialPerson && initialPersonsMap[personData.referenceToInitialPerson]) {
            initialPersonsMap[personData.referenceToInitialPerson].associatedPersons.push({
              id: personDoc.id,
              ...personData,
            });
          }
        });
  
        // Convert the map back to an array
        const initialPersonsArray = Object.values(initialPersonsMap);
  
        setInitialPersons(initialPersonsArray);
      } catch (error) {
        console.error("Error fetching persons:", error);
      }
    };
  
    fetchData();
  }, []);
  // Console log the state to see if it is populated
  console.log("Initial persons state: ", initialPersons);

  return (
    <div>
      <h2>Contact List</h2>
      {initialPersons.map((initialPerson) => (
        <div key={initialPerson.id}>
          <h3>Initial Person: {initialPerson.name}</h3>
          <p>Email: {initialPerson.email}</p>
          <h4>Associated Persons:</h4>
          {initialPerson.associatedPersons.map((person) => (
            <div key={person.id}>
              <p>Name: {person.name}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ContactList;
