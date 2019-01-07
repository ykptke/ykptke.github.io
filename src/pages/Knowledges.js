import React from 'react';

const styles = {
  main: {
    textAlign: 'center',
    backgroundColor: '#282c34',
    color: 'white',
  },
  item: {
    width: 100,
    margin: 5,
    backgroundColor: 'white',
  }
};

const Knowledges = () => (
  <div className="section container" style={styles.main}>
    <p>Knowledges</p>
    <img src="images/javascript.png" title="Javascript" alt="Javascript" style={styles.item}/>
    <img src="images/nodejs.png" title="NodeJS" alt="NodeJS" style={styles.item}/>
    <img src="images/meteorjs.png" title="MeteorJS" alt="MeteorJS" style={styles.item}/>
    <img src="images/reactjs.png" title="ReactJS" alt="ReactJS" style={styles.item}/>
    <img src="images/mongodb.png" title="MongoDB" alt="MongoDB" style={styles.item}/>
    <img src="images/graphql.png" title="GraphQL" alt="GraphQL" style={styles.item}/>
    <img src="images/python.png" title="Python" alt="Python" style={styles.item}/>
    <img src="images/docker.png" title="Docker" alt="Docker" style={styles.item}/>
  </div>
);

export default Knowledges;
