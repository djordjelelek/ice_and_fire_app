import React from "react";
import classes from "./HomePage.module.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import picture1 from "./pictures/1.jpg";
import picture2 from "./pictures/2.jpg";
import picture3 from "./pictures/3.jpg";
import CardMedia from "@material-ui/core/CardMedia";
import ReactPlayer from "react-player";

const homePage = () => (
  <div className={classes.HomePage}>
    <h1>Game of Thrones</h1>
    <p className={classes.Text}>
      Game of Thrones is an American fantasy drama television series created by
      David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of
      Ice and Fire, a series of fantasy novels by George R. R. Martin, the first
      of which is A Game of Thrones. The show was shot in the United Kingdom,
      Canada, Croatia, Iceland, Malta, Morocco, and Spain. It premiered on HBO
      in the United States on April 17, 2011, and concluded on May 19, 2019,
      with 73 episodes broadcast over eight seasons. Set on the fictional
      continents of Westeros and Essos, Game of Thrones has a large ensemble
      cast and follows several story arcs throughout the course of the show. A
      major arc concerns the Iron Throne of the Seven Kingdoms of Westeros and
      follows a web of alliances and conflicts among the noble dynasties, either
      vying to claim the throne or fighting for independence from it. Another
      focuses on the last descendant of the realm's deposed ruling dynasty, who
      has been exiled to Essos and is plotting a return to the throne. A third
      story arc follows the Night's Watch, a military order defending the realm
      against threats from the North. Game of Thrones attracted a record
      viewership on HBO and has a broad, active, and international fan base.
      Critics have praised the series for its acting, complex characters, story,
      scope, and production values, although its frequent use of nudity and
      violence (including sexual violence) has been subject to criticism. The
      final season received significant critical backlash for its reduced length
      and creative decisions, with many considering it a disappointing
      conclusion. The series received 59 Primetime Emmy Awards, the most by a
      drama series, including Outstanding Drama Series in 2015, 2016, 2018 and
      2019. Its other awards and nominations include three Hugo Awards for Best
      Dramatic Presentation, a Peabody Award, and five nominations for the
      Golden Globe Award for Best Television Series – Drama. Many critics and
      publications have named the show as one of the best television series of
      all time.
    </p>
    {/* <ReactPlayer url="https://www.youtube.com/watch?v=AdQ3JDLlmPI" /> */}
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
