import './CallToAction.css';

function CallToAction() {
  return (
    <section className="call-to-action">
      <div className="cta-content">
        <div className="cta-text">
          <h1>The Best Italian Food</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="cta-button">Order</button>
        </div>
        <div className="cta-image">
          <figure>
            <img src="/lamp.png" alt="Italian food presentation" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
