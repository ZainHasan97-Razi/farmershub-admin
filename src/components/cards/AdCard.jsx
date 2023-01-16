import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import { placeHolder } from "../../lib/contants/assets";
import { showCommaSeperated } from "../../lib/helper/helper";
import GalleryModal from "../modals/GalleryModal";

const AdCard = ({ cardInfo, status, changeAdStatus, statusUpdating }) => {
  const [show, setShow] = useState(false);
  const [gallery, setGallery] = useState([]);

  const cardText = () => {
    let text = <></>;
    switch (cardInfo?.category_id._id) {
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

  useEffect(() => {
    let array = cardInfo?.images_url?.map((url) => {
      return {
        imageUrl: url,
      };
    });
    cardInfo.video_url && array.push({ videoUrl: cardInfo.video_url });
    setGallery(array);
  }, [cardInfo]);

  return (
    <>
      <GalleryModal
        gallery={gallery}
        show={show}
        onHide={() => setShow(false)}
      />

      <div className="ad-card bg-light rounded-3 shadow-sm p-3">
        {/* Ads overlay */}
        <div
          className="bg-cover rounded-3 bg-dark"
          style={{
            height: "12.5rem",
          }}
          onClick={() => setShow(true)}
        >
          {cardInfo?.video_url !== "" ? (
            cardInfo?.video_thumbnail_url ? (
              <Image
                variant="top"
                src={cardInfo?.video_thumbnail_url || placeHolder}
                alt={"cover-photo"}
              />
            ) : (
              <video src={cardInfo?.video_url}></video>
            )
          ) : (
            <Image
              variant="top"
              src={cardInfo?.images_url[0] || placeHolder}
              alt={"cover-photo"}
              className="card-img"
            />
          )}
        </div>
        {/* /Ads overlay */}
        {/* Ads body */}
        <ul className="nav flex-column gap-3 mt-3">
          <li>
            <div className="d-flex align-items-center gap-2">
              <h5 className="mb-0 fw-bold me-auto">
                {cardInfo?.price_type !== "on call" && (
                  <> Rs {showCommaSeperated(cardInfo?.price)}</>
                )}
              </h5>
              <span className="fs-7 fw-500 text-gray text-capitalize">
                {cardInfo?.price_type || "---"}
              </span>
            </div>
          </li>
          {/* <Button>{status==="Active"
?
:}</Button> */}
          <div className="d-flex justify-content-between w-100">
            {status.map((item) => (
              <Button
                onClick={() => changeAdStatus(cardInfo?.status, cardInfo, item)}
                disabled={statusUpdating}
              >
                {item}
              </Button>
            ))}
          </div>
          <li>
            <h6 className="mb-0 fw-500">{cardInfo?.user_id?.phone_number}</h6>
          </li>
          <li>
            <p className="mb-0 text-gray">{cardText()}</p>
          </li>
        </ul>
        {/* /Ads body */}
      </div>
    </>
  );
};

export default AdCard;
