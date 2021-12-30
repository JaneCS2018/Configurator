import React, {useState} from 'react'
import './Accordion.scss'

const Accordion = ({ title, children, result }) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
      <div className="accordion-wrapper">
        
        <div
          className={`accordion-title ${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}
          >
          {title}
          {result==='Silver'|| result==='Black'|| result.trim()==='White'? 
          <button className="square" style={{background: result.trim()}} title={result.trim()}></button>
          :result==='Clear PC'
          ?<button className="square square_pc" title={result.trim()}></button>
          :
          <div>{result}</div>
        }
        </div>
        <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
          <div className="accordion-content">{children}</div>
        </div>
      </div>
    );
  };

export default Accordion;





