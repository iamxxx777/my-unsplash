import { useState } from 'react'
import axios from 'axios'

import Head from 'next/head'
import Navbar from '../components/Navbar'
import Grid from '../components/Grid'
import Modal from "../components/Modal"
import styles from '../styles/Home.module.scss'


export default function Home({ images, gridA, gridB, threeGridA, threeGridB, threeGridC }) {

  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState("add");
  const [id, setId] = useState("");


  const handleUrl = (key) => {
    setId(key);
  }


  const reload = () => {
    window.location.reload();
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>My-unsplash</title>
        <meta name="description" content="Add to a collection of beautiful images in a masonry layout" />
        <meta name="keywords" content="MASONRY, MASONRY IMAGES, IMAGES, UNSPLASH, FREE IMAGES, ADD IMAGES, DELETE IMAGES" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>

      <main className={styles.main}>
        <Navbar click={() => {setShowModal(true); setType("add")}} />
        <Grid 
          images={images} 
          gridA={gridA} 
          gridB={gridB} 
          threeGridA={threeGridA}
          threeGridB={threeGridB}
          threeGridC={threeGridC}
          click={() => {setType("delete"); setShowModal(true)}}
          url={handleUrl} 
        />

        {showModal && 
          <Modal 
            type={type} 
            reload={reload} 
            click={() => setShowModal(false)} 
            id={id} 
          />
        }
      </main>
    </div>
  )
}

export const getStaticProps = async () => {

  const { data } = await axios.get("https://image-uploader-jet.vercel.app/api/upload");

  // connectDB();
  // const images = await Photo.find({}).sort({'createdAt': -1});

  // const data = await JSON.stringify(images);

  if (!data) {
    return {
      notFound: true,
    }
  }

  // Variables for the three column grid
  // Pardon me, i am terrible at naming variables
  var threeA = [], threeB = [], threeC = [];
  var threeGridA = [], threeGridB = [], threeGridC = [];

  // Variables for the two column grid
  var a = [], b = [];
  var gridA = [], gridB = [];

  const indexes = [...Array(data.length).keys()];
  const num = indexes.length;
  var index = 0;

  /* The idea here is to dupliacte the returned data into threes and two
    depending on the amount of columns to be rendered. The data is only divided
    because the masonry layout requires it
  */

  const threeColumn = () => {
      while(index < num) {
          threeA.push(indexes[index]);
          index++;
          if(index === num) {
              break;
          }
          
          threeB.push(indexes[index]);
          index++;
          if(index === num) {
            break;
          }
          
          threeC.push(indexes[index]);
          index++;
          if(index === num) {
            break;
          }
      }

      threeA.forEach((num) => {
          threeGridA.push(data[num]);
      });

      threeB.forEach((num) => {
          threeGridB.push(data[num]);
      });

      threeC.forEach((num) => {
          threeGridC.push(data[num]);
      });
  }

  const twoColumn = () => {
      indexes.forEach((index) => {
          if (index % 2 === 0) {
              a.push(index);
          } else {
              b.push(index);
          }
      });

      a.forEach((num) => {
          gridA.push(data[num]);
      });

      b.forEach((num) => {
          gridB.push(data[num]);
      });
  }

  twoColumn();
  threeColumn();


  return {
    props: {
      images: data,
      gridA,
      gridB,
      threeGridA,
      threeGridB,
      threeGridC
    }
  }
}