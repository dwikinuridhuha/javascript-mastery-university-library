import React from "react";
const BookList = () => {
  return (
    <section className="my-16">
      <h2 className="font-bebas-neue text-4xl text-light-100 mb-8">
        Book List
      </h2>
      <ul className="list-disc list-inside text-light-300 space-y-2 max-w-3xl">
        <li>
          <strong>The Enchanted Forest</strong> - A fantasy novel that takes
          readers on a magical journey through a mystical forest filled with
          enchanting creatures and hidden secrets.
        </li>
        <li>
          <strong>Love in the Time of Algorithms</strong> - A contemporary
          romance exploring the complexities of modern relationships in the age
          of technology and social media.
        </li>
        <li>
          <strong>The Quantum Detective</strong> - A thrilling mystery that
          combines elements of science fiction and detective noir, following a
          detective who uses quantum mechanics to solve crimes.
        </li>
        <li>
          <strong>Whispers of the Past</strong> - A historical fiction novel
          that delves into the lives of individuals during significant events in
          history, revealing untold stories and forgotten voices.
        </li>
        <li>
          <strong>Beyond the Stars</strong> - A science fiction adventure set in
          a distant future where humanity explores new galaxies and encounters
          alien civilizations.
        </li>
      </ul>
    </section>
  );
};
export default BookList;
