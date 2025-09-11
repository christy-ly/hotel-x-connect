import React from "react";
import Image from "next/image";
import { PageHeading, SectionHeading } from "../_components/Headings";
import aboutimage1 from "@/public/about-01.jpg";
import aboutimage2 from "@/public/about-02.jpg";

export const metadata = {
  title: "About us | Hotel X",
  description: "About Us",
};

export default function page() {
  return (
    <>
      <PageHeading>About Hotel X</PageHeading>
      <p className="text-primary-200 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10">
        Experience the harmony of luxury, nature, and elegance — only at Hotel
        X.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-x-24 gap-y-18 text-lg items-center">
        <div className="md:col-span-2 h-120">
          <Image
            src={aboutimage1}
            alt="about us"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="md:col-span-3">
          <SectionHeading>
            Welcome to Hotel X, where luxury meets nature.
          </SectionHeading>
          <p className="text-primary-200 text-lg mb-5 md:mb-10">
            Nestled on the pristine beachfront, Hotel X offers breathtaking sea
            views and an escape into elegance and tranquility. More than just a
            hotel, we are a sanctuary for travelers who seek refined comfort,
            timeless design, and unforgettable experiences. From the moment you
            arrive, you are embraced by the calming sound of the ocean waves,
            the warmth of golden sands, and the promise of quality time in a
            destination designed with natural beauty and luxury in mind.
          </p>
          <p className="text-primary-200 text-lg mb-5 md:mb-10">
            At Hotel X, we believe true luxury is about more than lavish
            furnishings or high-end amenities—it is about how a place makes you
            feel. Our suites are thoughtfully designed to capture the essence of
            seaside living, with expansive windows framing the endless horizon
            and interiors inspired by both modern elegance and natural textures.
            Whether you are enjoying a suite with soaring high ceilings,
            relaxing in a loft-style retreat, or waking up to a private sea view
            balcony, every detail of your stay is crafted to bring harmony
            between sophistication and comfort.
          </p>
        </div>

        <div className="md:col-span-3 order-2 md:order-1 ">
          <SectionHeading>
            Experience the Ultimate Beachfront Escape
          </SectionHeading>
          <p className="text-primary-200 text-lg mb-5 md:mb-10">
            Our location is one of our greatest luxuries. Situated directly on
            the beachfront, Hotel X allows you to wake up to the sound of waves
            and spend your days basking in the natural beauty of the sea.
            Whether you are lounging on the sand, enjoying water activities, or
            simply gazing at the endless horizon from your balcony, you are
            never far from the ocean. By blending modern architecture with the
            surrounding coastal landscape, Hotel X creates a seamless connection
            between nature and design, offering you the best of both worlds.
          </p>
          <p className="text-primary-200 text-lg mb-5 md:mb-10">
            Beyond our accommodations, we take pride in creating experiences
            that enrich your stay. Guests can enjoy world-class dining with
            menus inspired by local flavors and international cuisine, all
            crafted with the freshest seasonal ingredients. Our spa offers
            treatments that rejuvenate both body and spirit, while our wellnFess
            programs encourage mindfulness and relaxation. For those seeking
            adventure, the nearby beach and natural surroundings invite
            exploration, from sunrise walks to unforgettable water excursions.
          </p>
        </div>
        <div className="order-1 md:order-2 md:col-span-2 h-120">
          <Image
            src={aboutimage2}
            alt="about us"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </>
  );
}
