
var board = [
  "--74916-5",
  "2---6-3-9",
  "-----7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--45---"];

function isSafe(board,row,col,n){
 for(let i=0;i<9;i++){
   if(board[i][col]==(n.tostring())){
     return false;
   }
   if(board[row][i]==(n.toString()))
   {
     return false;
   }
 }
 var sr=row/3*3;
 var sc=col/3*3;
 for(let i=sr;i<sr+3;i++)
 {
   for(let j=sc;j<sc+3;j++)
   {if (board[i][j]==(n.toString()))
     {
       return false;
     }


   }
 }
 return true;
}

function helper(board,row,col){
var nrow=0;var ncol=0;
if(row == 8)
{
  return true;
}
if(col == 8){
  ncol=0;nrow=row+1;
}
else {
  ncol=col+1;
  nrow=row;
}

if(board[row][col]!="-")
{
  if(helper(board,nrow,ncol))
  {
    return true;
  }
}
else{
  for(let i=1;i<=9;i++)
  {if(isSafe(board,row,col,i))
    {
      board[row][col]=(i.toString());
      if(helper(board,nrow,ncol))
      {
        return true;
      }
    }
    else{
      board[row][col]="-"
    }


  }
}
}
helper (board,0,0);
