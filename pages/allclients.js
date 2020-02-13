import React, { useEffect, useState } from "react";
import { useAppContext } from "./comps/context.js";
import fetch from "isomorphic-unfetch"
import "../public/static/css/allclients.scss";
import Navbar from "./comps/navbar";




const AllClients = (allClients) => {
  const { statusUrl } = useAppContext();
  const [clients, setClients] = useState([]);

  useEffect(() => {
    console.log("CLIENTS ON CLIENT SIDE: ");
    console.log(allClients);
      setClients([allClients]);
    
//     if (statusUrl !== "") {
//       axios
//         .get(`${statusUrl}/api/getclients`)
//         .then(response => setClients([...response.data]))
//         .catch(err => console.log(err));
//     }
  }, [])
  // }, [statusUrl]);



  return (
    <div className="allMother">
      <div className="allMain">
        <section className="leftSect">
          <div className="headDiv">
            <h1 className="head">Sign Ups</h1>
          </div>
        </section>
        <section className="rightSect">
          <div className="rightSectChild">
            {console.log(clients)}
            {clients.length !== 0 ? (
              clients[0].json.map(client => (
                <div key={client.id} className="clientItem">
                  <h3 className="clientEmail">{client.email}</h3>
                </div>
              ))
            ) : (
              <div>
                <h3>No clients yet</h3>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

AllClients.getInitialProps = async(ctx) => {
  const res = await fetch("https://www.broughtondetailing.com/api/clients");
  console.log("getInitialProps res START")
  console.log(res)
  console.log("getInitialProps res END")
  const json = await res.json();

  return {json}
};



export default AllClients;
