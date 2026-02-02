import './CallToAction.css';

function CallToAction() {
  return (
    <section className="call-to-action">
      <div className="cta-content">
        <div className="cta-text">
          <h1>Little Lemon</h1>
          <p>Experience authentic Mediterranean cuisine in the heart of Chicago. Our family-owned restaurant blends traditional Italian, Greek, and Turkish recipes with a modern twist, creating unforgettable flavors that keep our guests coming back.</p>
          <button className="cta-button">Order Online</button>
        </div>
        <div className="cta-image">
          <figure>
            <img src="/restauranfood 1.png" alt="Italian food presentation" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
