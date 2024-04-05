import React, { useState } from "react";
import backimg from "../Assets/logic-back.svg";
import { FiDownload } from "react-icons/fi";
import axios from 'axios';

// const data = [
//   {
//     placeId: "ChIJY28yuMlR4joRKFDNYOPazNc",
//     address: "147 Avissawella Rd",
//     category: "Family-friendly",
//     phone: undefined,
//     googleUrl:
//       "https://www.google.com/maps/place/Mr+Kottu+Grand+-+Pannipitiya/data=!4m7!3m6!1s0x3ae251c9b8326f63:0xd7ccdae360cd5028!8m2!3d6.8458117!4d79.9511217!16s%2Fg%2F11sgc_l4ww!19sChIJY28yuMlR4joRKFDNYOPazNc?authuser=0&hl=en&rclk=1",
//     bizWebsite: undefined,
//     storeName: "Mr Kottu Grand - Pannipitiya",
//     ratingText: "3.7 stars 930 Reviews",
//     stars: 3.7,
//     numberOfReviews: 930,
//   },
//   {
//     placeId: "ChIJvfDKJCxn4zoR47f46UGGRNI",
//     address: "2 Colombo St",
//     category: "Sri Lankan",
//     phone: undefined,
//     googleUrl:
//       "https://www.google.com/maps/place/Zam+Zam+Hotel/data=!4m7!3m6!1s0x3ae3672c24caf0bd:0xd2448641e9f8b7e3!8m2!3d7.2941946!4d80.6388745!16s%2Fg%2F11h21q7q0t!19sChIJvfDKJCxn4zoR47f46UGGRNI?authuser=0&hl=en&rclk=1",
//     bizWebsite: undefined,
//     storeName: "Zam Zam Hotel",
//     ratingText: "5.0 stars 1 Reviews",
//     stars: 5,
//     numberOfReviews: 1,
//   },
//   {
//     placeId: "ChIJKarAH4NP4joRuAr1nF8-BQ0",
//     address: "319 Colombo - Horana Rd",
//     category: "Restaurant",
//     phone: "319 Colombo - Horana Rd",
//     googleUrl:
//       "https://www.google.com/maps/place/Mr.Kottu+Grand+-+Piliyandala/data=!4m7!3m6!1s0x3ae24f831fc0aa29:0xd053e5f9cf50ab8!8m2!3d6.7972609!4d79.9311238!16s%2Fg%2F11kj_bplf0!19sChIJKarAH4NP4joRuAr1nF8-BQ0?authuser=0&hl=en&rclk=1",
//     bizWebsite: undefined,
//     storeName: "Mr.Kottu Grand - Piliyandala",
//     ratingText: "3.3 stars 279 Reviews",
//     stars: 3.3,
//     numberOfReviews: 279,
//   },
//   {
//     placeId: "ChIJMT_5oHvT-joRGHNJQp_ECIs",
//     address: "PMGQ+9M7, Gnanasuriyam Square 2",
//     category: "Fast Food",
//     phone: undefined,
//     googleUrl:
//       "https://www.google.com/maps/place/Mr+Kottu/data=!4m7!3m6!1s0x3afad37ba0f93f31:0x8b08c49f42497318!8m2!3d7.725917!4d81.6891585!16s%2Fg%2F11lkwfdh6y!19sChIJMT_5oHvT-joRGHNJQp_ECIs?authuser=0&hl=en&rclk=1",
//     bizWebsite: undefined,
//     storeName: "Mr Kottu",
//     ratingText: "3.8 stars 44 Reviews",
//     stars: 3.8,
//     numberOfReviews: 44,
//   },
//   {
//     placeId: "ChIJQeZAMEhZ4joRkPRrFOynhGM",
//     address: "540 Kandy Rd",
//     category: "Restaurant",
//     phone: undefined,
//     googleUrl:
//       "https://www.google.com/maps/place/KOTTULABS+-+Kelaniya/data=!4m7!3m6!1s0x3ae259483040e641:0x6384a7ec146bf490!8m2!3d6.9684375!4d79.9101875!16s%2Fg%2F11sm8_3dgn!19sChIJQeZAMEhZ4joRkPRrFOynhGM?authuser=0&hl=en&rclk=1",
//     bizWebsite: undefined,
//     storeName: "KOTTULABS - Kelaniya",
//     ratingText: "3.5 stars 159 Reviews",
//     stars: 3.5,
//     numberOfReviews: 159,
//   },
//   {
//     placeId: "ChIJY28yuMlR4joRKFDNYOPazNc",
//     address: "147 Avissawella Rd",
//     category: "Family-friendly",
//     phone: undefined,
//     googleUrl:
//       "https://www.google.com/maps/place/Mr+Kottu+Grand+-+Pannipitiya/data=!4m7!3m6!1s0x3ae251c9b8326f63:0xd7ccdae360cd5028!8m2!3d6.8458117!4d79.9511217!16s%2Fg%2F11sgc_l4ww!19sChIJY28yuMlR4joRKFDNYOPazNc?authuser=0&hl=en&rclk=1",
//     bizWebsite: undefined,
//     storeName: "Mr Kottu Grand - Pannipitiya",
//     ratingText: "3.7 stars 930 Reviews",
//     stars: 3.7,
//     numberOfReviews: 930,
//   },
//   {
//     placeId: "ChIJvfDKJCxn4zoR47f46UGGRNI",
//     address: "2 Colombo St",
//     category: "Sri Lankan",
//     phone: undefined,
//     googleUrl:
//       "https://www.google.com/maps/place/Zam+Zam+Hotel/data=!4m7!3m6!1s0x3ae3672c24caf0bd:0xd2448641e9f8b7e3!8m2!3d7.2941946!4d80.6388745!16s%2Fg%2F11h21q7q0t!19sChIJvfDKJCxn4zoR47f46UGGRNI?authuser=0&hl=en&rclk=1",
//     bizWebsite: undefined,
//     storeName: "Zam Zam Hotel",
//     ratingText: "5.0 stars 1 Reviews",
//     stars: 5,
//     numberOfReviews: 1,
//   },
//   {
//     placeId: "ChIJKarAH4NP4joRuAr1nF8-BQ0",
//     address: "319 Colombo - Horana Rd",
//     category: "Restaurant",
//     phone: "319 Colombo - Horana Rd",
//     googleUrl:
//       "https://www.google.com/maps/place/Mr.Kottu+Grand+-+Piliyandala/data=!4m7!3m6!1s0x3ae24f831fc0aa29:0xd053e5f9cf50ab8!8m2!3d6.7972609!4d79.9311238!16s%2Fg%2F11kj_bplf0!19sChIJKarAH4NP4joRuAr1nF8-BQ0?authuser=0&hl=en&rclk=1",
//     bizWebsite: undefined,
//     storeName: "Mr.Kottu Grand - Piliyandala",
//     ratingText: "3.3 stars 279 Reviews",
//     stars: 3.3,
//     numberOfReviews: 279,
//   },
//   {
//     placeId: "ChIJMT_5oHvT-joRGHNJQp_ECIs",
//     address: "PMGQ+9M7, Gnanasuriyam Square 2",
//     category: "Fast Food",
//     phone: undefined,
//     googleUrl:
//       "https://www.google.com/maps/place/Mr+Kottu/data=!4m7!3m6!1s0x3afad37ba0f93f31:0x8b08c49f42497318!8m2!3d7.725917!4d81.6891585!16s%2Fg%2F11lkwfdh6y!19sChIJMT_5oHvT-joRGHNJQp_ECIs?authuser=0&hl=en&rclk=1",
//     bizWebsite: undefined,
//     storeName: "Mr Kottu",
//     ratingText: "3.8 stars 44 Reviews",
//     stars: 3.8,
//     numberOfReviews: 44,
//   },
//   {
//     placeId: "ChIJQeZAMEhZ4joRkPRrFOynhGM",
//     address: "540 Kandy Rd",
//     category: "Restaurant",
//     phone: undefined,
//     googleUrl:
//       "https://www.google.com/maps/place/KOTTULABS+-+Kelaniya/data=!4m7!3m6!1s0x3ae259483040e641:0x6384a7ec146bf490!8m2!3d6.9684375!4d79.9101875!16s%2Fg%2F11sm8_3dgn!19sChIJQeZAMEhZ4joRkPRrFOynhGM?authuser=0&hl=en&rclk=1",
//     bizWebsite: undefined,
//     storeName: "KOTTULABS - Kelaniya",
//     ratingText: "3.5 stars 159 Reviews",
//     stars: 3.5,
//     numberOfReviews: 159,
//   },
//   {
//     placeId: "ChIJY28yuMlR4joRKFDNYOPazNc",
//     address: "147 Avissawella Rd",
//     category: "Family-friendly",
//     phone: undefined,
//     googleUrl:
//       "https://www.google.com/maps/place/Mr+Kottu+Grand+-+Pannipitiya/data=!4m7!3m6!1s0x3ae251c9b8326f63:0xd7ccdae360cd5028!8m2!3d6.8458117!4d79.9511217!16s%2Fg%2F11sgc_l4ww!19sChIJY28yuMlR4joRKFDNYOPazNc?authuser=0&hl=en&rclk=1",
//     bizWebsite: undefined,
//     storeName: "Mr Kottu Grand - Pannipitiya",
//     ratingText: "3.7 stars 930 Reviews",
//     stars: 3.7,
//     numberOfReviews: 930,
//   },
//   {
//     placeId: "ChIJvfDKJCxn4zoR47f46UGGRNI",
//     address: "2 Colombo St",
//     category: "Sri Lankan",
//     phone: undefined,
//     googleUrl:
//       "https://www.google.com/maps/place/Zam+Zam+Hotel/data=!4m7!3m6!1s0x3ae3672c24caf0bd:0xd2448641e9f8b7e3!8m2!3d7.2941946!4d80.6388745!16s%2Fg%2F11h21q7q0t!19sChIJvfDKJCxn4zoR47f46UGGRNI?authuser=0&hl=en&rclk=1",
//     bizWebsite: undefined,
//     storeName: "Zam Zam Hotel",
//     ratingText: "5.0 stars 1 Reviews",
//     stars: 5,
//     numberOfReviews: 1,
//   },
//   {
//     placeId: "ChIJKarAH4NP4joRuAr1nF8-BQ0",
//     address: "319 Colombo - Horana Rd",
//     category: "Restaurant",
//     phone: "319 Colombo - Horana Rd",
//     googleUrl:
//       "https://www.google.com/maps/place/Mr.Kottu+Grand+-+Piliyandala/data=!4m7!3m6!1s0x3ae24f831fc0aa29:0xd053e5f9cf50ab8!8m2!3d6.7972609!4d79.9311238!16s%2Fg%2F11kj_bplf0!19sChIJKarAH4NP4joRuAr1nF8-BQ0?authuser=0&hl=en&rclk=1",
//     bizWebsite: undefined,
//     storeName: "Mr.Kottu Grand - Piliyandala",
//     ratingText: "3.3 stars 279 Reviews",
//     stars: 3.3,
//     numberOfReviews: 279,
//   },
//   {
//     placeId: "ChIJKarAH4NP4joRuAr1nF8-BQ0",
//     address: "319 Colombo - Horana Rd",
//     category: "Restaurant",
//     phone: "319 Colombo - Horana Rd",
//     googleUrl:
//       "https://www.google.com/maps/place/Mr.Kottu+Grand+-+Piliyandala/data=!4m7!3m6!1s0x3ae24f831fc0aa29:0xd053e5f9cf50ab8!8m2!3d6.7972609!4d79.9311238!16s%2Fg%2F11kj_bplf0!19sChIJKarAH4NP4joRuAr1nF8-BQ0?authuser=0&hl=en&rclk=1",
//     bizWebsite: undefined,
//     storeName: "Mr.Kottu Grand - Piliyandala",
//     ratingText: "3.3 stars 279 Reviews",
//     stars: 3.3,
//     numberOfReviews: 279,
//   },
//   {
//     placeId: "ChIJKarAH4NP4joRuAr1nF8-BQ0",
//     address: "319 Colombo - Horana Rd",
//     category: "Restaurant",
//     phone: "319 Colombo - Horana Rd",
//     googleUrl:
//       "https://www.google.com/maps/place/Mr.Kottu+Grand+-+Piliyandala/data=!4m7!3m6!1s0x3ae24f831fc0aa29:0xd053e5f9cf50ab8!8m2!3d6.7972609!4d79.9311238!16s%2Fg%2F11kj_bplf0!19sChIJKarAH4NP4joRuAr1nF8-BQ0?authuser=0&hl=en&rclk=1",
//     bizWebsite: undefined,
//     storeName: "Mr.Kottu Grand - Piliyandala",
//     ratingText: "3.3 stars 279 Reviews",
//     stars: 3.3,
//     numberOfReviews: 279,
//   },
//   {
//     placeId: "ChIJMT_5oHvT-joRGHNJQp_ECIs",
//     address: "PMGQ+9M7, Gnanasuriyam Square 2",
//     category: "Fast Food",
//     phone: undefined,
//     googleUrl:
//       "https://www.google.com/maps/place/Mr+Kottu/data=!4m7!3m6!1s0x3afad37ba0f93f31:0x8b08c49f42497318!8m2!3d7.725917!4d81.6891585!16s%2Fg%2F11lkwfdh6y!19sChIJMT_5oHvT-joRGHNJQp_ECIs?authuser=0&hl=en&rclk=1",
//     bizWebsite: undefined,
//     storeName: "Mr Kottu",
//     ratingText: "3.8 stars 44 Reviews",
//     stars: 3.8,
//     numberOfReviews: 44,
//   },
//   {
//     placeId: "ChIJM7e05VZP4joRX-FS-jNh33c",
//     address: "RX85+77Q",
//     category: "Restaurant",
//     phone: "RX85+77Q",
//     googleUrl:
//       "https://www.google.com/maps/place/The+Kottu+Hub/data=!4m7!3m6!1s0x3ae24f56e5b4b733:0x77df6133fa52e15f!8m2!3d6.8156742!4d79.9581905!16s%2Fg%2F11sms1m4kp!19sChIJM7e05VZP4joRX-FS-jNh33c?authuser=0&hl=en&rclk=1",
//     bizWebsite: undefined,
//     storeName: "The Kottu Hub",
//     ratingText: "2.6 stars 5 Reviews",
//     stars: 2.6,
//     numberOfReviews: 5,
//   },
// ];

const Logic = () => {
  const [inputValue, setInputValue] = useState("");
  const [err, setErr] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [ data , setData ] = useState([]);

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
        const response = await axios.get('http://localhost:5000'); // Fetch data from port 3000
        console.log("Fetched data:", response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
    document.querySelector('.shops-section-bottom').scrollIntoView({ behavior: 'smooth', block: 'start' });
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
            style={{ fontSize: '18px', opacity: '0.5' }}
            onChange={handleInputChange}
          />
          <button onClick={search} className="secondary-button">
            Submit
          </button>
        </div>
      </div>
      <div className="shops-section-bottom">
        {data.length === 0 ? (
          <p className="primary-text" style={{fontSize:'20px'}}>Nothing to show 🤷‍♂️ Let's try a new query</p>
        ) : (
          <>
          <button className="download-button">Download  <FiDownload /></button>
            {currentItems.map(({ placeId, storeName, address, category, phone, googleUrl, bizWebsite, ratingText, stars, numberOfReviews }) => (
              <div key={placeId} className="shop-card">
                <h2 className="shop-name">{storeName}</h2>
                <p className="shop-address">{address}</p>
                <p className="shop-category">{category}</p>
                {phone && <p className="shop-phone">Phone: {phone}</p>}
                <div className="shop-links">
                  <a className="google-maps-link" href={googleUrl}>
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
            ))}
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageClick(page)}
                  className={page === currentPage ? 'active' : ''}
                >
                  {page}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Logic;
