//alberi binari
class Tree{
    constructor(val,sx,dx){
        this.val = val;
        this.sx = sx;
        this.dx = dx;
    }
}
//massimo di un albero
function maxT(t){
  var maxSx = - Infinity;
  var maxDx = - Infinity;
  if (t.sx != undefined)maxSx = maxT(t.sx);
  if (t.dx != undefined)maxDx = maxT(t.dx);
  return Math.max(maxSx,maxDx,t.val)
}
//max ricorsivo
function maxTr(t){
  if (t == undefined)return - Infinity;
  return Math.max(maxTr(t.sx),maxTr(t.dx),t.val);
}
//ricerca in un albero
function find(t,x){
  if (t == undefined)return false;
  return (t.val == x) || find(t.sx,x) || find(t.dx,x)
}
//ricerca e conta 
function CountFind(t,x){
  if (t == undefined)return 0;
  return (t.val == x ? 1:0) + CountFind(t.sx,x) + CountFind(t.dx,x);
}
//conteggio nodi albero
function Count(t){
  if (t == undefined)return 0;
  return 1 + Count(t.sx,x) + Count(t.dx,x);
}
//somma del valore dei nodi di un albero
function sumT(t){
  if (t == undefined)return 0;
  return somma = t.val + sumT(t.sx) + sumT(t.dx);
}
//tagliare da un albero i nodi con valore dato
function cutT(t,x){
    if ( t == undefined)return;
    if (t.sx && t.sx.val == x){
        delete t.sx
    }else{
        cutT(t.sx,x);
    }
    if (t.dx && t.dx.val == x){
        delete t.dx
    }else{
        cutT(t.dx,x);
    }
    return t;
}
// scambiare rami dx ed sx di un albero
function swap(t){
  temp = t.dx;
  t.dx = t.sx;
  t.sx = temp;
  return t;
}
// es 5: Si scriva una funzione verifica(T) che, dato un albero binario non vuoto T come definito a lezione (oggetti con chiavi val e sx e dx), restituisce true se il valore memorizzato in ogni nodo è maggiore stretto di quello memorizzato nei suoi due figli, e false altrimenti.
function verifica(T){
  if (T == undefined)return;
  if (T.val > T.sx.val && T.val > T.dx.val){
    console.log("true")
    return true;
  }
  if (T.val <= T.sx.val || T.val <= T.dx.val){
    console.log("false")
    return false;
  }
  return T.val && verifica(T.sx) && verifica(T.dx)
}

// creazione albe
T4 = new Tree(11);
T3 = new Tree(78);
T2 = new Tree(15,T3);
T1 = new Tree(7,T2,T4);

// TEST CASE
xc = 9
x = 908
console.log(maxT(T1),"max val non ricorsivo")
console.log(maxTr(T1),"max val ricorsivo")
console.log(find(T1,x), "ricerca valore",x)
console.log(CountFind(T1,9),"CountFind");
console.log(Count(T1),"Count");
console.log(sumT(T1),"somma elementi di un albero")
console.log(cutT(T1,xc),"cut");
console.log(swap(T1),"swap");
swap(T1)
console.log("verifica",verifica(T1))
    
