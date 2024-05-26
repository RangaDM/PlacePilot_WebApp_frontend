import React, { useState } from "react";
import backimg from "../Assets/logic-back.svg";
import { FiDownload } from "react-icons/fi";
import axios from "axios";
import Loading from "./Loader/Loading";
import Papa from 'papaparse';
import { saveAs } from 'file-saver';

const Logic = () => {
  const [inputValue, setInputValue] = useState("");
  const [err, setErr] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const search = async () => {
    if (inputValue.trim() === "") {
      setErr(true);
      setTimeout(() => {
        setErr(false);
      }, 3000);
    } else {
      try {
        // console.log(inputValue);
        setLoading(true);
        const response = await axios.post("http://3.87.167.210:5000/search", {
          query: inputValue,
        }); // Send user input to backend
        console.log("Search result:", response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
    document
      .querySelector(".shops-section-bottom")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const downloadCSV = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'PlacePilot.csv');
  };

  return (
    <div className="work-section-wrapper">
      <div className="logic-background-image-container">
        <img src={backimg} alt="background" />
      </div>
      <div className="work-section-top">
        <p className="primary-subheading">Find Here</p>
        <h1 className="primary-heading">Just Search, We'll Sort !</h1>
        <p className="primary-text">
          Want a list of all Pizza Hut shops in your country? Search, and we'll
          sort it out for you, including key details. Easy finding, guaranteed.
        </p>
        {err && (
          <p style={{ color: "red", fontSize: "20px" }} className="error">
            Please enter a valid search term
          </p>
        )}
        <div className="contact-form-container">
          <input
            type="text"
            placeholder="Pizza hut in Kandy"
            style={{ fontSize: "18px", opacity: "0.5" }}
            onChange={handleInputChange}
          />
          <button onClick={search} className="secondary-button">
            Submit
          </button>
        </div>
      </div>
      <div className="shops-section-bottom">
        {loading ? (
          <Loading />
        ) : data.length === 0 ? (
          <p className="primary-text" style={{ fontSize: "20px" }}>
            Nothing to show 🤷‍♂️ Let's try a new query
          </p>
        ) : (
          <>
            <button className="download-button" onClick={downloadCSV}>
              Download <FiDownload />
            </button>
            {currentItems.map(
              ({
                placeId,
                storeName,
                address,
                category,
                phone,
                googleUrl,
                bizWebsite,
                ratingText,
                stars,
                numberOfReviews,
              }) => (
                <div key={placeId} className="shop-card">
                  <h2 className="shop-name">{storeName}</h2>
                  <p className="shop-address">{address}</p>
                  <p className="shop-category">{category}</p>
                  {phone && <p className="shop-phone">Phone: {phone}</p>}
                  <div className="shop-links">
                    <a
                      className="google-maps-link"
                      href={googleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Maps Link
                    </a>
                    {bizWebsite && (
                      <a className="website-link" href={bizWebsite}>
                        Website
                      </a>
                    )}
                  </div>
                  <div className="shop-rating">
                    <p className="rating-text">{ratingText}</p>
                    <p className="stars">Stars: {stars}</p>
                    <p className="reviews">
                      Number of Reviews: {numberOfReviews}
                    </p>
                  </div>
                </div>
              )
            )}
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className={page === currentPage ? "active" : ""}
                  >
                    {page}
                  </button>
                )
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Logic;
