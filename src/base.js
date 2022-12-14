import Airtable from "airtable"
import { env } from "process"

const API_KEY = env.API_KEY;
const BASE_ID = env.BASE_ID;

const base = new Airtable({apiKey: API_KEY}).base(
    BASE_ID);

export default base;