import { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse
) {
	try {
		const { email, password } = request.body;
		const hashedPassword = await bcrypt.hash(password, 10);
		const result = await sql`
			INSERT INTO users (email, password)
			VALUES (${email}, ${hashedPassword})
			RETURNING id, email;
    `;
		return response.status(200).json({ user: result.rows[0] });
	} catch (error) {
		return response.status(500).json({ error });
	}
}
