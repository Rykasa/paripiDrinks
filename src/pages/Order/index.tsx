export function Order(){
  return(
    <section>
      <header>
        <strong>Your order</strong>
      </header>
      <main>
        <div className="center">
          <div className="items">
            <div className="item">
              
            </div>
          </div>
          <div className="promo">
            <span>Promo code</span>
            <div>
              <input type="text" />
              checkicon
            </div>
          </div>
          <div className="items-info">
            <span>Order info</span>
          </div>
          <button>Proceed to payment</button>
        </div>
      </main>
    </section>
  )
}