import { sql_query } from '../../lib/db';


const handler = async (_, res) => {
  try {
    const results = await sql_query('SELECT * FROM `fcweb` WHERE `vctoCD` = CURRENT_DATE()');
    return res.json(results);
  } catch (e) {
    res.status(200).json({ message: e.message });
  }
};

export default handler;