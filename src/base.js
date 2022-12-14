import Airtable from "airtable"

const API_KEY = process.env.API_KEY;
const BASE_ID = process.env.BASE_ID;

const base = new Airtable({apiKey: API_KEY}).base(
    BASE_ID);

export default base;