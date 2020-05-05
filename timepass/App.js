import React from 'react';

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeofdat;

  if (hours < 12){
    timeofdat = "Good morning"
  }
  else{
    timeofdat = "Good night"
  }

  const styles = {
    color: "#FF8C00", 
    backgroundColor: "#FFC200"
  }
  return (
    <div>
      <h1 style={styles}>{timeofdat}</h1>
    </div>
    );
}

export default App;
