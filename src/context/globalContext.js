import React, { useContext, useState } from "react"
import axios from 'axios'

const BASE_URL = "https://expense-backend-api.cyclic.app/api/v1/";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {
    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    const getAuthConfig = () => {
        const token = localStorage.getItem("token");
        return { headers: { Authorization: `Bearer ${token}` } };
      };

    //calculate incomes
    const addIncome = async (income) => {
      await axios.post(`${BASE_URL}add-income`, income, getAuthConfig()).catch((err) => {
        setError(err.response.data.message);
      });
      getIncomes();
    };;

      const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`, getAuthConfig());
        setIncomes(response.data);
        console.log(response.data);
      };

      const deleteIncome = async (id) => {
        await axios.delete(`${BASE_URL}delete-income/${id}`, getAuthConfig());
        getIncomes();
      };

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }

    // Calculate expenses
    const addExpense = async (expense) => {
        await axios.post(`${BASE_URL}add-expense`, expense, getAuthConfig()).catch((err) => {
          setError(err.response.data.message);
        });
        getExpenses();
      };

      const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`, getAuthConfig());
        setExpenses(response.data);
        console.log(response.data);
      };

      const deleteExpense = async (id) => {
        await axios.delete(`${BASE_URL}delete-expense/${id}`, getAuthConfig());
        getExpenses();
      };

    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 6)
    }


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}