import React from "react"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"

export const KandyKorner = () => (
    <>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    </>
)