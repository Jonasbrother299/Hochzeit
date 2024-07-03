import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../config/firebaseConfig';

const ContactList = () => {
  const [attendees, setAttendees] = useState([]);
  const [counts, setCounts] = useState({
    Friday: 0,
    Saturday: 0,
    Vegetarian: 0,
    Everything: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(firestore, 'Persons'));
      const allEntries = [];
      const uniqueAttendees = new Set();
      const foodCounts = {
        Vegetarian: new Set(),
        Everything: new Set()
      };

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const uniqueKey = data.email || `${data.name}-${data.message ? data.message.substring(0, 10) : 'No Message'}`; 
        allEntries.push({
          ...data,
          selectedDays: data.selectedDays.join(', ')
        });

        // Increment day counts only once per person per day
        data.selectedDays.forEach(day => {
          uniqueAttendees.add(uniqueKey + day);
        });

        // Check for 'Vegetarian' in any form within the food choice and count uniquely
        if (data.foodChoice.toLowerCase().includes('vege')) {
          foodCounts.Vegetarian.add(uniqueKey);
        }

        // Check for 'Alles' and count uniquely
        if (data.foodChoice.toLowerCase() === 'alles') {
          foodCounts.Everything.add(uniqueKey);
        }
      });

      setAttendees(allEntries);
      setCounts({
        Friday: Array.from(uniqueAttendees).filter(id => id.includes('Freitag')).length,
        Saturday: Array.from(uniqueAttendees).filter(id => id.includes('Samstag')).length,
        Vegetarian: foodCounts.Vegetarian.size,
        Everything: foodCounts.Everything.size,
      });
    };

    fetchData();
  }, []);



  return (
    <div style={{ margin: '20px' }}>
      <h2>Contact List</h2>
      <table style={styles.table}>
        <thead style={styles.thead}>
          <tr>
            <th style={styles.th}>#</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Coming Days</th>
            <th style={styles.th}>Food Choice</th>
            <th style={styles.th}>Support Choice</th> {/* Added new header for Support Choice */}
          </tr>
        </thead>
        <tbody>
          {attendees.map((person, index) => (
            <tr key={index} style={styles.tr}>
              <td style={styles.td}>{index + 1}</td>
              <td style={styles.td}>{person.name}</td>
              <td style={styles.td}>{person.email}</td>
              <td style={styles.td}>{person.selectedDays}</td>
              <td style={styles.td}>{person.foodChoice}</td>
              <td style={styles.td}>{person.supportChoice}</td> {/* Added new row for Support Choice */}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={styles.countsContainer}>
        <p style={styles.countText}>Count for Friday: {counts.Friday}</p>
        <p style={styles.countText}>Count for Saturday: {counts.Saturday}</p>
        <p style={styles.countText}>Vegetarian Count: {counts.Vegetarian}</p>
        <p style={styles.countText}>Everything Count: {counts.Everything}</p>
      </div>
    </div>
  );
};
const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  thead: {
    backgroundColor: '#f2f2f2',
  },
  th: {
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'left',
  },
  tr: {
    borderBottom: '1px solid #ddd',
  },
  td: {
    padding: '10px',
  },
  countsContainer: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f8f8f8',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  countText: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    margin: '5px 0',
  }
};

export default ContactList;