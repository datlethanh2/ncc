function Dragonball() {
    
    //React js

    const k=7;
    const q=2;
    const input=[1,2,2,1,1,2,1];  
    const input1=[
        [1,2],
        [2,3],
        [2,4],
        [1,5],
        [5,6],
        [4,7],
    ];

    const city=[];
    const call=[];
    //Gọi tên thành phố
    for(let i=0; i<k; i++){
        city.push([i+1]);
        call.push([i+1]);
    }
    //Lấy đỉnh lân cận
    for(let i=0; i<input1.length; i++){
        for(let j=0; j<input1[i].length; j++){
            for(let l=0; l<k; l++){  
                if(input1[i][j]===l+1){
                    if((input1[i][j-1]||input1[i][j+1])>i+1){
                        city[l].push(input1[i][j-1]||input1[i][j+1]);
                    }                   
                }                                       
            }      
        }
    }
    //Lấy thành phố con
    for(let i=0; i<city.length; i++){
        let a=0;
        for(let j=0; j<city[i].length; j++){
            a=city[i].concat(city[city[i][j]-1]);
            city[i]=[...new Set(a)]
        }
    }
    //Đếm ngọc
    for(let i=0; i<city.length; i++){
        let ngoc1=0;
        let ngoc2=0;
        for(let j=0; j<city[i].length; j++){           
            if(input[city[i][j]-1]===1){
                ngoc1++;              
            }
            if(input[city[i][j]-1]===2){
                ngoc2++;              
            }         
        }
        call[i].push(ngoc1, ngoc2);
    }
    //Gọi rồng
    const output=[]
    for(let i=0; i<call.length; i++){
        let a=0;
        for(let j=1; j<call[i].length; j++){ 
            if(call[i][1]!==0 && call[i][2]!==0){
                a=1;
            }
            else{
               a=0;
            }      
        }
        output.push(a);       
    }
    console.log(output);
    

    return (
      <div>
            <p><b>Dragonball:</b></p>
            <p>Output: {output}</p>
      </div>
    );
}
  
export default Dragonball;
  