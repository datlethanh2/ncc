import React from 'react';

function Student(){

    //react js
    const n=5;
    const ai=[1,1,2,1,2];
    const id=1;
    let loai1=[];
    let loai2=[];
    let output=[];
    function Sort(n, ai) {
        for(let i=0;i<n; i++){
            //các học sinh loại 1
            if(ai[i]===1){
                loai1.push(i+1);
            }
            //các học sinh loại 2
            if(ai[i]===2){
                loai2.push(i+1);
            }         
        }
    }   
    function Factorial(a) {
        let factorial = 1;
        let i = 1;    
        while (i<= a) {
            factorial*=i;
            i++;
        }
        return factorial;
    }   
    function Combinations(a, b){
        if (a===b || b===0) {
            return 1;
        }
        if(a<b){
            return 0;
        }
        if(a>b){
            return Factorial(a)/(Factorial(b)*Factorial(a-b));
        }
    }
    function Outputstudent() {
        Sort(n, ai);
        for(let i=0;i<n; i++){
            if(ai[i]===1){
                let a=Combinations(loai1.length-1, 2)+Combinations(loai2.length, 2)
                output.push(a);
            }
            if(ai[i]===2){
                let a=Combinations(loai1.length, 2)+Combinations(loai2.length-1, 2)
                output.push(a);
            }
        }
    }
    Outputstudent();

    return(
        <div>
            <p><b>Student:</b></p>
            <p>Số học sinh: {n}</p>
            <p>Xếp loại: {ai}</p>
            <p>Output: {output}</p>
        </div>
    )
}

export default Student;