"use client";

import { useEffect, useState } from "react";

const About = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://www.zesty.io/-/instant/7-e93178-vqvclg.json",
        { method: "GET" }
      );
      const data = await res.json();

      setContent(data);
    };

    getData();
  }, []);

  return (
    <section className="w-full">
      {content?.data ? (
        <div>{content.data[0]?.content.page_content}</div>
      ) : (
        <div className="flex-center">
          <h1 className="text-3xl">No content available</h1>
        </div>
      )}
    </section>
  );
};

export default About;
