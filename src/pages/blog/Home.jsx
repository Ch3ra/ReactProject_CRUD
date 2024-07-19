import React, { useEffect, useState } from "react";

import Layout from "../../components/Layout";
import Card from "./Blog Components/Card";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  // Read gardaii xum la mero vaii
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://react30.onrender.com/api/user/blog"
    );
    console.log(response);
    if (response.status === 200) {
      setData(response.data.data);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  
  return (
    <Layout>
       
      <div className="flex justify-center items-center flex-wrap space-x-6 mt-10 space-y-6">
        
         {data.map((a) => {
          return (
            <Link to={`/description/${a._id}`}>
              <Card data={a} />
            </Link>
          );
        })} 
      </div>
    
    </Layout>
  );
};

export default Home;
