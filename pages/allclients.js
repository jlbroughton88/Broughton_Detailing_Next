import React, { useEffect, useState } from "react";
import { useAppContext } from "./comps/context.js";
import fetch from "isomorphic-unfetch"
import "../public/static/css/allclients.scss";
import Navbar from "./comps/navbar";







const AllClients = (allClients) => {
  const { statusUrl } = useAppContext();
  const [clients, setClients] = useState([]);

  useEffect(() => {
    setClients(allClients);
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
            {clients.length !== 0 ? (
              clients.map(client => (
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

AllClients.getInitialProps = async({ req, query }) => {
  const protocol = req 
  ? `${req.headers["x-forwarded-proto"]};`
  : location.protocol
  const host = req ? req.headers["x-forwarded-host"] : location.host
  const pageRequest = `${protocol}//${host}/api/clients`
  const res = await fetch(pageRequest);
  const json = await res.json();
  return json
};



export default AllClients;
