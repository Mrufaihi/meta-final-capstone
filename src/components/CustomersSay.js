import './CustomersSay.css';

function CustomersSay() {
  const testimonials = [
    { id: 1, quote: 'This might be the best food I have ever eaten', text: 'Sarah M. - The Greek salad was absolutely incredible! Fresh ingredients and perfect seasoning.' },
    { id: 2, quote: 'Amazing experience every time', text: 'Michael R. - We come here monthly. The atmosphere is warm and the food never disappoints.' },
    { id: 3, quote: 'Authentic flavors that remind me of home', text: 'Elena K. - As someone from Greece, I can say this is the real deal. Outstanding!' },
    { id: 4, quote: 'Best Mediterranean restaurant in Chicago', text: 'David L. - The lemon dessert is to die for. Highly recommend making a reservation!' },
    { id: 5, quote: 'Perfect for date night or family dinner', text: 'Jennifer T. - Great service, cozy atmosphere, and delicious food. We\'ll be back soon!' }
  ];

  return (
    <section className="customers-say">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className="testimonial-card">
            <figure>
              <img src="/restaurant chef B 1.png" alt="User" />
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
