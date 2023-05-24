export default function handler(req, res) {

    if(!req.query.range){
        return res.status(400).json(
            {
                error: "Range amount missing"
            }
        )
    }

    return res.status(200).json(
        {
            randomNum: Math.floor(Math.random()*req.query.range)
        }
    )
  }