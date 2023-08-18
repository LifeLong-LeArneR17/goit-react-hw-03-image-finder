import axios from "axios";


const API_KEY = "32926626-9f8218f21c9ddc7b36f942801";

axios.defaults.baseURL = "https://pixabay.com/api/";

export async function getPhotoServices(name, targetPage) {
    const params = {
        q: name,
        page: targetPage,
        per_page: 12,
        key: API_KEY,
        image_type: "photo",
        orientation: "horizontal",
    };
    const response = await axios.get("", {params});
    return response.data;
}
