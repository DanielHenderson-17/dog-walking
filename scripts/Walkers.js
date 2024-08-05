import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener(
    "click",
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target

        if (whatWasClickedOn.dataset.type === "walker") {
            const cityId = parseInt(whatWasClickedOn.dataset.cityid)
            const city = cities.find(city => city.id === cityId)
            window.alert(`This walker works in ${city.name}`)
        }
    }
)

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li data-id="${walker.id}"
                           data-cityid="${walker.cityId}"
                           data-type="walker"
                        >${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML
}
