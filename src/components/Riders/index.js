import React, { useState } from "react";
import Overview from "../shared/Overview";
import Table from "../Tables/Table";

function RiderPage() {
  const [UIData] = useState(UI.overViewHeader);
  const [TableHeader] = useState(UI.table.header);
  const [riderUI] = useState({ ...UI });

  const [data, setDate] = useState([...riderData]);

  return (
    <>
      <h2>Riders</h2>
      <Overview overview={UIData} />
      {/* the main div  */}
      <div className="row  table-utils">
        <button className="btn btn-info">Add Riders</button>

        <form>
          <input type="search" placeholder="Search" />
        </form>
      </div>
      <div className="content-container">
        <Table tableHeader={TableHeader} data={data} UI={riderUI} />
      </div>
    </>
  );
}

export default RiderPage;

// component Label
const name = "Sacco";
// UI specifics props

const UI = {
  overViewHeader: ["Total Riders", "Deactivated", "Active"],
  table: {
    header: [
      "No.",
      "Name",
      "Status",
      "Rating",
      "Location",
      "Reports",
      "Actions"
    ]
  },
  modal: "Rider"
};

// mock Data

const riderData = [
  {
    name: "John Odhiambo",
    status: "Active",
    ratings: 4,
    location: "Oginga Street",
    reports: 3,
    actions: "Deactivate, Delete, Edit ",
    operationStatus: "Deactivated"
  },
  {
    name: "John Odhiambo",
    status: "Active",
    ratings: 4,
    location: "Oginga Street",
    reports: 3,
    actions: "Deactivate, Delete, Edit ",
    operationStatus: "Deactivated"
  },
  {
    name: "John Odhiambo",
    status: "Active",
    ratings: 4,
    location: "Oginga Street",
    reports: 3,
    actions: "Deactivate, Delete, Edit ",
    operationStatus: "Active"
  },
  {
    name: "John Odhiambo",
    status: "Active",
    ratings: 4,
    location: "Oginga Street",
    reports: 3,
    actions: "Deactivate, Delete, Edit ",
    operationStatus: "Deactivated"
  },
  {
    name: "John Odhiambo",
    status: "Active",
    ratings: 4,
    location: "Oginga Street",
    reports: 3,
    actions: "Deactivate, Delete, Edit ",
    operationStatus: "Deactivated"
  },
  {
    name: "John Odhiambo",
    status: "Active",
    ratings: 4,
    location: "Oginga Street",
    reports: 3,
    actions: "Deactivate, Delete, Edit ",
    operationStatus: "Active"
  }
];
