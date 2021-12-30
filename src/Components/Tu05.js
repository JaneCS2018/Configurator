import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Accordion from './Accordion';
import './Tu05.css'
import Excel from './excel';
import {code, price, View} from './Data'

function Tu05(){
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const [products] = Excel()
    //Get Mounting Options
    const [mounting, setMounting] = useState("Pendant 2m Cord") 
    const [mountColor, setMountColor] = useState("Black")
    const [reflector, setReflector] = useState("ф 12” Bell")
    const [Exterior, setExterior] = useState("Clear PC")
    const [wattage, setWattage] = useState("30W")
    const [CRI, setCRI]= useState("80")
    const [CCT, setCCT] = useState("3000K")
    const [Control, setControl]=useState("None")

    //Images
    const [imageValue, setimageValue]=useState("SIDE")

    //Active Button
    const [activeButton, setActiveButton] = useState(0)
    const [activeMountColor, setActiveMountColor]=useState(0)
    const [activeReflector, setActiveReflector]=useState(0)
    const [activeExterior, setActiveExterior]= useState(0)
    const [activeWattage, setActiveWattage] = useState(0)
    const [activeCRI, setActiveCRI] = useState(0)
    const [activeCCT, setActiveCCT] = useState(0)
    const [activeControl, setActiveControl] = useState(0)
    
    //Get Quantity Number
    const [quantity, setQuantity] = useState(1)
    const [cart, setCart] = useState(0)

    //Animate Buttton
    const [animate, setAnimate] = useState(false);
    const handleClick = () => {
        setAnimate(!animate)
        setCart(parseInt(cart)+parseInt(quantity))
        setTimeout(() => setAnimate(false), 500);
    };
   
    //Get Mount Color
    let res=[]
    let ref =[]
    let finish = []
    let power=[]
    let cri = []
    let cct =[]
    let control =[]
    for (let i=0; i<products.length; i++){
        if(products[i]['Series']==="TU05"){
            ref = products[i]['Reflector Type'].split(',')
            power= products[i]['Input Wattage'].split(',')
            cri= products[i]['CRI'].split(',')
            cct = products[i]['CCT'].split(',')
            control = products[i]['Controls'].split(',')
            if (products[i]['Mounting Options']===mounting){
                res =  products[i]['Mount Color'].split(',')
            }
        }
        if(products[i]['Series']==="TU05" ){
            let n=ref.length
            for(let j=0; j<n; j++){
                if (ref[j]===reflector){
                    finish = products[i]['Exterior Finish'].split(',')[j].trim().split('&')
                }
            }  
        }
    }

    let total = 0 
    if(mounting&&mountColor){
        total+=price[mounting][mountColor.trim()]
    }
    if(reflector&&Exterior){
        total+=price[reflector.trim()][Exterior]     
    }
    if(wattage){
        total+=price[wattage.trim()]
    }
    if(Control){
        total+=price[Control.trim()]
    }

    total!==0?total=(total*quantity).toFixed(2):total=0

    
     
    let mounting_c
    mounting==null? mounting_c="P072" :mounting_c=code[mounting]
    
    let mountColor_c
    mountColor==null? mountColor_c="BLK" : mountColor_c=code[mountColor.trim()]
    
    let reflector_c
    reflector==null? reflector_c="12B" : reflector_c=code[reflector.trim()]
  
    let extrior_c

    if(Exterior==null){
        extrior_c="CPC-CPC"
    }else if (code[Exterior]==="SIL"){
        extrior_c="SIL-WH1"
    }else if (reflector.trim()==="ф 7” Cylinder"&&code[Exterior]==="BLK"){
        extrior_c="BLK-BLK"
    }else if (reflector.trim()==="ф 7” Cylinder"&&code[Exterior]==="WHT"){
        extrior_c="WHT-BLK"
    }else if(reflector.trim()!=="ф 7” Cylinder"&&code[Exterior]==="BLK"){
        extrior_c="BLK-GL1"
    }else if (code[Exterior]==="CPC"){
        extrior_c="CPC-CPC"
    } 
    
    let wattage_c
    wattage==null?wattage_c="030" : wattage_c=code[wattage.trim()]
    let CRI_c
    CRI==null?CRI_c="8" : CRI_c=code[CRI.trim()]
    let CCT_c
    CCT==null?CCT_c="30" : CCT_c=code[CCT.trim()]
    let control_c
    Control==null? control_c="000" : control_c=code[Control.trim()]
    
    //images 
    let imagePath
    if(mounting){
        imagePath=View[mounting]
        
    }
    if(mountColor){
        imagePath=View[mounting][mountColor.trim()]
    }
    let imageBottom
    if(reflector){
        imageBottom=View[reflector.trim()]
        }
    if(Exterior){
        imageBottom=View[reflector.trim()][Exterior.trim()]
            }

    return (
        <>
        <div className="cart_total">
            <div>{element}</div>
           <sub>{cart}</sub>
         </div>
          <h1 className="Title">TRANSCENDENT TU05</h1>
          <div className="main">
             <div className="thumbnails"> 
                <div className={`thumbnail ${imageValue ==="BOTTOMUP"  ? 'thumbnailActive' : null}`}>
                    <img src="images/Product_SIDE.png" alt="BOTTOMUP" width={100} onClick={e=>{
                        setimageValue(e.target.alt)
                    }}/>
                </div>
                <div className={`thumbnail ${imageValue ==="SIDE"  ? 'thumbnailActive' : null}`}>
                    <img src={imagePath["SIDE"]?imagePath["SIDE"]:"images/Pendant_WHT_SIDE.png"} alt="SIDE" width={100} onClick={e=>{
                       setimageValue(e.target.alt)
                   }}/>

                    <img className="reflector" src={imageBottom["SIDE"]} alt="SIDE" width={100} onClick={e=>{
                       setimageValue(e.target.alt)
                   }}/>
                  
                </div>
                <div className={`thumbnail ${imageValue ==="ISOMETRIC"  ? 'thumbnailActive' : null}`}>
                    <img src="images/Product_SIDE.png" alt="ISOMETRIC" width={100} onClick={e=>{
                        setimageValue(e.target.alt)
                    }}/>
                </div>
                <div className={`thumbnail ${imageValue ==="BOTTOM"  ? 'thumbnailActive' : null}`}>
                    <img src="images/Product_SIDE.png" alt="BOTTOM" width={100} onClick={e=>{
                            setimageValue(e.target.alt)
                        }}/>
                </div>  
             
            </div>
            <div className="BigImage">
                <img src={imagePath[imageValue]} alt="Product_image" width={550} />
                <img className="reflector" src={imageBottom[imageValue]} alt="SIDE" width={550} />
            </div>
         
            <div className="content">
                <div className="Part_Number">TU05-{mounting_c}-{mountColor_c}-{reflector_c}-{extrior_c}-{wattage_c}-{CRI_c}-{CCT_c}-B90-NO-{control_c}-0000</div>
                <div className="wrapper">
                    <Accordion title="MOUNTING OPTIONS" result={mounting}>
                        {products.map((product, i)=>(product['Series']==="TU05"? 
                        <button className=
                        {`Option ${activeButton === i ? 'active' : null}`}
                        key={i} value={product["Mounting Options"]} 
                        title={product["Mounting Options"]} 
                        onClick={(e) => {
                            setMounting(e.target.value)
                            setActiveButton(i)
                        }}
                        >{product["Mounting Options"]}</button>:null))}
                    </Accordion>
                    <Accordion title="MOUNT COLOR" result={mountColor}>
                      {res.map((item, i)=>(
                          <button key={i} 
                          className=
                          {`mountColor_opt ${activeMountColor === i ? 'activeColor' : null}`}
                          style={{background: item}}
                          title={item}
                          value={item} onClick={(e) => {
                              setMountColor(e.target.value)
                              setActiveMountColor(i)
                            }}></button>

                      ))}
                    </Accordion>
                    <Accordion title="REFLECTOR TYPE" result={reflector}>
                      {
                         ref.map((item, i)=>(
                            <button key={i} className=
                            {`Option ${activeReflector === i ? 'active' : null}`}
                            value={item} title={item}
                            onClick={(e) => {
                                setReflector(e.target.value)
                                setActiveReflector(i)
                            }}>{item}</button>
                        ))
                      }
                    </Accordion>
                    <Accordion title="EXTERIOR FINISH" result={Exterior}>
                      {finish.map((item, i)=>{
                         return item==="Clear PC" ?
                          <button key={i} className= 
                          {`mountColor_opt ${activeExterior === i ? 'clear activeColor' : 'clear'}`}
                           title={item}
                          value={item} onClick={(e) => {
                                setExterior(e.target.value)
                                setActiveExterior(i)
                            }}></button>
                        :
                        <button key={i} className=
                        {`mountColor_opt ${activeExterior === i ? 'activeColor' : null}`}
                        style={{background:item}} title={item}
                        value={item} onClick={(e) => {
                            setExterior(e.target.value)
                            setActiveExterior(i)
                        }}></button>
                    })}
                    </Accordion>
                    <Accordion title="INPUT WATTAGE" result={wattage}>
                     { power.map((item, i)=>(
                            <button key={i} className=
                            {`Option ${activeWattage === i ? 'active' : null}`}
                            value={item} title={item}
                            onClick={(e) =>{ 
                                setWattage(e.target.value)
                                setActiveWattage(i)
                            }}>{item}</button>
                        ))}
                    </Accordion>
                    <Accordion title="CRI" result={CRI}>
                    { cri.map((item, i)=>(
                            <button key={i} className=
                            {`Option ${activeCRI === i ? 'active' : null}`}
                            value={item} title={item}
                            onClick={(e) =>{ 
                                setCRI(e.target.value)
                                setActiveCRI(i)
                            }}>{item}</button>
                        ))}
                    </Accordion>
                    <Accordion title="CCT" result={CCT}>
                    { cct.map((item, i)=>(
                            <button key={i} className=
                            {`Option ${activeCCT === i ? 'active' : null}`}
                            value={item} title={item}
                            onClick={(e) => {
                                setCCT(e.target.value)
                                setActiveCCT(i)
                            }}>{item}</button>
                        ))}
                    </Accordion>
                    <Accordion title="CONTROLS" result={Control}>
                    { control.map((item, i)=>(
                            <button key={i} className=
                            {`Option ${activeControl === i ? 'active' : null}`} 
                            value={item} title={item}
                            onClick={(e) => {
                                setControl(e.target.value)
                                setActiveControl(i)
                            }}>{item}</button>
                        ))}
                    </Accordion>
                    <div className="smallTitle">TOTAL PRICE</div>
                    <div className="price">{`${total} USD`}</div>
                    <div className="btn_sec">
                    <input type="number" id="qty" min="1" maxLength="4" max="100000" step="1" defaultValue="1"
                     onChange={e=> setQuantity(e.target.value)}
                    ></input> 
                    <button className={`Cart ${animate? 'grow' : null}`}
                    // className={`Cart ${animate===true? 'grow' : null}`}
                        onClick={handleClick}>ADD TO CART</button>
                    </div>                
                </div>
              
            </div>
        </div>

     </>
    )

}

export default Tu05;





