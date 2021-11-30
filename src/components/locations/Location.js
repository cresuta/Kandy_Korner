import React from "react";

export const Location = (location) => (
    <>
    <section className="location">
        <h3 className="location__address">${location.address}</h3>
        <div className="location__sqFootage">${location.sqFootage}</div>
        <div className="location__handicapAccessible">${location.handicapAccessible}</div>
    </section> 
    </>
)