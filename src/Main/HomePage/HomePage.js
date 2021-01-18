import React from "react";
import classes from "./HomePage.module.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import picture1 from "./pictures/1.jpg";
import picture2 from "./pictures/2.jpg";
import picture3 from "./pictures/3.jpg";

const homePage = () => (
  <div className={classes.HomePage}>
    <h>Game of Thrones</h>
    <p className={classes.Text}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur,
      explicabo odit rem odio vel excepturi officia perferendis perspiciatis,
      inventore ducimus autem sed corrupti tempore eveniet, ut similique
      repellat dolore voluptates. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Animi obcaecati vitae officia beatae modi fugit
      consequuntur temporibus ex. Voluptatibus enim eos, odit at minus illum
      numquam qui totam reiciendis eum! Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Pariatur, explicabo odit rem odio vel excepturi officia
      perferendis perspiciatis, inventore ducimus autem sed corrupti tempore
      eveniet, ut similique repellat dolore voluptates. Lorem ipsum dolor sit
      amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Pariatur, explicabo odit rem odio vel excepturi officia
      perferendis perspiciatis, inventore ducimus autem sed corrupti tempore
      eveniet, ut similique repellat dolore voluptates. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Animi obcaecati vitae officia beatae
      modi fugit consequuntur temporibus ex. Voluptatibus enim eos, odit at
      minus illum numquam qui totam reiciendis eum! Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Pariatur, explicabo odit rem odio vel
      excepturi officia perferendis perspiciatis, inventore ducimus autem sed
      corrupti tempore eveniet, ut similique repellat dolore voluptates. Lorem
      ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Pariatur, explicabo odit rem odio vel
      excepturi officia perferendis perspiciatis, inventore ducimus autem sed
      corrupti tempore eveniet, ut similique repellat dolore voluptates. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Animi obcaecati vitae
      officia beatae modi fugit consequuntur temporibus ex. Voluptatibus enim
      eos, odit at minus illum numquam qui totam reiciendis eum! Lorem ipsum
      dolor sit amet consectetur, adipisicing elit. Pariatur, explicabo odit rem
      odio vel excepturi officia perferendis perspiciatis, inventore ducimus
      autem sed corrupti tempore eveniet, ut similique repellat dolore Lorem
      ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, explicabo
      odit rem odio vel excepturi officia perferendis perspiciatis, inventore
      ducimus autem sed corrupti tempore eveniet, ut similique repellat dolore
      voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
      obcaecati vitae officia beatae modi fugit consequuntur temporibus ex.
      Voluptatibus enim eos, odit at minus illum numquam qui totam reiciendis
      eum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur,
      explicabo odit rem odio vel excepturi officia perferendis perspiciatis,
      inventore ducimus autem sed corrupti tempore eveniet, ut similique
      repellat dolore voluptates. Lorem ipsum dolor sit amet consectetur
      adipisicing Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Pariatur, explicabo odit rem odio vel excepturi officia perferendis
      perspiciatis, inventore ducimus autem sed corrupti tempore eveniet, ut
      similique repellat dolore voluptates. Lorem ipsum dolor sit amet
      consectetur adipivoluptates. Lorem ipsum dolor sit amet consectetur
      adipisicing
    </p>
    <Carousel className={classes.Carousel}>
      <Carousel.Item>
        <img className="d-block w-100" src={picture1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={picture2} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={picture3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  </div>
);
export default homePage;
