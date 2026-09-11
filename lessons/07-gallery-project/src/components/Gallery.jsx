import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import ImageContainer from "./ImageContainer";

const Gallery = () => {
  const [user, setUser] = useState([]);

  const [index, setIndex] = useState(1);

  const GalleryData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=15`,
    );

    setUser(response.data);
    console.log(response.data);
  };

  useEffect(
    function () {
      GalleryData();
    },
    [index],
  );

  return (
    <main className="w-full h-dvh flex flex-col ">
      <Header index={index} setIndex={setIndex} />
      <ImageContainer data={user} />
    </main>
  );
};

export default Gallery;
