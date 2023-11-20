import { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@vercel/postgres";

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse
) {
	try {
		const client = await sql.connect();
		const result = await client.sql`SELECT NOW()`;
		return response.status(200).json({ result });
	} catch (error) {
		return response.status(500).json({ error });
	}
}
