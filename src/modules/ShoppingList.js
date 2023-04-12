import React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import Shoppinglistblock from '../Components/Shoppinglistblock'
import Budgetlistblock from '../Components/Budgetlistblock'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BudgetIco from "../icons/icon-budget.svg"
import GroceryIco from "../icons/icon-grocery.svg"
import BillsIco from "../icons/icon-bills.svg"
import DebtIco from "../icons/icon-debt.svg"

function ShoppingList() {
    return (
        <div className='shoppinglist w-full h-3/5 mx-auto bg-red-50 p-5'
            style={
                style.shoppinglist
        }>
            <div className='shoppinglist-wrapper h-full'>
                <div className='shoppinglist-top'>
                    <div className='shoppinglist-top-title'>
                        <h2 className='text-lg font-bold'>Shopping
                            <span style={
                                style.headingSpan
                            }> List</span></h2>
                    </div>
                </div>
                <div className='shoppinglist-list-wrapper mt-5 overflow-scroll p-5 rounded-3xl' style = {style.shoppinglistwrapper}>
                    <Shoppinglistblock />
                    <Shoppinglistblock />
                    <Shoppinglistblock />
                    <Shoppinglistblock />
                    <Shoppinglistblock />
                    <Shoppinglistblock />
                    <Shoppinglistblock />
                    <Shoppinglistblock />
                </div>
                <div className='shoppinglist-budget h-1/4 mt-7'>
                    <div className='shoppinglist-budget-wrapper grid grid-cols-2 place-items-center h-3/5'>
                        <Budgetlistblock icon = {<img src = {BudgetIco} width = "40px"></img>} name = "Budget" dollar = "500" percent = "50"/>
                        <Budgetlistblock icon = {<img src = {GroceryIco} width = "40px"></img>} name = "Groceries" dollar = "370" percent = "20"/>
                        <Budgetlistblock icon = {<img src = {BillsIco} width = "40px"></img>} name = "Bills" dollar = "300" percent = "89"/>
                        <Budgetlistblock icon = {<img src = {DebtIco} width = "40px"></img>} name = "Debt" dollar = "600" percent = "45"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingList

function generateOptions() {
    return(<div>{months.map(month => {
        <option value={month}>{month}</option>
        {console.log(month)}
    })}</div>)
}

const style = {

    shoppinglist: {
        borderRadius: "25px",
        background: "#20222b",
        height: "65%",

    },
    headingSpan: {
        color: "#f0a739"
    },
    shoppinglistwrapper: {
        background: "#242832",
        height: "270px",
        "backdrop-filter": "blur(33px)",
        "background-blend-mode": "overlay",
        borderBottomLeftRadius: "25px",
        borderBottomRightRadius: "25px",
    },
    icon: {
        fontSize: "48px",
        background: "#39b9f7"
    },
}

const months = ["January", "February", "March", "April", "May"]
