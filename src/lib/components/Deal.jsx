import { Navbar, Container, Nav } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

export default function DealCard({offer}) {
    console.log(offer);
    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
          <div className="card position-relative shadow-sm border-0" style={{overflow: 'hidden'}}>
              <div className="position-absolute w-100 h-100" style={{zIndex: 0}}>
                  <div className="offer-bg-gradient position-absolute"></div>
                  <img alt={offer.inboundId} className="w-100" src={offer.imageUrl} />
              </div>

              <div className="card-body text-white my-5 py-5" style={{zIndex: 1}}>
                  <h3 className="card-title my-3 fw-bold fs-2">{offer.inboundId} - {offer.outboundId}</h3>
                  <p className="lead mb-4">{offer.viewersCount} viewing this</p>
                  <button className="btn btn-lg px-5 btn-light rounded-pill">From {offer.currencySymbol}{offer.currentMinPrice}</button>
              </div>
          </div>
    </div>
    )
  }