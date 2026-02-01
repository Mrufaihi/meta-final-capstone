import './CustomersSay.css';

function CustomersSay() {
  const testimonials = [
    { id: 1, quote: 'This might be the best food I have ever eaten', text: 'Supporting or descriptive text for the card goes here like a pro' },
    { id: 2, quote: 'This might be the best food I have ever eaten', text: 'Supporting or descriptive text for the card goes here like a pro' },
    { id: 3, quote: 'This might be the best food I have ever eaten', text: 'Supporting or descriptive text for the card goes here like a pro' },
    { id: 4, quote: 'This might be the best food I have ever eaten', text: 'Supporting or descriptive text for the card goes here like a pro' },
    { id: 5, quote: 'This might be the best food I have ever eaten', text: 'Supporting or descriptive text for the card goes here like a pro' }
  ];

  return (
    <section className="customers-say">
      <h2>Testimonial</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className="testimonial-card">
            <figure>
              <img src="/lamp.png" alt="User" />
            </figure>
            <blockquote>"{testimonial.quote}"</blockquote>
            <p>{testimonial.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
