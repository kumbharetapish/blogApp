import React from "react";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <input type="search" name="" placeholder={"Search Your Blog"} id="" />
      <a href="/#">
        <i className="fas fa-bell"></i>
      </a>
      <img
        src={
          "https://www.freepngimg.com/thumb/youtube/63841-profile-twitch-youtube-avatar-discord-free-download-image-thumb.png"
        }
        alt="Avatar"
      />
    </div>
  );
};

export default SearchBar;
