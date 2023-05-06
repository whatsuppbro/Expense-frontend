import React from 'react'
import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import {Line} from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const {incomes, expenses} = useGlobalContext()

    const combinedData = [...incomes, ...expenses];
    const sortedCombinedData = combinedData.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
    const uniqueDates = [
        ...new Set(sortedCombinedData.map((item) => dateFormat(item.date))),
      ];
    const sumAmountByDate = (data, date) => {
        return data
          .filter((item) => dateFormat(item.date) === date)
          .reduce((total, item) => total + item.amount, 0);
      };

      const data = {
        labels: uniqueDates,
        datasets: [
          {
            label: "Income",
            data: uniqueDates.map((date) => sumAmountByDate(incomes, date)),
            backgroundColor: "green",
            tension: 0.2,
          },
          {
            label: "Expenses",
            data: uniqueDates.map((date) => sumAmountByDate(expenses, date)),
            backgroundColor: "red",
            tension: 0.2,
          },
        ],
      };
      


    return (
        <ChartStyled >
            <Line data={data} />
        </ChartStyled>
    )
}

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;

export default Chart