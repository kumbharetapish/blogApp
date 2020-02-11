import React from "react";
import Cards from "../../Components/Cards/Cards";
import Section from "../../Components/Section/Section";
const BlogContainer = () => {
  const blogArr = [
    {
      id: 1,
      imgSrc:
        "https://media-cdn.tripadvisor.com/media/photo-s/12/4f/e1/b6/blue-lagoon.jpg",
      title: "Iceland blue lagoon",
      blogSrc: ""
    },
    {
      id: 2,
      imgSrc:
        "https://www.telegraph.co.uk/content/dam/luxury/2019/12/06/Villa-3-at-Soneva-Jani-Maldives-Sphere-Estates_001_trans%2B%2BuLmHKNaT2OspieeUjldj09StvqqzYkOHO8gIF2vtD9M.jpeg",
      title: "Maldives",
      blogSrc: ""
    },
    {
      id: 3,
      imgSrc:
        "https://www.andbeyond.com/wp-content/uploads/sites/5/Elephant-drinking-water-in-Mana-Pools-National-Park-Zimbabwe.jpg",
      title: "Mana pools national park (Africa)",
      blogSrc: ""
    },
    {
      id: 4,
      imgSrc:
        "https://www.cometocapetown.com/wp-content/uploads/2019/06/5d182cabe42af-e1561865476823.png",
      title: "Wale Street , bo-kaap (Cape Town’s)",
      blogSrc: ""
    },
    {
      id: 5,
      imgSrc:
        "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Pratapgarh-Fort.jpg",
      title: "Pratapgarh Fort India(MH)",
      blogSrc: ""
    },
    {
      id: 6,
      imgSrc:
        "https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2015/09/Gawalior-fort-madhya-pradesh.jpg",
      title: "Gwalior Fort, Gwalior-India(MP)",
      blogSrc: ""
    }
  ];
  return (
    <div className="blog-container">
      <h2> Favorite Place</h2>
      <div className="blog-wrapper">
        <Cards cards={blogArr} />
        <Section blagName={blogArr} />
      </div>
    </div>
  );
};

export default BlogContainer;
