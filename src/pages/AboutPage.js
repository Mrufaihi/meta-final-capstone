import './AboutPage.css';

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <h1>About Little Lemon</h1>
        <p>Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist. The chefs draw inspiration
            from Italian, Greek, and Turkish culture and have a menu of 12-15 items that they rotate seasonally.
          </p>
          <p>
            The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a
            popular place for a meal any time of the day.
          </p>
        </div>
        <div className="about-images">
          <figure>
            <img src="/Mario and Adrian A 1.png" alt="Mario and Adrian" />
          </figure>
          <figure>
            <img src="/Mario and Adrian b 1.png" alt="Restaurant chefs" />
          </figure>
        </div>
      </section>

      <section className="about-owners">
        <h2>Meet the Owners</h2>
        <div className="owners-grid">
          <article>
            <h3>Mario</h3>
            <p>Head chef who relies on family recipes and his experience as a chef in Italy.</p>
          </article>
          <article>
            <h3>Adrian</h3>
            <p>Handles marketing and led the expansion to incorporate broader Mediterranean cuisines.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
