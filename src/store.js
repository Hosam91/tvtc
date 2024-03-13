// // MyContext.js
// import React, {createContext, useState } from 'react';
// import axios from 'axios';
// // Create a context object
//  const MyContext = createContext();


// // Create a provider component
// export const MyProvider = ({ children }) =>
// {
    
//     const baseUrl=`http://89.116.152.54:8000`
//   // Define the state or any data you want to share
//     const [value, setValue] = useState('Initial Value');
    
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
  
//   const fetchData = async (endPoint) =>
//   {
//     setLoading(true);
//       try {
//         const response = await axios.get(`${baseUrl}/${endPoint}`,{
//           headers: {
//             'Content-Type': 'application/json',
//           }
//         })
//         setData(response.data);
//         setLoading(false);

//         return response.data
//       } catch (error)
//       {
//               setError(error);
//         setLoading(false);
//         throw error
//       }
//     }
   
    
  
//   // async (endPoint) =>
//   // {
//     //   try {
//     //     setLoading(true);
//     //     const response = await axios.get(`${baseUrl}/${endPoint}`);
//     //     setData(response.data);
//     //       setLoading(false);
//     //       console.log(data)
//     //   } catch (error) {
//     //     setError(error);
//     //     setLoading(false);
//     //   }
//     // };
  
//     // const getCategories =fetchData

//   return (
//     <MyContext.Provider value={{ value, setValue,fetchData, data, loading, error  }}>
//       {children}
//     </MyContext.Provider>
//   );
// };

// // Create a custom hook to consume the context

// export const useMyContext = () => {
//   return React.useContext(MyContext);
// }


// MyContext.js
// import React, { createContext, useState, useContext, useEffect } from 'react';
// import axios from 'axios';

// // Create a context object
// const MyContext = createContext();

// // Create a provider component
// export const MyProvider = ({ children }) => {
//   const baseUrl = `http://89.116.152.54:8000`;

//   // Define the state or any data you want to share
//   const [value, setValue] = useState('Initial Value');
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchData = async (endPoint) => {
//     setLoading(true); // Start loading before the request
//     try {
//       const response = await axios.get(`${baseUrl}/${endPoint}`, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       setData(response.data);
//       setLoading(false);
//       return response.data;
//     } catch (error) {
//       setError(error);
//       setLoading(false);
//       throw error;
//     }
//   };

//   const sendQuestion = async (question, { rejectWithValue, dispatch }) =>
//   {
//      console.log(question)
//     try {
//       const response = await axios.post(`${baseUrl}/ai`, {question}, {
//         headers: {
//           'Content-Type': 'application/json'  
//         }
//       })
//        console.log(response)
//       return response
//     } catch (err) {
//       if (!err.response.ok) {
//         throw err
//       }
  
//       return rejectWithValue(err.response.data)
//     }
//   }

//   return (
//     <MyContext.Provider value={{ value, setValue, fetchData, data, loading, error,sendQuestion }}>
//       {children}
//     </MyContext.Provider>
//   );
// };

// // Create a custom hook to consume the context
// export const useMyContext = () => {
//   return useContext(MyContext);
// };
