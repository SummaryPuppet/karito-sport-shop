export default function handler(req, res){
  const { id, q } = req.query

  if (id) {
    const item = {}

    return res.status(200).json(item)
  }

  // keyword to search for
  if (q) {
    const results = {}

    return res.status(200).json(results)
  }

  res.status(400).json()
}
