import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import './App.css';

import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import { Pagination } from "./components/Pagination/Pagination";
import Navbar from "./components/Navbar/Navbar";
import Episodes from "./components/Pages/Episodes/Episodes";
import Locations from "./components/Pages/Locations";
import Banner from "./components/Banner/Banner";
import Episode from "./components/Pages/Episode/Episode";
import Character from "./components/Pages/Character/Character";


function App() {
  return (
    <Router>
      <div className="Navigation">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<Episode />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
    </Router>
  )
}
const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");



  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json())
      updateFetchedData(data);
    })()
  }, [api])

  return (
    <div>
      <Banner setPageNumber={setPageNumber} setSearch={setSearch} title="Rick and Morty" />
      <div className="container mt-5">
        <div className="row">
          <Filters
            setStatus={setStatus}
            setGender={setGender}
            setSpecies={setSpecies}
            setPageNumber={setPageNumber}
          />
          <div className="col-md-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 d-flex justify-content-center">
        <Pagination info={info} setPageNumber={setPageNumber} pageNumber={pageNumber} />
      </div>

    </div>
  );
}

export default App;
