import React from "react";
import Image from "next/image";

const BookOverview = () => {
  return (
    <section className="my-16">
      <h2 className="font-bebas-neue text-4xl text-light-100 mb-8">
        About the Author
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-48 h-48 relative flex-shrink-0">
          <Image
            src="/author.jpg"
            alt="Author"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="text-light-300 max-w-3xl">
          <p className="mb-4">
            John Doe is a prolific author known for his captivating storytelling
            and rich characters. With over a decade of experience in writing, he
            has published numerous bestsellers that have captivated readers
            worldwide.
          </p>
          <p className="mb-4">
            His works span various genres, including mystery, romance, and
            science fiction. John’s unique ability to weave intricate plots with
            relatable characters has earned him a dedicated fanbase.
          </p>
          <p>
            When he’s not writing, John enjoys traveling, exploring new
            cultures, and spending time with his family. He believes that life
            experiences greatly influence his writing and often draws
            inspiration from his adventures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookOverview;
