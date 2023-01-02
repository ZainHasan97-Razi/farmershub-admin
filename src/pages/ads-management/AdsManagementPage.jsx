import debounce from "lodash.debounce";
import React, { useState } from "react";
import { useEffect } from "react";
import AdsComponent from "../../components/AdsComponent";
import DatePickerCard from "../../components/cards/DatePickerCard";
import SearchField from "../../components/inputs/SearchField";
import { apiRoutes } from "../../lib/contants";
import { onBottom } from "../../lib/helper/detectScroll";
import { formatDate } from "../../lib/helper/helper";
import { getRequest, putRequest } from "../../services/axios/axiosMethods";

const AdsManagementPage = () => {
  const limit = 20;
  const [offset, setOffset] = useState(0);
  const POST_STATUS = {
    PENDING: "Pending",
    APPROVED: "Active",
    EXPIRED: "Deactivate",
    SOLD: "Sold",
  };
  const [statusUpdating, setStatusUpdating] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filterAds, setfilterAds] = useState(false);
  const [pendingCompleted, setPendingCompleted] = useState(false);
  const [activeCompleted, setActiveCompleted] = useState(false);
  const [expiredCompleted, setExpiredCompleted] = useState(false);
  const [soldCompleted, setSoldCompleted] = useState(false);
  const [pendingAds, setPendingAds] = useState([]);
  const [activeAds, setActiveAds] = useState([]);
  const [expiredAds, setExpiredAds] = useState([]);
  const [filterUsers, setfilterUsers] = useState(false);
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
          `${apiRoutes.fetchAds}?limit=${limit}&offset=${offset}&status=${
            POST_STATUS.PENDING
          }${filterAds ? `&minDate=${startDate}&maxDate=${maxDate}` : ""}`
        );
        setPendingAds([...pendingAds, ...response.post]);
        setPendingCompleted(response.length < limit);
        response && setLoading(false);
      }
      if (!activeCompleted) {
        const activeResponse = await getRequest(
          `${apiRoutes.fetchAds}?limit=${limit}&offset=${offset}&status=${
            POST_STATUS.APPROVED
          }${filterAds ? `&minDate=${startDate}&maxDate=${maxDate}` : ""}`
        );
        setActiveAds([...activeAds, ...activeResponse.post]);
        setActiveCompleted(activeResponse.length < limit);
        activeResponse && setLoading(false);
      }
      if (!expiredCompleted) {
        const expiredResponse = await getRequest(
          `${apiRoutes.fetchAds}?limit=${limit}&offset=${offset}&status=${
            POST_STATUS.EXPIRED
          }${filterAds ? `&minDate=${startDate}&maxDate=${maxDate}` : ""}`
        );
        setExpiredAds([...expiredAds, ...expiredResponse.post]);
        setExpiredCompleted(expiredResponse.length < limit);
        expiredResponse && setLoading(false);
      }
      if (!soldCompleted) {
        const soldResponse = await getRequest(
          `${apiRoutes.fetchAds}?limit=${limit}&offset=${offset}&status=${
            POST_STATUS.SOLD
          }${filterAds ? `&minDate=${startDate}&maxDate=${maxDate}` : ""}`
        );
        setSoldAds([...soldAds, ...soldResponse.post]);
        setSoldCompleted(soldResponse.length < limit);
        soldResponse && setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    // if (!filterUsers) {
    //   return;
    // }

    fetchAds();
    // eslint-disable-next-line
  }, [offset, filterAds]);

  const changeAdStatus = async (currentStatus, cardInfo, newStatus) => {
    cardInfo.status = newStatus;
    try {
      setStatusUpdating(true);
      const response = await putRequest(apiRoutes.changeAdStatus, {
        post_id: cardInfo?._id,
        action_name: newStatus,
      });
      if (response) {
        setStatusUpdating(false);
        switch (currentStatus) {
          case POST_STATUS.PENDING:
            setPendingAds((ads) =>
              ads.filter((ad) => ad._id !== cardInfo?._id)
            );
            break;
          case POST_STATUS.APPROVED:
            setActiveAds((ads) => ads.filter((ad) => ad._id !== cardInfo?._id));
            break;
          case POST_STATUS.EXPIRED:
            setExpiredAds((ads) =>
              ads.filter((ad) => ad._id !== cardInfo?._id)
            );
            break;
          default:
            break;
        }
        switch (newStatus) {
          case POST_STATUS.PENDING:
            setPendingAds((ads) => [...ads, cardInfo]);
            break;
          case POST_STATUS.APPROVED:
            setActiveAds((ads) => [...ads, cardInfo]);
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

  useEffect(() => {}, [pendingAds.length, activeAds.length, expiredAds.length]);

  const emptyAds = () => {
    setPendingAds([]);
    setActiveAds([]);
    setExpiredAds([]);
    setSoldAds([]);
    setPendingCompleted(false);
    setSoldCompleted(false);
    setExpiredCompleted(false);
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
            <SearchField />
          </div>
        </div>
      </section>
      {/* Header */}
      <section>
        <ul className="nav row row-cols-1 row-cols-sm-2 row-cols-xl-4 gy-4">
          <li>
            <AdsComponent
              title="Pending Ads"
              gallery={gallery}
              list={pendingAds}
              status={["Active", "Deactivate"]}
              changeAdStatus={changeAdStatus}
              statusUpdating={statusUpdating}
            />
          </li>
          <li>
            <AdsComponent
              title="Approved Ads"
              gallery={gallery}
              list={activeAds}
              status={["Pending", "Deactivate"]}
              changeAdStatus={changeAdStatus}
              statusUpdating={statusUpdating}
            />
          </li>
          <li>
            <AdsComponent
              title="Expired Ads"
              gallery={gallery}
              list={expiredAds}
              status={["Pending", "Active"]}
              changeAdStatus={changeAdStatus}
              statusUpdating={statusUpdating}
            />
          </li>
          <li>
            <AdsComponent
              title="Sold Ads"
              gallery={gallery}
              list={soldAds}
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

export default AdsManagementPage;
