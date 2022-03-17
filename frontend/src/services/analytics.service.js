import axios from "axios"
const PATH = process.env.analytics_path || 'analytics'
export default async function getData() {
    const res = await axios.get(`/analytics/data.json`)
    const data = res.data
    return data.analytics
}