"use client";

import useFetchData from "@utils/hooks/useFetchData";

const About = () => {
  const { data: content, error } = useFetchData(
    "https://www.zesty.io/-/instant/7-e93178-vqvclg.json"
  );

  if (error) {
    return <h1 className="text-3xl">Error loading data</h1>;
  }

  const pageContent = content?.data?.[0]?.content?.page_content;

  return (
    <section className="w-full">
      {pageContent ? (
        <div>{pageContent}</div>
      ) : (
        <div className="flex-center">
          <h1 className="text-3xl">No content available</h1>
        </div>
      )}
    </section>
  );
};

export default About;
