import './Chicago.css';

function Chicago() {
  return (
    <section className="chicago">
      <div className="chicago-content">
        <div className="chicago-text">
          <h2>Little Lemon</h2>
          <h3>Chicago's Mediterranean Gem</h3>
          <p>Little Lemon is a family-owned Mediterranean restaurant located in Chicago, Illinois. Founded by brothers Mario and Adrian, we specialize in traditional recipes passed down through generations, served with a contemporary flair. Our seasonal menu features 12-15 rotating dishes inspired by Italian, Greek, and Turkish culinary traditions, all prepared with fresh, locally-sourced ingredients.</p>
        </div>
        <div className="chicago-images">
          <figure className="chicago-image-1">
            <img src="/Mario and Adrian A 1.png" alt="Little Lemon restaurant owners" />
          </figure>
          <figure className="chicago-image-2">
            <img src="/Mario and Adrian b 1.png" alt="Little Lemon restaurant chefs" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Chicago;
