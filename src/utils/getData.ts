import axios from "axios";
type data={
    selected_metric:string,
    selected_device:string
}
const getMarketItem =async (data:data)=>{
    const response = await axios.get(`https://example-metrics.speedvitals.workers.dev/?metric=${data.selected_metric}&device=${data.selected_device}`)
    return response.data;
}

export default getMarketItem
