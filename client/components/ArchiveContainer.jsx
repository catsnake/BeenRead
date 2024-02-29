import React, { useEffect, useState } from "react";
import ArchiveItem from "./ArchiveItem.jsx";

const ArchiveContainer = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles from the database
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/article/getArchive"
        );
        const data = await response.json();

        console.log("data:", data[0]); // data: {id: 1, title: "The Best Article", description: "This is the best article.", createdAt: "2021-10-10T00:00:00.000Z", updatedAt: "2021-10-10T00:00:00.000Z"}
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="archive-container">
      <h1>Archive</h1>
      {articles.map((entry) => (
        <ArchiveItem key={entry.id} article={entry} />
      ))}
    </div>
  );
};

export default ArchiveContainer;
