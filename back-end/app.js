 require("dotenv").config();
const express = require('express');
const fs = require('fs').promises;
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());



app.use('/',(req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use('/test', (req, res, next) => {
  const stuff = [
    {
      name: 'oeihfzeomi',
      mail: 'Mon premmier objet',
      nam: 'Les infos mde mon premier objet',
    },
    {
      name: 'oeihfzeoi',
      mail: 'Mon premier objet',
      nam: 'Les infos de mon premier objet',
    },
  ];
  res.status(200).json(stuff);
  next();
})

app.get('/',(req,res,next)=> { 
  fs.readFile(__dirname + "/index.html")
   .then(contents => {
     res.setHeader("Content-Type", "text/html");
     res.writeHead(200);
     res.end(contents);
   })
   .catch(err => {
     res.writeHead(500);
     res.end(err);
     return;
   });
});

users = [];

app.get('testi', (req,res,next) => {
  res.json(users);
})
app.post('/testi' ,(req,res,next) =>{
  usrs = { name: req.body.user_name}
  users.push(usrs);
  res.status(200).json(users);
})



app.listen(4000);


module.exports = app





public Node getBestPath()
{
    int cout = 1;
    Node startNode = new Node(manhattanDistance(this.posActiveRobot, this.posActiveGoal) + cout, cout, this.initialState, null, null);
    PriorityQueue<Node> openList = new PriorityQueue<Node>(new NodeComparator());
    openList.add(startNode);
    HashSet<Node> closeList = new HashSet<>();

    while (!(openList.isEmpty()))
    {
        Node n = openList.poll();

        cout ++;


        if (n.getState().Get_Robot()[n.getState().getActiveGoal()][0] == this.posActiveGoal[0] && n.getState().Get_Robot()[n.getState().getActiveGoal()][1] == this.posActiveGoal[1])
        {
            return n;
        }

        for (int i = 0; i <= 3; i++)
        {
            for (Move move : n.getState().getMove(i))
            {
                State s;

                try {
                    s = n.getState().getClone();
                    s.play(move, i);
                }
                catch (Exception e) {return null;}

                int[] newPosRobot = s.Get_Robot()[s.getActiveGoal()];

                Node node = new Node(manhattanDistance(newPosRobot, this.posActiveGoal) + cout, cout, s, n, move);


                if (isInterestingNode(openList, closeList, node))
                {

                    openList.add(node);
                }
            }
        }
    }
    return null;
}