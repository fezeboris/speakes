import React, { useEffect, useState } from "react";
import SpeakerUI from "./SpeakerUI";
import api from "./config";
// import { data } from './data'

function SpeakerList() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [ isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {

    try{
      await api.get().then((res)=>{
        console.log(data);
      setData(res.data)
      setIsLoading(false);
     })
    }catch(err){
         setIsError(true);
      setIsLoading(false);

    }
    // try {
    //   const response = await fetch(
    //     `${URL_SERVER}/speakers`
    //   );
    //   const data = await response.json();
    //   console.log(data);
    //   setData(data);
    //   setIsLoading(false);
    // } catch (error) {
    //   setIsError(true);
    //   setIsLoading(false);
    // }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  if (isLoading)
    return (
      <div
        style={{
          marginTop: "10rem",
          textAlign: "center",
          fontWeight: "bold",
          color: "green",
          fontSize: "5rem",
        }}
      >
        Loading....
      </div>
    );

  if (isError)
    return (
      <div style={{ color: "red" }} className="ui text">
        Nous avons rencontre une erreur
      </div>
    );

  return (
    <div className="ui grid container">
      {data.map((speaker, index) => {
        return (
          <>
       
            <div className="four wide column " key={index}>
              <SpeakerUI {...speaker} key={index} />
            </div>
          </>
        );
      })}
    </div>
  );
}

export default SpeakerList;
