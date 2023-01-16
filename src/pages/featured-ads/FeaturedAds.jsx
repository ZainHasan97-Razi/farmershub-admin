import debounce from "lodash.debounce";
import React, { useState } from "react";
import { useEffect } from "react";
import AdsComponent from "../../components/AdsComponent";
import DatePickerCard from "../../components/cards/DatePickerCard";
import { apiRoutes } from "../../lib/contants";
import { onBottom } from "../../lib/helper/detectScroll";
import { formatDate } from "../../lib/helper/helper";
import { getRequest, postRequest } from "../../services/axios/axiosMethods";

const FeaturedAdsPage = () => {
  const limit = 20;
  const [offset, setOffset] = useState(0);
  const POST_STATUS = {
    REQUESTED: "Requested",
    APPROVED: "Approved",
  };
  const [statusUpdating, setStatusUpdating] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filterAds, setfilterAds] = useState(false);
  const [pendingCompleted, setPendingCompleted] = useState(false);
  const [activeCompleted, setActiveCompleted] = useState(false);
  const [pendingAds, setRequestedAds] = useState([]);
  const [approvedAds, setApprovedAds] = useState([]);
  const [expiredAds, setExpiredAds] = useState([]);
  const [soldAds, setSoldAds] = useState([]);

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

  const fetchAds = async () => {
    try {
      setLoading(true);
      const startDate = formatDate(date.startDate);
      const maxDate = formatDate(date.endDate);

      if (!pendingCompleted) {
        const response = await getRequest(
          `${
            apiRoutes.fetchAds
          }?limit=${limit}&status=Active&offset=${offset}&feature_status=${
            POST_STATUS.REQUESTED
          }${filterAds ? `&minDate=${startDate}&maxDate=${maxDate}` : ""}`
        );
        setRequestedAds([...pendingAds, ...response.post]);
        setPendingCompleted(response.length < limit);
        response && setLoading(false);
      }
      if (!activeCompleted) {
        const activeResponse = await getRequest(
          `${
            apiRoutes.fetchAds
          }?limit=${limit}&offset=${offset}&feature_status=${
            POST_STATUS.APPROVED
          }${filterAds ? `&minDate=${startDate}&maxDate=${maxDate}` : ""}`
        );
        setApprovedAds([...approvedAds, ...activeResponse.post]);
        setActiveCompleted(activeResponse.length < limit);
        activeResponse && setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAds();
    // eslint-disable-next-line
  }, [offset, filterAds]);

  const changeAdStatus = async (currentStatus, cardInfo, newStatus) => {
    cardInfo.status = newStatus;
    currentStatus = "Requested";
    newStatus = "Approved";
    try {
      setStatusUpdating(true);
      const response = await postRequest(apiRoutes.featuredStatus, {
        post_id: cardInfo?._id,
        package_id: cardInfo.features_package_id,
      });
      if (response) {
        setStatusUpdating(false);
        switch (currentStatus) {
          case POST_STATUS.REQUESTED:
            setRequestedAds((ads) =>
              ads.filter((ad) => ad._id !== cardInfo?._id)
            );
            break;
          default:
            break;
        }
        switch (newStatus) {
          case POST_STATUS.PENDING:
            setRequestedAds((ads) => [...ads, cardInfo]);
            break;
          case POST_STATUS.APPROVED:
            setApprovedAds((ads) => [...ads, cardInfo]);
            break;
          case POST_STATUS.EXPIRED:
            setExpiredAds((ads) => [...ads, cardInfo]);
            break;
          default:
            break;
        }
      }
    } catch (error) {
      setStatusUpdating(false);
    }
  };

  useEffect(() => {}, [
    pendingAds.length,
    approvedAds.length,
    expiredAds.length,
  ]);

  const emptyAds = () => {
    setRequestedAds([]);
    setApprovedAds([]);
    setExpiredAds([]);
    setSoldAds([]);
    setPendingCompleted(false);
    setActiveCompleted(false);
  };

  return (
    <main className="bg-white py-4 px-2 px-sm-4">
      {/* Header */}
      <section>
        <div className="mb-4 d-flex flex-wrap align-items-center gap-3">
          <h5 className="mb-0 fw-semibold me-auto">Ads Management</h5>
          <div className="d-flex flex-wrap align-items-stretch gap-3">
            <div className="me-sm-auto flex-fill">
              <DatePickerCard
                isPlaceholder
                setfilterUsers={setfilterAds}
                setDate={setDate}
                date={date}
                setOffset={setOffset}
                setUsers={emptyAds}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Header */}
      <section>
        <ul className="nav row row-cols-1 row-cols-sm-2 row-cols-xl-4 gy-4">
          <li>
            <AdsComponent
              title="Requested Ads"
              gallery={gallery}
              list={pendingAds}
              status={["Approved"]}
              changeAdStatus={changeAdStatus}
              statusUpdating={statusUpdating}
            />
          </li>
          <li>
            <AdsComponent
              title="Approved Ads"
              gallery={gallery}
              list={approvedAds}
              status={[]}
              changeAdStatus={changeAdStatus}
              statusUpdating={statusUpdating}
            />
          </li>
        </ul>
      </section>
    </main>
  );
};

export default FeaturedAdsPage;
