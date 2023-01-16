import React, { useState } from "react";
import PrimaryModal from "./PrimaryModal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import { PlayIcon } from "../icons/icons";

const GalleryModal = ({ show, onHide, gallery }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <PrimaryModal
      isBlack
      className="gallery"
      size="xl"
      show={show}
      onHide={onHide}
    >
      <>
        <Swiper
          spaceBetween={10}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[Thumbs]}
          className="py-4"
        >
          {gallery.map((gallery) => (
            <SwiperSlide key={gallery.imageUrl || gallery.videoUrl}>
              <div
                className="mx-auto"
                style={{ height: "21.875rem", width: "21.875rem" }}
              >
                <video
                  className="d-block h-100 w-100 object-contain"
                  poster={gallery.imageUrl}
                  src={gallery.videoUrl}
                  controls={gallery.videoUrl && true}
                  loop
                ></video>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress={true}
          modules={[Thumbs]}
          className="gallery-small py-4"
        >
          {gallery.map((gallery) => (
            <SwiperSlide key={gallery.imageUrl || gallery.videoUrl}>
              <button
                type="button"
                className={`btn p-0 gallery-item--small rounded-3 position-relative`}
                style={{ height: "8.75rem", width: "8.75rem" }}
              >
                <video
                  className="d-block h-100 w-100 object-cover rounded-3"
                  poster={gallery.imageUrl}
                  src={gallery.videoUrl}
                ></video>
                {gallery.videoUrl && (
                  <span className="overlay-btn-play">
                    <PlayIcon size="1.875rem" />
                  </span>
                )}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </PrimaryModal>
  );
};

export default GalleryModal;
