

// import axios from 'axios';
// import { useEffect, useState } from 'react';

// function App() {
//   const [is, iss] = useState(null);
//   const fetch_data=()=>{
//     axios.get('https://www.nseindia.com/api/quote-derivative?symbol=NIFTY')
//       .then((response) => {
//         iss(response);
//         console.log(response)
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }

//   useEffect(() => {
//    // setInterval(fetch_data, 2000);
//    fetch_data();
//   }, []);

//   return (
//     <div className="App">
//       {/* {is ? (
//         is.slice(1).map((ele, index) => {
//           // Check if 'meta' exists before accessing 'companyName'
//           const companyName = ele.meta ? ele.meta.companyName : 'Company Name Not Available';

//           return (
//             <div key={index}>
//               <p>Company Name: {companyName}, PRICE: {ele.lastPrice}</p>
//             </div>
//           );
//         })
//       ) : (
//         <p>Loading...</p>
//       )} */}
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/data'); // Assuming your backend server is running on the same host
      const jsonData = await response.json();
      setData(jsonData);
      console.log('Fetched data:', jsonData); // Log the fetched data to the console
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div className="App">
      <h1>Data from Backend Server:</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
