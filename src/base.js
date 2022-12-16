import Airtable from "airtable"

const { REACT_APP_API_KEY, REACT_APP_BASE_ID } = process.env

const base = new Airtable({apiKey: REACT_APP_API_KEY}).base(
    REACT_APP_BASE_ID);

export default base;