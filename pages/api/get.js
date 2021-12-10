import { sql_query } from '../../lib/db';


const handler = async (_, res) => {
  try {
    const results = await sql_query('SELECT * FROM `fcweb` WHERE `vctoCD` BETWEEN CURRENT_DATE() AND DATE_ADD(CURRENT_DATE(), INTERVAL 30 DAY) ORDER BY id ASC');
    return res.json(results);
  } catch (e) {
    res.status(200).json({ message: e.message });
  }
};

export default handler;