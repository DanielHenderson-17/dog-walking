import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener(
    "click",
    (clickEvent) => {
        const cityTarget = clickEvent.target
        if (cityTarget.dataset.type === "city") {
            const cityId = parseInt(cityTarget.dataset.cityid)
            const walkersInCity = walkers.filter(walker => walker.cityId === cityId)
            const walkerNames = walkersInCity.map(walker => walker.name).join(", ")
            window.alert(`${walkerNames} is servicing this city.`)
        }
    }
)

export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const city of cities) {
        citiesHTML += `<li data-type="city" data-cityid="${city.id}">${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}
