import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    // Initizilation effect hook -> Go get location data
    useEffect(() => {
        getLocations()
    }, [])

    return (
        <div className="locationContainer">
            <h1>Locations</h1>

            <article className="locations">
                {
                    locations.map(location => {
                        return <section className="location" key={location.id}>
                            <h3>{location.address}</h3>
                        </section>
                    })
                }
            </article>
        </div>
    )
}