import { toast } from "react-toastify"
const addToStoreDb = (id) => {
    const storeApps = getStoreApps()
    if (storeApps.includes(id)) {
        toast('This Apps is Already Install')
        return
    }
    else {
        storeApps.push(id)
        const data = JSON.stringify(storeApps)
        localStorage.setItem('AppsList', data)
         toast('Install successfully Done')
    }
}

// Get the app 

const getStoreApps = () => {
    const storeApps = localStorage.getItem('AppsList')
    if (storeApps) {
        const storeApp = JSON.parse(storeApps)
        return storeApp
    }
    else {
        return []
    }

}

// Removed app 

const removestoreApp = (id) => {
    const items = JSON.parse(localStorage.getItem('AppsList') || []);
    const newItems = items.filter(appid => parseInt(appid) !== id)
    localStorage.setItem('AppsList', JSON.stringify(newItems))
}
export { addToStoreDb, getStoreApps, removestoreApp }