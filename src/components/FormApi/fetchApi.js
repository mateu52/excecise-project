const { REACT_APP_DB_ID, REACT_APP_API_KEY } = process.env;

        const baseUrl = `https://api.airtable.com/v0/${REACT_APP_DB_ID}`;
        
        const apiConfig = {
            identList: `${baseUrl}/identable`,
            idenDetail: `${baseUrl}/identable`
        }
        const requestConfig = {
            headers: {
                Authorization: `Bearer ${REACT_APP_API_KEY}`
            }
        }

export const fetchApi = async () => {

        const response = await fetch(apiConfig.identList, requestConfig);
        const responseData = await response.json();
        
        const data = [];
        console.log(responseData)
        responseData.records.forEach((elem) => {
            data.push({
                id: elem.id,
                name: elem.fields.name
            })
        })
        return data;

}    