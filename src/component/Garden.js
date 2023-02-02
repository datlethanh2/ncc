function Garden() {

    //react js
    const input=[
        [-5,-9, 9],
        [-8, -6, 7],
        [-10, 7, 5],
    ];
    const input1=[
        [0,0, 0],
        [0,1,1],
        [0, 1, 1],
    ];
    let output=0;
    for (let i = 0; i < input1.length; i++) {
        for (let j = 0; j < input1[i].length; j++) {
            if(input1[i][j]===1){
                output=output+input[i][j];
            }
           
        }
    }

    return (
        <div >
            <p><b>Garden:</b></p>
            <p>Output: {output}</p>
        </div>
    );
  }
  
  export default Garden;