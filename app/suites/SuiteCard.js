import Image from "next/image";

function SuiteCard({ suite }) {
  const {
    id,
    name,
    maxCapacity,
    minRoomSizeFt,
    maxRoomSizeFt,
    price,
    discount,
    image,
  } = suite;

  return (
    <div className="flex flex-col md:flex-row border border-primary-800 h-[400px] md:h-[200px]">
      <div className="w-full md:w-1/3 h-[300px] md:h-auto relative md:flex-shrink-0">
        <Image
          src={`/suite-images/${image}`}
          alt={`Suite ${name}`}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-grow flex flex-col justify-between">
        <div className="pt-5 pb-4 px-7 bg-primary-950 flex-grow">
          <h3 className="text-accent-500 font-semibold text-xl md:text-2xl mb-3">
            {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <p className="text-md md:text-lg text-primary-200">
              Up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <div className="flex gap-3 items-center mb-2">
            <p className="text-sm md:text-md text-primary-200">
              {minRoomSizeFt} - {maxRoomSizeFt} sq. ft.
            </p>
          </div>

          <p className="flex gap-1 md:gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-xl md:text-3xl font-[350]">
                  ${price - discount}
                </span>
                <span className="line-through font-semibold text-primary-600">
                  ${price}
                </span>
              </>
            ) : (
              <span className="text-xl md:text-3xl font-[350]">${price}</span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 text-right">
          <a
            href={`/suites/${id}`}
            className="border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900"
          >
            Learn more &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default SuiteCard;
