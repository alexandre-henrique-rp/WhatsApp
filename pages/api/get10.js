import { sql_query } from '../../lib/db';


const handler = async (_, res) => {
  try {
    const results = await sql_query('SELECT id, vctoCD, s_alerta, tipoCD, telefone, email, IF(tipocd LIKE "%J%", razaosocial, nome) AS titulo, CASE WHEN tipocd LIKE "%J%" THEN cnpj WHEN tipocd LIKE "%F%" THEN cpf END as titulo_doc FROM fcweb WHERE  s_alerta = "ATIVADO" AND `vctoCD` = DATE_ADD(CURRENT_DATE(), INTERVAL 10 DAY)');
    return res.json(results);
  } catch (e) {
    res.status(200).json({ message: e.message });
  }
};

export default handler;