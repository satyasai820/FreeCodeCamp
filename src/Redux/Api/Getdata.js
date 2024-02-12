
import { Base_url } from "./Commonapi";
import axios from "axios";

export const Getdata = async () => {

    try {
        const response = await axios.get(`${Base_url}/maincontent.json`);
        
        console.log('i am resoonse in api', response)
        const jsonData = response.data;
        if (jsonData === null) {
            return [];
        } else {
            return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));

        }
    }
    catch (error) {
        console.log('error in  get api data', error.message)
        return [];
    }

}

export const AccordionGetData = async () => {
    try {
        const response = await axios.get(`${Base_url}/accordiondata.json`);
        const jsonData = response.data;

        console.log("This is accordion data", jsonData);

        if (jsonData === null) {
            return [];
        } else {
            return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
        }

    } catch (error) {
        console.error('Error in getting API data', error.message);
        return [];
    }
};



