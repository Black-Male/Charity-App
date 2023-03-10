import React, { useEffect, useState } from "react";
import Search from "./Search";
import List from "./List";

function Char() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState();
  const [search, setSearch] = useState("");
  //   CHARITY_API = https://api.globalgiving.org/api/public/projectservice/all/projects?api_key=3be0e996-0c2d-4b38-8441-ab85ccc4895d

  //  Organization => https://api.globalgiving.org/api/public/orgservice/all/organizations?api_key=3be0e996-0c2d-4b38-8441-ab85ccc4895d

  const CHARITY_API = "https://charity-app-server.vercel.app/organizations";
  useEffect(() => {
    fetch(CHARITY_API)
      .then((res) => {
        if (!res.ok) {
          throw new Error(console.log("Network Error"));
        }
        return res.json();
      })
      .then((items) => {
        setNewData(items.organization);
        setData(items.organization);
      })
      .catch((err) => console.error(err.message));
  }, []);

  useEffect(() => {
    if (search !== "") {
      let filteredData = data.filter((item) => {
        return (
          item.country.toLowerCase().includes(search) ||
          item.state.toLowerCase().includes(search) ||
          item.city.toLowerCase().includes(search)
        );
      });
      setNewData(filteredData);
    } else {
      setNewData(data);
    }
  }, [search]);
  return (
    <div className="charSection">
      <h1>PARTNERSHIP</h1>
      <Search
        setSearch={setSearch}
        search={search}
        setNewData={setNewData}
        data={data}
      />
      <div className="listSection">
        {newData &&
          newData.map((item, index) => {
            return <List list={item} key={index} />;
          })}
      </div>
    </div>
  );
}

export default Char;
