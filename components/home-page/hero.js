import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/logo.png"
          alt="An image showing Omer"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Omer</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
      </p>
    </section>
  );
}

export default Hero;
