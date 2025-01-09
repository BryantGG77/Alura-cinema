import styles from "./index.module.css"
import Banner from "components/Banner/index";
import Card from "components/Card/index";
import Titulo from "components/Titulo/index";
import { useEffect, useState } from "react";

function Inicio() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/BryantGG77/alura-cinema-api/videos")
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return (
    <>
      <Banner img="home" color="#154580" />
      <Titulo>
        <h1>Un lugar para guardar sus videos favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => <Card key={video.id} {...video} />)}
      </section>
    </>
  );
}

export default Inicio; 
