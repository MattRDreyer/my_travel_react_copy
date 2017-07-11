import React, { Component } from 'react';
import Tablerow from '../tablerow/Tablerow';



class TableDisplay extends Component {  //this is jsx and what is returned to browser
  render() {
    return (
      <div id="travel-table-container" className="container-fluid">
        <table className="table table-bordered table-inverse">
        <thead>
        <tr>
          <th>Destination</th>
          <th>Capital</th>
          <th>Official Language</th>
          <th>Population (aprox.)</th>
          <th>National Bird</th>
        </tr>
      </thead>
      <tbody>
        <Tablerow destination = "Spain" capital = "Madrid" officialLanguage ="Spanish" population = "46.77 million" nationalBird = "Eagle"/>
        <Tablerow destination = "Italy" capital = "Rome" officialLanguage ="Italian" population = "59.83 million" nationalBird = "Bluebirds"/>
        <Tablerow destination = "Aruba" capital = "Oranjestad" officialLanguage ="Dutch" population = "102,911" nationalBird = "Aruban Burrowing Owl"/>
        <Tablerow destination = "Chile" capital = "Santiago" officialLanguage ="Spanish" population = "17.62 million" nationalBird = "Andean Condor"/>
      </tbody>
        </table>
      </div>

);
}
}

export default TableDisplay;
