import axios from "axios"

export default async function getData() {
    const res = await axios.get('/data.json')
    const data = res.data
    return data.analytics
}