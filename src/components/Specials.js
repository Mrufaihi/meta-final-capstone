import './Specials.css';

function Specials() {
  const specials = [
    { id: 1, title: 'Special Feature', image: '/lamp.png' },
    { id: 2, title: 'Special Feature', image: '/lamp.png' },
    { id: 3, title: 'Special Feature', image: '/lamp.png' }
  ];

  return (
    <section className="specials">
      <div className="specials-header">
        <h2>Specials</h2>
        <button className="see-more-button">See More</button>
      </div>
      <div className="specials-grid">
        {specials.map((special) => (
          <article key={special.id} className="special-card">
            <figure>
              <img src={special.image} alt={special.title} />
            </figure>
            <h3>{special.title}</h3>
            <a href="#more">See More &gt;</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;
