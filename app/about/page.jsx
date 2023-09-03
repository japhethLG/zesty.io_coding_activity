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
      const page_content = data?.data
        ? data?.data[0]?.content.page_content
        : null;
      setContent(page_content);
    };

    getData();
  }, []);

  return (
    <section className="w-full">
      {content ? (
        content.map((item, index) => {
          // console.log(item.text_content);
          return (
            <div key={index} className="mb-20">
              <div
                dangerouslySetInnerHTML={{ __html: item.text_content }}
                className="pt-2"
              />
            </div>
          );
        })
      ) : (
        <div className="flex-center">
          <h1 className="text-3xl">No content available</h1>
        </div>
      )}
    </section>
  );
};

export default About;
