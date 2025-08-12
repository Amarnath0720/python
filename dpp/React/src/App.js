import React from 'react';
import CohortDetails from './components/CohortDetails';

const cohorts = [
  { name: "React Basics", startDate: "2025-07-01", status: "ongoing" },
  { name: "Advanced Node", startDate: "2025-06-15", status: "completed" }
];

function App() {
  return (
    <div>
      <h2>Cohort Dashboard</h2>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;