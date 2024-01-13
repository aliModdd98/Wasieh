import React from 'react'
import Title from '../Title/Title'
import { Accord } from './Accord'
import "./AccordStyle.css"
import death from "./../../assets/death2.avif"
export const AfterDeath = () => {
     const DeathFeatures=[
        {
            id:0,
            title:"Navigating Debt and Creditor Relationships After Death",
            desc:"When a loved one passes away, their financial obligations don't simply disappear. Debts and creditor relationships must be addressed to ensure a smooth transition for the deceased's estate and loved ones."
        }, {
            id:1,
            title:"Identifying Debtors and Creditors",
            desc:"The first step is to gather a comprehensive list of all outstanding debts owed by the deceased. This may include credit card balances, car loans, mortgages, personal loans, medical bills, and any other outstanding financial commitments. Additionally, it's crucial to identify the names and contact information of the creditors involved."
        }, {
            id:2,
            title:"Obtaining Account Statements",
            desc:"Once the list of debtors and creditors is established, obtain copies of all relevant account statements. This may involve contacting creditors directly, requesting copies of account statements, and reviewing any existing documentation. Having these statements on hand will provide valuable information about the nature of the debts, outstanding balances, and any relevant terms and conditions."
        }, {
            id:3,
            title:"Debt Forgiveness or Settlement",
            desc:"In some cases, creditors may be willing to forgive or settle outstanding debts, particularly if the deceased had a small estate or limited assets. Negotiations with creditors may be possible to reach agreeable terms for debt forgiveness or settlement."
        },
        {id:4,
        title:"Creditor Rights",
        desc:"Creditors have the legal right to collect outstanding debts owed by the deceased. However, they must respect the probate process and refrain from harassing or pressuring the deceased's loved ones for payment."  
    },
    {id:5,
    title:"Protecting Loved Ones",
    desc:"It's important to protect the loved ones of the deceased from undue financial stress and potential creditor harassment. Open and transparent communication with creditors, timely notification of the passing, and careful management of debt collection can help to alleviate burdens during this difficult time." 
}
     ]
    return (
    <div className='container'>
      <Title desc="This section provides a step-by-step guide on how to effectively manage debts and creditor relationships after the passing of a loved one. It outlines the key steps involved in identifying debtors, obtaining account statements, notifying creditors, navigating probate, pursuing debt forgiveness or settlement, understanding creditor rights, and protecting the loved ones of the deceased." section="After Death"/>
      <div className="row">
      <div className="col-lg-4 col-md-10 my-3 d-flex justify-content-center">
        <img src={death} className='img-fluid rounded-start ' alt='death'/>
     </div>
      <div className='col-lg-8 my-5 pb-4 col-md-12'>
      {  DeathFeatures.map((e)=>(
                <Accord key={e.id} title={e.title} description={e.desc}/>
            )) }
        </div>
      
      </div>
    
    </div>
  )
}
