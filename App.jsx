import PropTypes from "prop-types";

import styles from "./Shoppingcart.module.css";

const studentsData = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 20,
    grade: "A",
    courses: ["Math", "Physics"],
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    age: 21,
    grade: "B",
    courses: ["Chemistry", "Biology"],
  },
  {
    id: 3,
    firstName: "Mike",
    lastName: "Johnson",
    age: 19,
    grade: "C",
    courses: ["History", "English"],
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Williams",
    age: 22,
    grade: "A",
    courses: ["Computer Science", "Statistics"],
  },
];

const Student = ({ firstName, lastName, age, grade }) => {
  return (
    <div className={styles["student-root"]}>
      <h1>
        {firstName} {lastName}
      </h1>
      <h3> Age: {age}</h3>
      <h4> Grade: {grade}</h4>
    </div>
  );
};

Student.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
  grade: PropTypes.string,
};

const Students = () => {
  return (
    <div className={styles["students-root"]}>
      {studentsData.map((data) => {
        return <Student key={data.id} {...data} />;
      })}
    </div>
  );
};

export default Students;
