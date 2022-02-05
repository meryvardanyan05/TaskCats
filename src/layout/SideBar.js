import React, { useState, useEffect } from "react";


export default function SideBar(){

    const [hasError, setErrors] = useState(false);
    const [data, setData] = useState([]);
    const [menuList,setMenuList] = useState()
  
    useEffect(() => {
      async function fetchData() {
        const res = await fetch("https://api.thecatapi.com/v1/categories");
        res
          .json()
          .then(res => setData(res))
          .catch(err => setErrors(err));
      }
  
      fetchData();
    }, []);


      function handleClick(e) {
        const nameSelection = e.currentTarget.text;
        setMenuList((menuList) => {
          return menuList.filter((item) => {
            if (item.category === nameSelection) {
              return console.log(item);
            }
            return null;
          });
        });
      }

    return(
        <nav className='sideBar'>
            <div className='sideBarContent'>
                <ul className='sideBarList'>
                {data.map((item,key) => 
                (  <li  key={item.id} className='sideBarListItem'>
                <a href="/" className='sideBarListItemLink' onClick={handleClick}>
                {item.name}
                </a>
            </li>)
                )}
                    <li className='sideBarListItem'>
                        <a href="/" className='sideBarListItemLink'>
                        </a>
                    </li>
                </ul> 
            </div>
        </nav>
    )
}