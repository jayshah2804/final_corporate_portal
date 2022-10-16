import React, { useRef, useState } from "react";
import Records from "./Records";
import ReactPaginate from "react-paginate";
import "./Trips.css";
import { CSVLink } from "react-csv";

const TRIP_DATA = [
  {
    id: 1,
    driver_image: "",
    driver_name: "Jay Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "10/10/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "419 KM",
  },
  {
    id: 2,
    driver_image: "",
    driver_name: "Jay Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "09/16/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "196 KM",
  },
  {
    id: 3,
    driver_image: "",
    driver_name: "Jay Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "09/30/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 4,
    driver_image: "",
    driver_name: "Jay Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "09/26/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "76 KM",
  },
  {
    id: 5,
    driver_image: "",
    driver_name: "Jay Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "08/25/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "66 KM",
  },
  {
    id: 6,
    driver_image: "",
    driver_name: "Jay Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "08/25/2021",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "56 KM",
  },
  {
    id: 7,
    driver_image: "",
    driver_name: "Jay Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "07/25/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 8,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "06/25/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 9,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "08/25/2021",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 10,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "08/25/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 11,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "08/25/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 12,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "08/25/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 13,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "08/25/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 14,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "08/25/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 15,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "08/25/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 16,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "08/05/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 17,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "08/05/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 18,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "08/05/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 19,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "08/05/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 20,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "08/05/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 21,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "08/05/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 22,
    driver_image: "",
    driver_name: "Anil Chauhan",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "08/05/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 23,
    driver_image: "",
    driver_name: "Anil Dixit",
    car_info: "Alto, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "08/05/2019",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
  {
    id: 24,
    driver_image: "",
    driver_name: "Anil Deshmukh",
    car_info: "i10, GJ 01 SH 0987",
    journey_id: "SDFGT65657",
    trip_date: "10/15/2022",
    pickup_time: "01:00 PM",
    drop_time: "03:00 PM",
    total_trip_time: "02:00 Hrs",
    total_trip_km: "46 KM",
  },
];

const TRIP_TITLE = [
  "Driver Name",
  "Journey_ID",
  "Trip Date",
  "Pickup Start Time",
  "Drop End Time",
  "Total Trip Time",
  "Total Trip KM",
];

let myClick = false;
let prev_id = "1";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(7);
  const [filteredData, setFilteredData] = useState(TRIP_DATA);
  const startDateRef = useRef();
  const endDateRef = useRef();

  function formatDate(date = new Date(), format = "mm/dd/yy") {
    const map = {
      mm: date.getMonth() + 1,
      dd: date.getDate(),
      yy: date.getFullYear().toString(),
      yyyy: date.getFullYear(),
    };
    return format.replace(/mm|dd|yy|yyy/gi, (matched) => map[matched]);
  }

  function differenceInDays(date1, date2) {
    var Difference_In_Time =
      new Date(date2).getTime() - new Date(date1).getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return Difference_In_Days;
  }

  function formatToMMDDYYYYfromYYYYMMDD(inputDate) {
    var date = new Date(inputDate);
    return (
      date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
    );
  }

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  let currentRecords;
  // if (myClick) {
  currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);
  // } else {
  // currentRecords = filteredData;
  // }
  const nPages = Math.ceil(filteredData.length / recordsPerPage);

  let fromRecords = 0;
  if (currentPage === 1) fromRecords = 1;
  else fromRecords = (currentPage - 1) * recordsPerPage;
  let toRecords = 0;
  if (
    (myClick
      ? currentPage * recordsPerPage - (filteredData.length % recordsPerPage)
      : currentPage * recordsPerPage +
        recordsPerPage -
        (filteredData.length % recordsPerPage)) > filteredData.length
  )
    toRecords = filteredData.length;
  else toRecords = currentPage * recordsPerPage;
  if (toRecords === 0) fromRecords = 0;

  const filterButtonClickHandler = (e) => {
    document.getElementById(e.target.id).classList.add("selected");
    document.getElementById(prev_id).classList.remove("selected");
    prev_id = e.target.id;

    setCurrentPage(1);
    myClick = true;

    if (e.target.innerText === "Today") {
      let todayDate = formatDate();
      setFilteredData(TRIP_DATA.filter((data) => data.trip_date === todayDate));
    } else if (e.target.innerText === "This Week") {
      let todayDate = formatDate();
      setFilteredData(
        TRIP_DATA.filter(
          (data) => differenceInDays(data.trip_date, todayDate) <= 7
        )
      );
    } else if (e.target.innerText === "This Month") {
      let todayDate = formatDate();
      setFilteredData(
        TRIP_DATA.filter(
          (data) => differenceInDays(data.trip_date, todayDate) <= 31
        )
      );
    }
  };

  const dateChangeHandler = () => {
    if (startDateRef.current.value && endDateRef.current.value) {
      let startdate = formatToMMDDYYYYfromYYYYMMDD(startDateRef.current.value);
      let enddate = formatToMMDDYYYYfromYYYYMMDD(endDateRef.current.value);
      startdate = new Date(startdate);
      enddate = new Date(enddate);
      // console.log(startdate, enddate);
      setFilteredData(
        filteredData.filter(
          (data) =>
            new Date(data.trip_date) > startdate &&
            new Date(data.trip_date) < enddate
        )
      );
    }
  };

  const allDataButtonClickHandler = () => {
    myClick = false;
    setFilteredData(TRIP_DATA);
  };

  return (
    <div className="trips-details" id="trip-table">
      <div className="title">corporate shuttle trips</div>
      <div className="table-container">
        <div className="header">
          <div onClick={filterButtonClickHandler} className="filter-buttons">
            <button
              onClick={allDataButtonClickHandler}
              id="1"
              className="selected"
            >
              All Data
            </button>
            <button id="2">Today</button>
            <button id="3">This Week</button>
            <button id="4">This Month</button>
          </div>
          <div>
            <div onChange={dateChangeHandler} className="datepicker">
              <input
                placeholder="From Date"
                type="text"
                ref={startDateRef}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
              <input
                placeholder="To Date"
                type="text"
                ref={endDateRef}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
            </div>
            <CSVLink data={TRIP_DATA} className="export_csv">
              Export
            </CSVLink>
          </div>
        </div>
        <Records data={currentRecords} headers={TRIP_TITLE} />
        <div className="footer">
          <p>
            Showing {fromRecords} to {toRecords} of {filteredData.length}{" "}
            entries{" "}
          </p>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={(e) => setCurrentPage(e.selected + 1)}
            pageRangeDisplayed={3}
            pageCount={nPages}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeLinkClassName="active"
          />
          {/* <Pagination
                    nPages={nPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
