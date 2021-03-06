import { getSupplies } from "./database.js"
import { Supply } from "./Supply.js"

const contentTarget = document.querySelector(".supplies")

const SupplyList = () => {
    const supplyArray = getSupplies()
    contentTarget.innerHTML = "<h1>Art Supplies</h1>"

    supplyArray.forEach(
        (supplyObject) => {
            contentTarget.innerHTML += Supply(supplyObject)
        }
    );
}
