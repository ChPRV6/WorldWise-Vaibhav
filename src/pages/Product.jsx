import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            Tripping around the world is an exhilarating adventure that opens doors to a world of boundless excitement and discovery.
            The globe, with its diverse cultures, landscapes, and people, becomes a canvas waiting to be painted with unforgettable experiences. 
            From the bustling markets of Marrakech to the serene temples of Kyoto, every corner of our planet has a unique story to tell and an adventure to offer.
          </p>
          <p>
          It's a journey where the ordinary transforms into the extraordinary, where the taste of exotic cuisines dances on your palate,and where the beauty of natural wonders leaves you awestruck.
          Whether you're trekking through the Amazon rainforest, wandering the historic streets of Rome, or gazing at the mesmerizing Northern Lights in Iceland, the thrill of tripping around the world is an everlasting voyage of wonder and amazement, reminding us of the astonishing diversity and beauty that our world has to offer.

          </p>
        </div>
      </section>
    </main>
  );
}
