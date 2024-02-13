var numSelected = null;
var tileSelected = null;
var errors = 0;

var board = [
  "         ",
"         ",
  "         ",
  "         ",
  "         ",
  "         ",
  "         ",
  "         ",
  "         "
];
for(let i=0;i<board.length;i++)
    {let M=board[i].split("");board[i]=M;}
/*function isSafe(solution,row,col,n){
 for(let i=0;i<9;i++){
   if(solution[i][col]==(n.toString())){
     return false;
   }
   if(solution[row][i]==(n.toString()))
   {
     return false;
   }
 }
 var sr=row/3*3;
 var sc=col/3*3;
 for(let i=sr;i<sr+3;i++)
 {
   for(let j=sc;j<sc+3;j++)
   {if (solution[i][j]==(n.toString()))
     {
       return false;
     }


   }
 }
 return true;
}

//function helper(solution,row,col){
  if(row==9)
  {
    return true;
  }
var nrow=0;var ncol=0;
if(col == 8){
  ncol=0;nrow=row+1;
}
else {
  ncol=col+1;
  nrow=row;
}

if(solution[row][col] !=" ")
{
  if ( helper(solution,nrow,ncol ) )
  {
    return true;
  }
}
else{
  for(let i=1;i<=9;i++)
  {if(isSafe(solution,row,col,i))
    {
    solution[row][col]=(i.toString());
      if(helper(solution,nrow,ncol))
      {
        return true;
      }
    }
    else{
      solution[row][col]=" "
    }


  }
}
}*/





  setGame();


function setGame() {

  for (let i = 1; i < 10; i++) {
    let number = document.createElement("div");
    number.id = i
    number.innerText = i;
    number.addEventListener("click", selectNumber);
    number.classList.add("number");
    document.getElementById("digits").appendChild(number);
  }
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();


      if (r == 2 || r == 5) {
        tile.classList.add("horizontal-line");

      }
      if (c == 2 || c == 5) {
        tile.classList.add("vertical-line");

      }
      tile.addEventListener("click", selectTile);
      tile.classList.add("tile");
      document.getElementById("board").append(tile);
    }
  }
  let num= document.createElement("div");
  num.classList.add("number");
  num.innerText="e";
  num.id="e";
  document.getElementById("digits").appendChild(num);
  num.addEventListener("click",selectNumber);}

function selectNumber() {
  if (numSelected != null) {
    numSelected.classList.remove("number-selected");

  }
  numSelected = this;
  numSelected.classList.add("number-selected");

}
function selectTile(){


  if (numSelected)
  {if(numSelected.id =="e")
  {
    this.innerText=null;
    let coords=this.id.split("-");
    let r= parseInt (coords[0]);

    let c= parseInt (coords[1]);

   // this.innerText=numSelected.id;

    board[r][c]=this.innerText;
    
  }
else{
    let coords = this.id.split("-");
    let r= parseInt (coords[0]);
    let c= parseInt (coords[1]);
    this.innerText=numSelected.id;
    board[r][c]=this.innerText;

}
   //alert(numSelected.innerText)

  }

}


let play= document.getElementById("playbtn");
play.addEventListener("click",setGame1);
//etGame1();
var solution=board;


//soution finder


//alert(solution);
let e=document.getElementById("e");

function setGame1()
{
//helper(solution,0,0);
//alert(solution);
//console.log(board);
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let id=r.toString() + "-" + c.toString();
      let e=document.getElementById(id);
      if (board[r][c] != " ") {
      e.innerText = board[r][c];
        e.classList.add("tile-start");}
        e.removeEventListener("click",selectTile);
        e.addEventListener("click",selectTile1);

      }}

      play.remove();
      e.remove();


}

function selectTile1()
{
if (numSelected)
{
if(this.innerText != "")
{
  return;
}
let coords = this.id.split("-");
let r= parseInt (coords[0]);
let c= parseInt (coords[1]);


  this.innerText = numSelected.id;


/*else
{
  errors +=1;
  document.getElementById("errors").innerText = errors;
}*/
}

}
