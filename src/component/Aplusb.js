function Aplusb() {

    //react js
    
    const n=3;
    const input=[
        [1, 1],
        [-1,0],
        [-1,1],
    ];
    const output=[];
    for(let i=0; i<n;i++){
        let a=0;
        for(let j=0; j<2;j++){
            a=input[i][0]+input[i][1];
        }
        output.push(a);
    }

    return (
      <div>
            <p><b>A Plus B: </b></p>
            <p>Output: {output}</p>
      </div>
    );
  }
  
  export default Aplusb;