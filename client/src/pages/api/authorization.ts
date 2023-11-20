import { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse
) {
	try {
		const { email, password } = request.body;
		const result = await sql`
      SELECT * FROM Users WHERE email = ${email};
    `;
		const user = result.rows[0];
		if (user && (await bcrypt.compare(password, user.password))) {
			return response.status(200).json({ user });
		} else {
			return response
				.status(401)
				.json({ error: "Неверный адрес электронной почты или пароль" });
		}
	} catch (error) {
		return response.status(500).json({ error });
	}
}
