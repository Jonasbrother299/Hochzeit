import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../config/firebaseConfig";
import "../styles/components/ContactForm.css";
import { Link } from "react-router-dom";
import transition from "../transition";
const ContactForm = () => {

  const [formData, setFormData] = useState({
    attendance: "", // 'coming' or 'notComing'
    selectedDays: [], // Array to store selected days (e.g., ['Freitag', 'Samstag'])
    name: "",
    email: "",
    message: "",
    foodChoice: "", // 'Normal', 'Vegetarisch', 'Vegan', 'Nichts'
    accommodationChoice: "", // 'Zelt', 'Auto', 'Hotel', 'Nein'
    supportChoice: "", // 'Donnerstag Aufbau', 'Sonntag Abbau', 'Kuchen', 'Büffet', 'Garnichts'
  });
  const [persons, setPersons] = useState([]);

  console.log(persons);
  const handleAddPerson = () => {
    setPersons([
      ...persons,
      {
        name: "",
        selectedDays: [],
        foodChoice: "",
        accommodationChoice: "",
        supportChoice: "",
      },
    ]);
  };
  const handleRemovePerson = (index) => {
    const updatedPersons = [...persons];
    updatedPersons.splice(index, 1);
    setPersons(updatedPersons);
  };
  const handlePersonDayChange = (personIndex, day) => {
    const updatedPersons = [...persons];
    const isSelected = updatedPersons[personIndex].selectedDays.includes(day);

    updatedPersons[personIndex].selectedDays = isSelected
      ? updatedPersons[personIndex].selectedDays.filter(
          (selectedDay) => selectedDay !== day
        )
      : [...updatedPersons[personIndex].selectedDays, day];

    setPersons(updatedPersons);
  };

  const handlePersonChange = (index, field, value) => {
    const updatedPersons = [...persons];
    updatedPersons[index][field] = value;
    setPersons(updatedPersons);
  };

  const handleNameChange = (index, newName) => {
    const updatedPersons = [...persons];
    updatedPersons[index].name = newName;
    setPersons(updatedPersons);
  };

  const handleAttendanceChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      attendance: value,
    }));
  };

  const handleDayChange = (day) => {
    // Toggle the selected day in the array
    setFormData((prevData) => {
      const isSelected = prevData.selectedDays.includes(day);

      return {
        ...prevData,
        selectedDays: isSelected
          ? prevData.selectedDays.filter((selectedDay) => selectedDay !== day)
          : [...prevData.selectedDays, day],
      };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (formData.attendance === "coming") {
        // Check if at least one day is selected
        if (formData.selectedDays.length === 0) {
          alert("Bitte wählen Sie mindestens einen Tag aus.");
          return; // Stop form submission if no day is selected
        }
      }
      const isAnyAdditionalPersonDayEmpty = persons.some((person) => person.selectedDays.length === 0);

       if (isAnyAdditionalPersonDayEmpty) {
        alert("Bitte wählen Sie mindestens einen Tag für jede zusätzliche Person aus.");
        return; // Stop form submission if any additional person has no day selected
      }
      // Create a new document for the initial person in the "Persons" collection
      const personsCollection = collection(firestore, "Persons");
      const initialPersonDocRef = await addDoc(personsCollection, {
        name: formData.name,
        email: formData.email,
        attendance: formData.attendance,
        selectedDays: formData.selectedDays,
        foodChoice: formData.foodChoice,
        accommodationChoice: formData.accommodationChoice,
        supportChoice: formData.supportChoice,
        message: formData.message,
        // Add other fields as needed
      });
  
      console.log("Initial person added with ID:", initialPersonDocRef.id);
  
      // Iterate over additional persons and add them to the database
      for (const person of persons) {
        if (person.name) { // Only add if the person has a name
          await addDoc(personsCollection, {
            name: person.name,
            selectedDays: person.selectedDays,
            foodChoice: person.foodChoice,
            accommodationChoice: person.accommodationChoice,
            supportChoice: person.supportChoice,
            referenceToInitialPerson: initialPersonDocRef.id, // Referencing the initial person
          });
        }
      }
    
      // Optionally, you can reset the form or show a success message
      setFormData({
        attendance: "",
        selectedDays: [],
        name: "",
        email: "",
        message: "",
        foodChoice: "",
        accommodationChoice: "",
        supportChoice: "",
      });
      setPersons([{ name: "", selectedDays: [], foodChoice: "", accommodationChoice: "", supportChoice: "" }]);
      window.location.href = "/";  
      // Show a success message to the user
      alert("Contact submitted successfully!");
    } catch (error) {
      console.error("Error adding contact:", error);
      // Handle the error, show an error message, or log the error as needed
      alert("Error submitting contact. Please try again.");
    }
  };
  return (
    <div>
      <div className="backgroundHeadline">
        <div className="grid__header">
          <h1 className="h1Contact">Zu und Absagen</h1>
          <Link to="/" className="ButtonToHome">
            Startseite
          </Link>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="wrapper">
          <label>
            <div className="label-container_zusage">
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "24px",
                  marginRight: "10px",
                }}
              >
                Ich sage zu
                <input
                  required
                  type="radio"
                  name="attendance"
                  value="coming"
                  checked={formData.attendance === "coming"}
                  onChange={handleAttendanceChange}
                  style={{ marginLeft: "15px" }}
                />
              </label>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "24px",
                  marginRight: "10px",
                }}
              >
                Ich sage ab
                <input
                  type="radio"
                  name="attendance"
                  value="notComing"
                  checked={formData.attendance === "notComing"}
                  onChange={handleAttendanceChange}
                  style={{ marginLeft: "15px" }}
                />
              </label>
            </div>
          </label>

          <br />
          {formData.attendance !== "coming" && (
            <div className="inputbox">
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <span className="inputbox__placeholder">Name</span>
            </div>
          )}
          {formData.attendance === "coming" && (
            <div>
              <div className="label-container">
                <div className="inputbox">
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <span className="inputbox__placeholder">Name</span>
                </div>

                <label>
                  Bin dabei an folgenden Tagen:
                  <div>
                    <label>
                      <input
                      
                        type="checkbox"
                        name="selectedDays"
                        value="Freitag"
                        checked={formData.selectedDays.includes("Freitag")}
                        onChange={() => handleDayChange("Freitag")}
                      />
                      Freitag
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                       
                       type="checkbox"
                        name="selectedDays"
                        value="Samstag"
                        checked={formData.selectedDays.includes("Samstag")}
                        onChange={() => handleDayChange("Samstag")}
                      />
                      Samstag
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        
                        type="checkbox"
                        name="selectedDays"
                        value="Sonntag"
                        checked={formData.selectedDays.includes("Sonntag")}
                        onChange={() => handleDayChange("Sonntag")}
                      />
                      Sonntag
                    </label>
                  </div>
                </label>
                <br />

                <div>
                  {/* Essen (Food) */}
                  <label>
                    Essen:
                    <select
                       required
                      name="foodChoice"
                      value={formData.foodChoice}
                      onChange={handleChange}
                    >
                      <option value="">Wähle eine Option</option>
                      <option value="Alles">Alles</option>
                      <option value="Vegetarisch">Vegetarisch</option>
                      <option value="Vegan">Vegan</option>
                      <option value="Nichts">Nichts</option>
                    </select>
                  </label>
                  <br />
                </div>
                <div>
                  {/* Übernachtung (Accommodation) */}
                  <label>
                    Übernachtung:
                    <select
                       required
                      name="accommodationChoice"
                      value={formData.accommodationChoice}
                      onChange={handleChange}
                    >
                      <option value="">Wähle eine Option</option>
                      <option value="Zelt">Zelt</option>
                      <option value="Auto">Auto</option>
                      <option value="Hotel Selbstständig">Hotel (selbstständig)</option>
                      <option value="Nein">Nein</option>
                    </select>
                  </label>
                  <br />
                </div>
                <div>
                  {/* Unterstützung (Support) */}
                  <label>
                    Unterstützung (freiwillig):
                    <select
                       required
                      name="supportChoice"
                      value={formData.supportChoice}
                      onChange={handleChange}
                    >
                      <option value="">Wähle eine Option</option>
                      <option value="Donnerstag Aufbau">
                        Donnerstag Aufbau
                      </option>
                      <option value="Sonntag Abbau">Sonntag Abbau</option>
                      <option value="Kuchen">Kuchen</option>
                      <option value="Büffet">Büffet</option>
                    </select>
                  </label>
                  <br />
                </div>
                {/* Email */}
              </div>

              <div className="inputbox">
                <input
                   required
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <span className="inputbox__placeholder">Email</span>
              </div>

              {/* Kommentar (Comment) */}
              <div className="inputbox">
                <textarea
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={false}
                />
                <span className="inputbox__placeholder">Kommentar</span>
              </div>
              <div>
                {persons.map((person, index) => (
                  <div className="label-container">
                    <div className="inputbox">
                      <input
                         required
                        type="text"
                        value={person.name}
                        onChange={(e) =>
                          handleNameChange(index, e.target.value)
                        }
                      />
                      <span className="inputbox__placeholder">
                        Person {index + 1}
                      </span>
                    </div>
                    <label>
                      Bin dabei an folgenden Tagen:
                      <div>
                        <label>
                          <input
                            type="checkbox"
                            name="selectedDays"
                            value="Freitag"
                            checked={person.selectedDays.includes("Freitag")}
                            onChange={() =>
                              handlePersonDayChange(index, "Freitag")
                            }
                          />
                          Freitag
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            type="checkbox"
                            name="selectedDays"
                            value="Samstag"
                            checked={person.selectedDays.includes("Samstag")}
                            onChange={() =>
                              handlePersonDayChange(index, "Samstag")
                            }
                          />
                          Samstag
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            type="checkbox"
                            name="selectedDays"
                            value="Sonntag"
                            checked={person.selectedDays.includes("Sonntag")}
                            onChange={() =>
                              handlePersonDayChange(index, "Sonntag")
                            }
                          />
                          Sonntag
                        </label>
                      </div>
                    </label>
                    <br />

                    <div>
                      {/* Essen (Food) */}
                      <label>
                        Essen:
                        <select
                           required
                          name="foodChoice"
                          value={persons.foodChoice}
                          onChange={handlePersonChange}
                        >
                          <option value="">Wähle eine Option</option>
                          <option value="Alles">Alles</option>
                          <option value="Vegetarisch">Vegetarisch</option>
                          <option value="Vegan">Vegan</option>
                          <option value="Nichts">Nichts</option>
                        </select>
                      </label>
                      <br />
                    </div>
                    <div>
                      {/* Übernachtung (Accommodation) */}
                      <label>
                        Übernachtung:
                        <select
                           required
                          name="accommodationChoice"
                          value={persons.accommodationChoice}
                          onChange={handlePersonChange}
                        >
                          <option value="">Choose an option</option>
                          <option value="Zelt">Zelt</option>
                          <option value="Auto">Auto</option>
                          <option value="Hotel Selbstständig">Hotel (selbstständig)</option>
                          <option value="Nein">Nein</option>
                        </select>
                      </label>
                      <br />
                    </div>
                    <div>
                      {/* Unterstützung (Support) */}
                      <label>
                      Unterstützung (freiwillig):
                        <select
                           required
                          name="supportChoice"
                          value={persons.supportChoice}
                          onChange={handlePersonChange}
                        >
                          <option value="">Choose an option</option>
                          <option value="Donnerstag Aufbau">
                            Donnerstag Aufbau
                          </option>
                          <option value="Sonntag Abbau">Sonntag Abbau</option>
                          <option value="Kuchen">Kuchen</option>
                          <option value="Büffet">Büffet</option>
                        </select>
                      </label>
                      <br />
                    </div>
                    {/* Email */}

                    <button onClick={() => handleRemovePerson(index)}>
                      Remove
                    </button>
                  </div>
                ))}
                <div className="plusbutton_container">
                <input
                  type="checkbox"
                  class="plus-minus"
                  onClick={handleAddPerson}
                /> <p>Weitere Person</p>
                </div>
                {/* <button onClick={handleAddPerson}>Add Person</button> */}
              </div>
              {/* Add new Person */}
            </div>
          )}
        </div>
        <div className="backgroundHeadline">
          <button className="Button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default transition(ContactForm);
