import './MenuPage.css';

function MenuPage() {
  const menuItems = [
    { id: 1, name: 'Greek Salad', price: '$12.99', image: '/greek salad 1.png' },
    { id: 2, name: 'Lemon Dessert', price: '$8.99', image: '/lemon dessert 1.png' },
    { id: 3, name: 'Mediterranean Platter', price: '$15.99', image: '/restauranfood 1.png' },
    { id: 4, name: 'Mediterranean Special', price: '$18.99', image: '/restaurant 1.png' },
    { id: 5, name: 'Chef Special', price: '$16.99', image: '/restaurant chef B 1.png' },
    { id: 6, name: 'Family Platter', price: '$24.99', image: '/restauranfood 1.png' }
  ];

  return (
    <main className="menu-page">
      <section className="menu-header">
        <h1>Our Menu</h1>
        <p>Discover our seasonal selection of Mediterranean dishes</p>
      </section>

      <section className="menu-grid">
        {menuItems.map((item) => (
          <article key={item.id} className="menu-item">
            <figure>
              <img src={item.image} alt={item.name} />
            </figure>
            <div className="menu-item-content">
              <h3>{item.name}</h3>
              <p className="menu-price">{item.price}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default MenuPage;
