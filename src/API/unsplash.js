import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
     Authorization: 'Client-ID VtVD0ZugptbaChNsxwhEIsUusrF_hsc0qNEdnZgPkRM'   
         }

});