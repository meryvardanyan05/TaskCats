import React, { useState, useEffect } from "react";

export default function CatImages(){
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1 ");
      res
        .json()
        .then(res => setData(res))
        .catch(err => setErrors(err));
    }
    fetchData();
    console.log(data)
  }, []);


  return (
    <>
    
    <div className="container">
      {hasError && <span>Has error: {JSON.stringify(hasError)}</span>}
      {data.map((item,key) => (<img key={item.id} className="catImage" src={item.url} alt="cat photos" />))}
    </div>
    
    <div>
        <input type="button" value="load more" />
      </div>
    </>

    
  );
};
