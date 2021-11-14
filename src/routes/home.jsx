import { Container } from "react-bootstrap";
import { useState } from 'react';
import { Helmet } from 'react-helmet'
import { useEffect } from "react";

const TITLE = 'FareDeal - Auctions on cheap flights';

export default function Home() {
    const [offers, setOffers] = useState([]);

    const getOffers = () => {
        return new Promise((resolve) => {
          fetch("/offers.json")
          .then(res => res.json())
          .then((result) => {
            resolve([...result, ...result, ...result])
          })
        })
    }

    useEffect(() => {
        getOffers().then((data) => {
            data.length = 12
            setOffers(data)
        });
    }, [])

    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <Container>
                <div className="d-flex align-items-center my-3">
                    <h4>Live Deals</h4>
                    <div className="ms-auto btn btn-outline-primary rounded-pill px-4">{offers.length} Results</div>
                </div>
                <div className="row my-3 text-center">
                  {offers.map((offer, i) => {
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
                                    <button className="btn btn-lg px-5 btn-primary rounded-pill">From {offer.currencySymbol}{offer.currentMinPrice}</button>
                                </div>
                            </div>
                          </div>
                      )
                  })}
                </div>
            </Container>
        </>
    );
  }