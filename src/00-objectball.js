function gameObject(){
    let obj={
        home:{
            teamName:"Brooklyn Nets",
            colors:['black','white'],
            players:{
                'Alan Anderson':{
                    Number:0,
                    Shoe:16,
                    Points:22,
                    Rebounds:12,
                    Assists:12,
                    Steals:3,
                    Blocks:1,
                    SlamDuncks:1,
                },'Reggie Evans':{
                    Number:30,
                    Shoe:14,
                    Points:12,
                    Rebounds:12,
                    Assists:12,
                    Steals:12,
                    Blocks:12,
                    SlamDuncks:7,
                },'Brook Lopez':{
                    Number:11,
                    Shoe:17,
                    Points:17,
                    Rebounds:19,
                    Assists:10,
                    Steals:3,
                    Blocks:1,
                    SlamDunks:15,
                },'Mason Plumlee':{
                    Number:1,
                    Shoe:19,
                    Points:26,
                    Rebounds:12,
                    Assists:6,
                    Steals:3,
                    Blocks:8,
                    SlamDunks:5,
                },'Jason Terry':{
                    Number:31,
                    Shoe:15,
                    Points:19,
                    Rebounds:2,
                    Assists:2,
                    Steals:4,
                    Blocks:11,
                    SlamDunks:1,
                },
            },
        },
        away:{
            teamname:'Charlotte Hornets',
            colors:['Turquoise','Purple'],
            players:{
                'Jeff Adrien':{
                    Number: 4,
                    Shoe: 18,
                    Points: 10,
                    Rebounds: 1,
                    Assits: 1,
                    Steals: 2,
                    Blocks: 7,
                    SlamDuncks:2 ,
                },'Bismak Biyombo':{
                    Number: 0,
                    Shoe: 16,
                    Points: 12,
                    Rebounds: 4,
                    Assits: 7,
                    Steals: 7,
                    Blocks: 15,
                    SlamDuncks:10 ,
                },'DeSagna Diop':{
                    Number: 2,
                    Shoe: 14,
                    Points: 24,
                    Rebounds: 12,
                    Assits: 12,
                    Steals: 4,
                    Blocks: 5,
                    SlamDuncks: 5,
                },'Ben Gordon':{
                    Number:8 ,
                    Shoe: 15,
                    Points: 33,
                    Rebounds: 3,
                    Assits: 2,
                    Steals: 2,
                    Blocks: 1,
                    SlamDuncks:0 ,
                },'Brendan Haywood':{
                    Number:33 ,
                    Shoe:15 ,
                    Points: 6,
                    Rebounds:12 ,
                    Assits:12 ,
                    Steals: 22,
                    Blocks:5 ,
                    SlamDuncks:12 ,
                },
            },

        },

        
        
        
    }
}
function numPointsScored(name){
     let object=gameObject();
     if (object.home.players[name]){
        return object.home.players[name].Points;
     }else if (objects.away.players[name]){
        return object.away.players[name].Points;
     }
     else{
        return false;
     }
}
function shoeSize(name){
    let object=gameObject();
    if (object.home.player[name]){
        return object.home.player[name].Shoe;
    }if (object.away.player[name]){
        return object.away.player[name].Shoe;
    }else{
        return false;
    }
}
function teamColours(teamName){
    let object=gameObject();
    if (object.home.teamName===teamName){
        return object.home.colors;
    }if (object.away.teamName===teamName){
        return object.away.colors;
    }else{
        return false;
    };
}
function teamNames(){
    let object=gameObject();
    let names=[object.home.teamName,object.away.teamName];
    return names;
}
function playerNumbers(teamName){
    let object=gameObject();
    let numbers=[]
    if(object.home.teamName===teamName){
        for (let player in object.home.players){
            console.log(player);
            numbers.push(object.home.players[player].Number);
        }
        }else{
            for(let player in objectbject.away.player){
                console.log(player);
                numbers.push(object.away.players[player].Number);
            }
        }
    return numbers;
}
function playerStats(player){
    let object=gameObject();
    let stats={}
    if (object.home.player===player)
    for(let player in object){
        console.log(player);
        stats.push(objects.home.players[player])
    }else{
        for(let player in object.away.player){
            console.log(player);
            stats.push(object.away.players[player])
        }
    }
return stats;
}
function bigShoeRebounds(){
    let object=gameObject();
    let shoeSize=0;
    let playerWithLargestShoeSize={}
    let playerName="";
    for(let player in object.home.players){
        if(object.home.players[player].shoe>shoeSize){
            shoeSize=object.home.players[player].shoe;
            playerWithLargestShoeSize=object.home.players[player];
            playerName=player;
        }
    }
    for(let player in object.away.players){
        if(object.away.players[player].Shoe>shoeSize){
            shoeSize=object.away.players[player].Shoe;
            playerWithLargestShoeSize=object.away.players[player];
            playerName=player;
        }
    }
    return {
        [playerName]:playerWithLargestShoeSize,
    }

}
function mostPointsScored(){
    let object=gameObject();
    let points=0
    let playerWithMostPoints={}
    let playerName=''
    for(let player in object.home.players){
        if(object.home.players[player].Points){
            object.home.players[player].Points>points;
            playerWithMostPoints=object.home.players[player];
            playerName=player;
        }
    }
    for (let player in object.away.players){
        if(object.away.players[player].Points){
            object.away.players[player].Points>points;
            playerWithMostPoints=object.away.player[player];
            playerName=[player];
        }
    }return{
        [playerName]:playerWithMostPoints
    }

}
function calculateTotalPoints(){
let totalPoints = 0;
for (let player in team.players) {
    totalPoints += team.players[player].Points;
}
return totalPoints;
}


const totalPointsHomeTeam = calculateTotalPoints(obj.home);
const totalPointsAwayTeam = calculateTotalPoints(obj.away);


let winningTeam;
if (totalPointsHomeTeam > totalPointsAwayTeam) {
winningTeam = obj.home.teamName;
} else if (totalPointsHomeTeam < totalPointsAwayTeam) {
winningTeam = obj.away.teamName;
} else {
winningTeam = "It's a tie!";
}

return winningTeam;