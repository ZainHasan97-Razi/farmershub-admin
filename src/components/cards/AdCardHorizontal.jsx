import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { placeHolder } from "../../lib/contants/assets";
import { showCommaSeperated } from "../../lib/helper/helper";
import {
  //  PlayIcon,
  ClockIcon,
  LocationIcon,
} from "../icons/icons";
import GalleryModal from "../modals/GalleryModal";

const AdCardHorizontal = ({ cardInfo }) => {
  const [show, setShow] = useState(false);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    let array = cardInfo?.images_url?.map((url) => {
      return {
        imageUrl: url,
      };
    });
    cardInfo.video_url && array.push({ videoUrl: cardInfo.video_url });
    setGallery(array);
  }, [cardInfo]);

  const cardText = () => {
    let text = <></>;
    switch (cardInfo?.category_id) {
      case "630bb46d60093fcb1add0715":
      case "630bb46d60093fcb1add0716":
        text = (
          <>
            {parseInt(cardInfo?.avg_milk_capacity).toFixed(2)} liter{" "}
            {"average milk"} | {cardInfo?.gestation} {"months gestation"} |{" "}
            {cardInfo?.vaccinated ? "vaccinated" : "not vaccinated"}
          </>
        );
        break;
      case "630bb46d60093fcb1add0714":
      case "630bb46d60093fcb1add0713":
        text =
          cardInfo?.gender === "female" ? (
            <>
              {parseInt(cardInfo?.avg_milk_capacity).toFixed(2)} {"liter"}|{" "}
              {cardInfo?.gestation} {"months gestation"} |{" "}
              {cardInfo?.vaccinated ? "vaccinated" : "not vaccinated"}
            </>
          ) : (
            <>
              {cardInfo?.age} {"Months"}| {cardInfo?.daant} {"daant"} |{" "}
              {parseInt(cardInfo?.live_weight).toFixed(2)} {"kg"} |{" "}
              {cardInfo?.vaccinated ? "vaccinated" : "not vaccinated"}
            </>
          );
        break;
      case "630bb46d60093fcb1add0720":
      case "630bb46d60093fcb1add0718": //katta
        text = (
          <>
            {cardInfo?.age} {"Months"}| {cardInfo?.daant} {"daant"} |{" "}
            {parseInt(cardInfo?.live_weight).toFixed(2)} {"kg"} |{" "}
            {cardInfo?.vaccinated ? "vaccinated" : "not vaccinated"}
          </>
        );
        break;
      case "630bb46d60093fcb1add0719":
      case "630bb46d60093fcb1add0717": //katti
        text = (
          <>
            {cardInfo?.age} {"Months"} | {cardInfo?.gestation}{" "}
            {"monthsGestation"} |{" "}
            {cardInfo?.vaccinated ? "vaccinated" : "not vaccinated"}
          </>
        );
        break;

      default:
        break;
    }
    return text;
  };
  return (
    <>
      <GalleryModal
        gallery={gallery}
        show={show}
        onHide={() => setShow(false)}
      />

      <div className="ad-card bg-light rounded-3 shadow-sm p-3 d-lg-flex gap-3">
        {/* Ads overlay */}
        <div
          className="bg-cover rounded-3 bg-opacity-25 px-0 col-lg-4"
          style={{
            height: "11.25rem",
          }}
        >
          {cardInfo?.video_url !== "" ? (
            cardInfo?.video_thumbnail_url ? (
              <Image
                variant="top"
                src={cardInfo?.video_thumbnail_url || placeHolder}
                alt={"cover-photo"}
                // onClick={() => showCarousel(cardInfo)}
                onClick={() => setShow(true)}
              />
            ) : (
              <video
                src={cardInfo?.video_url}
                onClick={() => setShow(true)}
              ></video>
            )
          ) : (
            <Image
              variant="top"
              src={cardInfo?.images_url[0] || placeHolder}
              alt={"cover-photo"}
              className="card-img"
              onClick={() => setShow(true)}
            />
          )}

          {/* <div
            onClick={() => setShow(true)}
            className={`h-100 d-flex flex-column justify-content-center align-items-center p-3 ad-card-overlay mt-4 ${
              cardInfo.badge && "active"
            }`}
          >
            {cardInfo?.video_url !== "" ? (
              <button
                type="button"
                className="btn p-0 link my-auto play-btn"
                style={{ height: "3.375rem", width: "3.375rem" }}
              >
                <PlayIcon size="100%" />
              </button>
            ) : (
              <></>
            )}
            <h6 className="mb-0 fw-500 fs-6 text-black ">
              1 of{" "}
              {cardInfo?.video_url !== ""
                ? cardInfo?.images_url?.length + 1
                : cardInfo?.images_url?.length}
            </h6>
          </div> */}
        </div>
        {/* /Ads overlay */}
        {/* Ads body */}
        <ul className="nav flex-column gap-2 mt-3 w-100">
          <li>
            <div className="d-flex align-items-center gap-2">
              <div className="d-flex align-items-center flex-wrap justify-content-start gap-2 me-auto">
                <h6 className="mb-0 fw-bold me-auto">
                  {cardInfo?.price_type !== "on call" && (
                    <> Rs {showCommaSeperated(cardInfo?.price)}</>
                  )}
                </h6>
                <span className="fs-7 fw-500 text-gray text-capitalize">
                  {cardInfo?.price_type || "---"}
                </span>
              </div>
              <div className="d-flex align-items-center flex-wrap justify-content-end gap-2">
                <div className="text-gray fs-7">
                  <ClockIcon className="me-1" />
                  <span className="small">{cardInfo.postTime}</span>
                </div>
                <div className="text-gray fs-7">
                  <LocationIcon className="me-1" />
                  <span className="small">{cardInfo.location}</span>
                </div>
              </div>
            </div>
          </li>
          <li className="px-0 col-lg-9">
            <h6 className="mb-0 fw-500 ">{cardText()}</h6>
          </li>
        </ul>
        {/* /Ads body */}
      </div>
    </>
  );
};

export default AdCardHorizontal;
