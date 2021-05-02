import  './../styles/main.css';
import imgbackgroud from './../assets/img/opener-bg_1400.jpeg';
import layoutimg1 from './../assets/img/opener-1_1400.png';
import layoutimg2 from './../assets/img/opener-2_1400.png';
import bgc from './../assets/img/hide-c-bg_980.jpeg';
import hidec from './../assets/img/hide-c-1_980.png';

import React, { useEffect } from 'react';
function ParalaxMMA(){
    useEffect(()=>{
        window.addEventListener("scroll" , resizeHeaderOnScroll )
    },[])
    function resizeHeaderOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop
        const distanceX =  window.pageXOffset || document.documentElement.scrollLeft
        console.log()
        if (distanceY > 100){
          
            if ( document.getElementById("layoutimg1")
            && document.getElementById("layoutimg2")
            ){
            document.getElementById("layoutimg1").style.transform= `scale( ${1+ distanceY/4000},${1 +(distanceX /4000)} ) `;
            document.getElementById("layoutimg2").style.transform=`scale( ${1 +distanceY/3900},${1 +(distanceX /3900)} ) `;
            }
        }
        if( document.getElementById("layoutimg1") ){
            var height = document.getElementById("layoutimg1").style.height 
            if(distanceY > height +1000 ){
                if(document.getElementById("hidec") ){
                    document.getElementById("hidec").style.transform= `scale( ${1+ distanceY/9000},${1 +(distanceX /9000)} ) `
                }
            }
        }
       
    }
     
    return (
        <div >
           
            <div className="containerPara">
                <img  src ={imgbackgroud} className="backgroundimg" />
                <img id="layoutimg1"src ={layoutimg1} className="layoutimg1"/>
                <img id="layoutimg2"src ={layoutimg2} className="layoutimg2"/>
                <h1> MMA </h1>
            </div>

            <div className ="ContainerBody">
                <h1>MMA</h1>
            </div>
            <div className="containerPara">
                <img id="hidec" src={bgc} className="layoutimg1" />
                <img  src={hidec} className="layoutimg1"/>
            </div>
        </div>
    )
}
export default ParalaxMMA;