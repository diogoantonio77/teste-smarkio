const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, comment FROM coments order by id asc`);
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta
  }
}

async function create(coments) {
  const result = await db.query(
    `INSERT INTO coments 
    (comment) VALUES (?)`,
    [
      coments.comment,
    ]
  );

  let message = 'Error in creating coments';

  if (result.affectedRows) {
    message = 'comment created successfully';
  }

  return { message };
}

async function update(id, coments) {
  const result = await db.query(
    `UPDATE coments SET comment=? WHERE id=?`,
    [
      coments.comment
    ]
  );

  let message = 'Error in updating coments';

  if (result.affectedRows) {
    message = 'comment updated successfully';
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(
    `DELETE FROM comment WHERE id=?`,
    [id]
  );

  let message = 'Error in deleting comment';

  if (result.affectedRows) {
    message = 'comment deleted successfully';
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
 
}