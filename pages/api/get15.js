import { sql_query } from '../../lib/db';


const handler = async (_, res) => {
  try {
    const results = await sql_query('SELECT * FROM `fcweb` WHERE `vctoCD` = DATE_ADD(CURRENT_DATE(), INTERVAL 15 DAY)');
    return res.json(results);
  } catch (e) {
    res.status(200).json({ message: e.message });
  }
};

export default handler;