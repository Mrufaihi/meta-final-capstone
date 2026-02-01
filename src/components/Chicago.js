import './Chicago.css';

function Chicago() {
  return (
    <section className="chicago">
      <div className="chicago-content">
        <div className="chicago-text">
          <h2>Food that is Unforgettable</h2>
          <h3>Feature that is amazing</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        </div>
        <div className="chicago-images">
          <figure className="chicago-image-1">
            <img src="/lamp.png" alt="Little Lemon restaurant interior" />
          </figure>
          <figure className="chicago-image-2">
            <img src="/lamp.png" alt="Little Lemon restaurant food" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Chicago;
