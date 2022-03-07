import React from 'react';
import { Alphabets } from './components/Alphabets/Alphabets';
import styles from './App.module.scss';
import './index.css';

const App = () => {
  return (
    <div className={styles.root}>
      <Alphabets />
    </div>
  );
};

export default App;
