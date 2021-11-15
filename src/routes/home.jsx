import { Container } from "react-bootstrap";
import { useState } from 'react';
import { Helmet } from 'react-helmet'
import { useEffect } from "react";

import DealCard from "../lib/components/Deal";

const TITLE = 'FareDeal - Book Cheap Flights';
const OFFER_CARDS = 8;

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
        if(offers.length === 0) {
            getOffers().then((data) => {
                data.length = OFFER_CARDS
                setOffers(data)
            });
        }
    }, [])

    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <section>
                <Container className="my-4">
                    <div className="d-flex align-items-center my-3">
                        <h4>Live Deals</h4>
                        <div className="ms-auto btn btn-outline-primary rounded-pill px-4">{offers.length} Results</div>
                    </div>
                    <div className="row my-3 text-center">
                    {offers.map((offer, i) => {
                            return (
                                <DealCard offer={offer} key={i} />
                            )
                    })}
                    </div>
                </Container>
            </section>
            <section>
                <Container className="my-4">
                    <div className="d-flex align-items-center my-3">
                        <h4>Last Minute Offers</h4>
                        <div className="ms-auto btn btn-outline-primary rounded-pill px-4">{offers.length} Results</div>
                    </div>
                    <div className="row my-3 text-center">
                    {offers.sort( () => .5 - Math.random() ).map((offer, i) => {
                            return (
                                <DealCard offer={offer} key={i} />
                            )
                    })}
                    </div>
                </Container>
            </section>
            <section>
                <Container className="my-4">
                    <div className="d-flex align-items-center my-3">
                        <h4>Even More  Offers?!</h4>
                        <div className="ms-auto btn btn-outline-primary rounded-pill px-4">{offers.length} Results</div>
                    </div>
                    <div className="row my-3 text-center">
                    {offers.sort( () => .5 - Math.random() ).map((offer, i) => {
                            return (
                                <DealCard offer={offer} key={i} />
                            )
                    })}
                    </div>
                </Container>
            </section>
        </>
    );
  }