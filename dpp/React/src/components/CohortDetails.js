import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
  const statusStyle = {
    color: cohort.status === 'ongoing' ? 'green' : 'blue',
  };

  return (
    <div className={styles.box}>
      <h3 style={statusStyle}>{cohort.name}</h3>
      <dl>
        <dt>Start Date</dt>
        <dd>{cohort.startDate}</dd>
        <dt>Status</dt>
        <dd>{cohort.status}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;