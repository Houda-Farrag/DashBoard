import React from 'react'
import './subscripePage.css'
export default function SubscripePage() {
  return (
    <div className="container-home">
      <Card content={'خطه الاشتراك الاضافيه'} headerClass ='extra-sub'/>
      <Card content={'خطه الاشتراك المميزه'} headerClass ='special-sub'/>
      <Card content={'خطه الاشتراك الاساسيه'} headerClass='base-sub'/>
    </div>
  )
}


const Card = ({content='الخطه', headerClass=''}) => {
    return (
      <div className="card">
        <div className={`trangle `}></div>
        <div className={"header-content" + ' ' + headerClass }>
          <p>{content}</p>
        <div className="trangle"></div>
        <div className="trangle-2 "></div>  
        </div>
      </div>
    );
  };