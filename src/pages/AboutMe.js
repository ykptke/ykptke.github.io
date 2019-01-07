import React from 'react';

const styles = {
  main: {
    textAlign: 'center',
    backgroundColor: '#282c34',
    color: 'white',
  },
  photo: {
    width: 'calc(50px + 25vmin)'
  }
};

const AboutMe = () => (
  <div className="section container" style={styles.main}>
    <img src="images/me.jpg" alt="Yakup Teke" style={styles.photo}/>
    <p>Hello!</p>
    <p>My name is Yakup. I'm a Javascript Developer living in Ankara, TR.</p>
  </div>
);

export default AboutMe;
