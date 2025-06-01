const students = [
    { name: "Arun", course: "react" },
    { name: "Arya", course: "node" },
    { name: "Ravi", course: "react" },
]

const grouped = {}

for (const student of students) {
  const course = student.course;
  if (!grouped[course]) {
    grouped[course] = [];
  }
  grouped[course].push(student.name);
}
console.log(grouped);
