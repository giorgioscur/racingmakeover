import React from "react";
import { SkewedCard, SkewedTextCard } from "../../components";
import "./home.css";

export function Home() {
  return (
    <div className="home container">
      <div className="home_row-container first-row">
        <SkewedTextCard text="We do be racin' doe, check it out!" />
        <SkewedCard
          cardText="He, too, do be racin' doe"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/2/28/Rubens_Barrichello_2010_Malaysia.jpg"
          cardLink="https://google.com"
        ></SkewedCard>
        <SkewedCard
          cardText="We bought a bald guy, again, do you believe it?"
          imageUrl="https://cdn-1.motorsport.com/images/amp/YN1ozde2/s6/tony-kanaan-1.jpg"
          cardLink="https://google.com"
          horizontalImage
        ></SkewedCard>
      </div>
      <div className="home_row-container second-row">
        <SkewedCard
          cardText="We bought a bald guy, again, do you believe it?"
          imageUrl="https://cdn-1.motorsport.com/images/amp/YN1ozde2/s6/tony-kanaan-1.jpg"
          cardLink="https://google.com"
          horizontalImage
        ></SkewedCard>
        <SkewedCard
          cardText="We bought a bald guy"
          imageUrl="https://www.grandepremio.com.br/wp-content/uploads/2020/07/tony-kanaan.png"
          cardLink="https://google.com"
          horizontalImage
        ></SkewedCard>
        <SkewedCard
          cardText="He, too, do be racin' doe, even tho he ain't bald and all, he still do be fast"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/2/28/Rubens_Barrichello_2010_Malaysia.jpg"
          cardLink="https://google.com"
        ></SkewedCard>
      </div>
      <div className="home_row-container third-row">
        <SkewedCard
          cardText="We bought a bald guy, again"
          imageUrl="https://cdn-1.motorsport.com/images/amp/YN1ozde2/s6/tony-kanaan-1.jpg"
          cardLink="https://google.com"
          horizontalImage
        ></SkewedCard>
        <SkewedCard
          cardText="He, too, do be racin' doe, even tho he ain't bald and all, he still do be fast"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/2/28/Rubens_Barrichello_2010_Malaysia.jpg"
          cardLink="https://google.com"
        ></SkewedCard>
        <SkewedTextCard text="Try me, bitch." alignLeft />
      </div>
    </div>
  );
}
