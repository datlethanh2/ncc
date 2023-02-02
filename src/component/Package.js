
function Package() {

    //react js
    const n=3;
    const input=[
        {
            ai: 5,
            bi: 2,
        },
        {
            ai: 2,
            bi: 3,
        },
        {
            ai: 3,
            bi: 1,
        }
    ];
    const m=4;
    let khoiluong=[];
    let baohang=[];
    input.forEach((item, index)=>{
        khoiluong.push(item.ai); 
        baohang.push(item.bi);    
    });
    let luot=baohang[khoiluong.indexOf(Math.min(...khoiluong))];
    for(let i=khoiluong.indexOf(Math.min(...khoiluong)); i<n;i++){
        if(m<=luot){
            luot=i
        }else{
            luot=luot+baohang[i+1];
        }
    } 
    console.log(luot);

    return (
        <div>
            <p><b>Package:</b></p>
            <p>Input:</p>
            <p>-Lượt N: {n}</p>
            <p>-Input:</p>      
            {input.map((item, index) =>
                <p key={index}>
                    +Số lượt: {index+1}-Khối lượng: {item.ai}-Số bao hàng: {item.bi}
                </p>
            )}
            <p>-Lượt M: {m}</p>
            {input.filter((item, index)=>(index===luot)).map((item,index)=>
                <p key={index}>Output: {item.ai}</p>
            )}
        </div>  
    );
  }
  
  export default Package;