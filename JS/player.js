class Player{
    constructor(){
        
    }
getCount(){
database.ref('gameCount').on("value",function(){
 playerCount=data.val()
})
}
updateCount(Count){
    database.ref('/').update({
        playerCount:Count
    })
}
}