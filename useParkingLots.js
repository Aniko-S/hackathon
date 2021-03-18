import axios from 'axios'
import {useEffect, useState} from "react";

async function fetchParkingLots() {
    const {data} = await axios.get('http://parking.nemethroland.hu:3000/parking');
    return data
}

export default function useParkingLots() {
    const [parkingLots, setParkingLots] = useState([])
    useEffect(() => {
        const interval = setInterval(async () => {
            const newParkingLots = []
            const parkingLotsData = await fetchParkingLots()
            Object.keys(parkingLotsData).forEach((id) => {
                newParkingLots.push(parkingLotsData[id])
            })
            setParkingLots(newParkingLots.map(point => ({
                latitude: point.latitude,
                longitude: point.longitude,
                weight: point.isFree ? 0.1 : 1,
            })))
        }, 3000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return parkingLots
}