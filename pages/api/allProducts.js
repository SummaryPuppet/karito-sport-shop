import db from "/db.json"

export default function handler (req, res){
  return res.status(200).json(db)
}
