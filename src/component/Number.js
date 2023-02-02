

function Number() {

    //react js
    
    const n=6;
    let f=-1;
    let a=[-1];
    function Recursive(n) {
        let recursive = -1;
        let i = 2;    
        while (i<= n) {  
            recursive=recursive +Math.pow(-1, i)*i; 
            a.push(recursive)
            i++;        
        }    
        return recursive;
    } 
    function OutputNumber(n){
        if (n===1) {
            f=-1;
        }
        if(n>1){
            f=Recursive(n);
        }
    }
    OutputNumber(n);
    // console.log("Input: ", n);
    // console.log("Output: ", f);
    // console.log("Output numbers: ", a);
    
    return (
        <div >
          <p><b>Number:</b></p>
          <p>Input: {n}</p>
          <p>Output: {f}</p>
          <p>Output numbers: {a}</p>
        </div>
    )
}
  
export default Number;