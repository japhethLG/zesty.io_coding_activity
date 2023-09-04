"use client";

import useFetchData from "@utils/hooks/useFetchData";

const Home = () => {
  const { data: content, error } = useFetchData(
    "https://www.zesty.io/-/gql/platform_section.json"
  );

  if (error) {
    return <h1 className="text-3xl">Error loading data</h1>;
  }

  return (
    <section className="w-full">
      {content &&
        content.map((item, index) => (
          <div key={index} className="mb-20">
            <h1 className="text-3xl">{item.title}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: item.text_content }}
              className="pt-2"
            />
          </div>
        ))}
    </section>
  );
};

export default Home;
