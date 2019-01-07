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

const Links = () => (
  <div className="section container" style={styles.main}>
    <p>Links</p>
    <a href="mailto:ykpteke@gmail.com" title="Mail"><img src="images/mail.png" alt="mail" style={styles.item}/></a>
    <a href="https://github.com/ykptke" target="_blank" title="Github"><img src="images/github.png" alt="github"style={styles.item}/></a>
    <a href="https://twitter.com/ykptke" target="_blank" title="Twitter"><img src="images/twitter.png" alt="twitter" style={styles.item}/></a>
    <a href="https://www.linkedin.com/in/ykpteke/" target="_blank" title="Linkedin"><img src="images/linkedin.png" alt="linkedin" style={styles.item}/></a>
  </div>
);

export default Links;
