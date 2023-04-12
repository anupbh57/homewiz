import React from 'react'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { LinearProgress } from '@mui/material';
function Budgetlistblock(props) {
  return (
    <div className='budgetlistblock w-11/12 py-2' id="budgetlistblock">
        <div className='budgetlistblock-wrapper'>
            <div className='budgetlistblock-icon flex justify-start'>
                {props.icon}
                <div className='budgetlistblock-content flex flex-col ml-5 justify-around w-full'>
                    <p className='text-xs font-bold'>{props.name}(${props.dollar})</p>
                    <LinearProgress variant="determinate" value={props.percent} className='progressbar-1 w-full'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Budgetlistblock

const style = {
    
    iconBudget: {

    }
}