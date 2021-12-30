// Requiring the module
import React, {useState, useEffect} from 'react'
import csvFilePath from '../Data/Product_Data.csv';
import * as Papa from 'papaparse';

function Excel() {
  const [products, setProduct] = useState([])
  useEffect(()=>{
    fetch( csvFilePath )
    .then( response => response.text() )
    .then( responseText => {
        // -- parse csv
        Papa.parse(responseText,{
          header: true,
          complete: (results) => {
            setProduct(results.data)
        }
      })
 
    });

  },[])
   
  
  return [products]
  
}
export default Excel;