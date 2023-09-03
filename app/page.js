"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://www.zesty.io/-/gql/platform_section.json",
        { method: "GET" }
      );
      const data = await res.json();
      console.log(data);
      setContent(data);
    };

    getData();
  }, []);

  return (
    <section className="w-full ">
      {content &&
        content.map((item, index) => {
          // console.log(item.text_content);
          return (
            <div key={index} className="mb-20">
              <h1 className="text-3xl">{item.title}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: item.text_content }}
                className="pt-2"
              />
            </div>
          );
        })}
    </section>
  );
}
