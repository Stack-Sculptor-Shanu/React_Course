import React, { Component } from 'react'

export default class LeftServices extends Component {
  render() {
    return (
      <aside className="leftServiceBlock">
        <header>
            <h2>Home Services at your doorstep</h2>
            <main>
                <div className="top_block">
                    <h3>What are you looking for</h3>
                    <aside className="services_provided">
                        <div className="service_items">1</div>
                        <div className="service_items">2</div>
                        <div className="service_items">3</div>
                        <div className="service_items">4</div>
                        <div className="service_items">5</div>
                        <div className="service_items">6</div>
                    </aside>
                </div>

                {/* Bottom Block */}
                <div className="bottom_block">
                    <h4>Buy Products</h4>
                    <aside className="buy_products">
                        <div className="block">
                            <h4>Native RO water purifiers</h4>
                        </div>
                    </aside>
                </div>
            </main>
        </header>
      </aside>
    )
  }
}
