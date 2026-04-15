import { URL } from 'src/pages/constantes/data.jsx';
import axios from 'axios';



class ManageEctn {
   async getdrafts() {
    try {
      
      const token = localStorage.getItem('uifort-authentication'); 
      const response = await axios.get(`${URL}api/drafts`, {
          headers: {
           
            Authorization: `Bearer ${token}`,
          },
        });
      console.log('api/drafts/get',response);
  
      return response.data;
    } catch (error) {
        console.log('error',error)
        return error.response?.data;
    }

  }

  async storeBol(params) {
    try {
        const token = localStorage.getItem('uifort-authentication'); 
        console.log('api/drafts2',params)
        const response = await axios.post(`${URL}api/drafts/store_v2`, params,
          {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
        );
        console.log('api/drafts3',response);
      
        return response.data;
    } catch (error) {
        console.log('error',error)
        return error.response?.data;
    }
   
  }
  async getDraft(id) {
    try {
      const token = localStorage.getItem('uifort-authentication'); 
    
      console.log('api/drafsge',id)
      const response = await axios.get(`${URL}api/drafts/${id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('get/drafts4',response);
      const data = response?.data.drafts;
      const condition_types = response?.data?.condition_types;
      const product_types = response?.data?.product_types;
      const currencies = response?.data?.currencies;
      const incoterms = response?.data?.incoterms
      const countries = response?.data?.countries
      const vessels = response?.data?.vessels

      return {data,condition_types,product_types,currencies,incoterms,countries,vessels};
    } catch (error) {
        console.log('error',error)
        return error.response?.data;
    }
    
  }

  async updateDraft(id,params) {
    try {
        const token = localStorage.getItem('uifort-authentication'); 
        console.log('api/drafts/update1',id,params)
        const response = await axios.put(`${URL}api/drafts/${id}`, params,
          {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        );
        const data = response.data;
        console.log('api/drafts/update2',response.data);
        return response?.data;
    } catch (error) {
        console.log('error',error)
        return error.response?.data;
    }
  
    }

}
export const manageEctn = new ManageEctn();
