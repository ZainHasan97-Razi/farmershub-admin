import debounce from "lodash.debounce";
import React, { useState } from "react";
import { useEffect } from "react";
import AdsComponent from "../../components/AdsComponent";
import DatePickerCard from "../../components/cards/DatePickerCard";
import SearchField from "../../components/inputs/SearchField";
import { apiRoutes } from "../../lib/contants";
import { onBottom } from "../../lib/helper/detectScroll";
import { formatDate } from "../../lib/helper/helper";
import { getRequest, postRequest } from "../../services/axios/axiosMethods";

const AdsManagementPage = () => {
  const limit = 20;
  const [offset, setOffset] = useState(0);
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterAds, setfilterAds] = useState(false);
  const [pendingCompleted, setPendingCompleted] = useState(false);
  const [activeCompleted, setActiveCompleted] = useState(false);
  const [expiredCompleted, setExpiredCompleted] = useState(false);
  const [pendingAds, setPendingAds] = useState([]);
  const [activeAds, setActiveAds] = useState([]);
  const [expiredAds, setExpiredAds] = useState([]);

  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: null,
    key: "selection",
  });
  const gallery = [
    { imageUrl: "https://swiperjs.com/demos/images/nature-1.jpg" },
    {
      videoUrl: "https://www.w3schools.com/tags/movie.mp4",
    },
    {
      videoUrl:
        "https://maweshi-bucket.s3.ap-southeast-1.amazonaws.com/uploads/c7d948be-25ad-4864-b60e-2495e3c21fe1-VID_235610227_151145_396.mp4",
    },
    { imageUrl: "https://swiperjs.com/demos/images/nature-3.jpg" },
    { imageUrl: "https://swiperjs.com/demos/images/nature-4.jpg" },
    { imageUrl: "https://swiperjs.com/demos/images/nature-5.jpg" },
    { imageUrl: "https://swiperjs.com/demos/images/nature-6.jpg" },
  ];

  // increment offset at the end
  const scrollToEnd = () => {
    if (loading) {
      return;
    }
    setOffset(offset + limit);
  };

  // detect scroll at bottom
  window.onscroll = debounce(() => {
    if (onBottom()) {
      scrollToEnd();
    }
  }, 100);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const startDate = formatDate(date.startDate);
      const maxDate = formatDate(date.endDate);

      if (!pendingCompleted) {
        const response = await getRequest(
          `${
            apiRoutes.fetchAds
          }?limit=${limit}&offset=${offset}&status=Pending${
            filterAds ? `&minDate=${startDate}&maxDate=${maxDate}` : ""
          }`
        );
        setPendingAds([...pendingAds, ...response.post]);
        setPendingCompleted(response.length < limit);
        response && setLoading(false);
      }
      if (!activeCompleted) {
        const activeResponse = await getRequest(
          `${apiRoutes.fetchAds}?limit=${limit}&offset=${offset}&status=Active${
            filterAds ? `&minDate=${startDate}&maxDate=${maxDate}` : ""
          }`
        );
        setActiveAds([...activeAds, ...activeResponse.post]);
        setActiveCompleted(activeResponse.length < limit);
        activeResponse && setLoading(false);
      }
      if (!expiredCompleted) {
        // const expiredCompleted = await getRequest(
        //   `${apiRoutes.fetchAds}?limit=${limit}&offset=${offset}&status=Sold${
        //     filterAds ? `&minDate=${startDate}&maxDate=${maxDate}` : ""
        //   }`
        // );
        // setPendingAds([...expiredAds, ...expiredCompleted.post]);
        // setPendingCompleted(expiredCompleted.length < limit);
        // expiredCompleted && setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    // if (!filterUsers) {
    //   return;
    // }
    fetchUsers();
    // eslint-disable-next-line
  }, [offset, filterAds]);

  const changeAdStatus = async (status, ad_id) => {
    try {
      const response = await postRequest(apiRoutes.changeAdStatus, {
        post_id: ad_id,
        action_name: status,
      });
      if (response) {
        switch (status) {
          case "Pending":
            setPendingAds((ads) => ads.filter((ad) => ad._id === ad_id));
        }
      }
    } catch (error) {}
  };

  return (
    <main className="bg-white py-4 px-2 px-sm-4">
      {/* Header */}
      <section>
        <div className="mb-4 d-flex flex-wrap align-items-center gap-3">
          <h5 className="mb-0 fw-semibold me-auto">Ads Management</h5>
          <div className="d-flex flex-wrap align-items-stretch gap-3">
            <div className="me-sm-auto flex-fill">
              <DatePickerCard isPlaceholder />
            </div>
            <SearchField />
          </div>
        </div>
      </section>
      {/* Header */}
      <section>
        <ul className="nav row row-cols-1 row-cols-sm-2 row-cols-xl-3 gy-4">
          <li>
            <AdsComponent
              title="Pending Ads"
              gallery={gallery}
              list={pendingAds}
              status={["Active", "Sold"]}
            />
          </li>
          <li>
            <AdsComponent
              title="Approved Ads"
              gallery={gallery}
              list={activeAds}
              status={["Pending", "Sold"]}
            />
          </li>
          <li>
            <AdsComponent
              title="Expired Ads"
              gallery={gallery}
              list={expiredAds}
              status={["Pending", "Active"]}
            />
          </li>
        </ul>
      </section>
    </main>
  );
};

export default AdsManagementPage;
