import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import SellCard from "./SellCard";

function BodyMain() {
  const [activeLink, setActiveLink] = useState(1);
  const [searchText, setSearchText] = useState("");

  return (
    <div className="BodyMain">
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <Filter setActiveLink={setActiveLink} activeLink={activeLink} />
      <SellCard activeLink={activeLink} searchText={searchText} />
    </div>
  );
}

export default BodyMain;
