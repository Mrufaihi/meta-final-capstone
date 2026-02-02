import './OrderPage.css';

function OrderPage() {
  const orderItems = [
    { id: 1, name: 'Greek Salad', price: 12.99, image: '/greek salad 1.png' },
    { id: 2, name: 'Lemon Dessert', price: 8.99, image: '/lemon dessert 1.png' },
    { id: 3, name: 'Mediterranean Platter', price: 15.99, image: '/restauranfood 1.png' }
  ];

  return (
    <main className="order-page">
      <section className="order-header">
        <h1>Order Online</h1>
        <p>Select items to add to your order</p>
      </section>

      <section className="order-items">
        {orderItems.map((item) => (
          <article key={item.id} className="order-item">
            <figure>
              <img src={item.image} alt={item.name} />
            </figure>
            <div className="order-item-content">
              <h3>{item.name}</h3>
              <p className="order-price">${item.price.toFixed(2)}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </article>
        ))}
      </section>

      <section className="order-summary">
        <h2>Order Summary</h2>
        <p>Your cart is empty. Add items to get started.</p>
      </section>
    </main>
  );
}

export default OrderPage;
