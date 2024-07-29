import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register required components and plugins
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend, ChartDataLabels);

const AdminDashboard = () => {
  const activeUsers = 150; // Example data
  const policiesClaimed = 30; // Example data
  const amountsReceived = 50000; // Example data in dollars

  // Example data for charts
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Policies Claimed',
        backgroundColor: '#90EE90',
        borderColor: 'green',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [10, 20, 30, 40, 50, 60, 70],
      },
    ],
  };

  const pieData = {
    labels: ['Claimed', 'Not Claimed', 'Processing'],
    datasets: [
      {
        data: [40, 30, 30], // Example data
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const pieOptions = {
    plugins: {
      datalabels: {
        formatter: (value, context) => {
          const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
          const percentage = ((value / total) * 100).toFixed(2) + '%';
          return percentage;
        },
        color: '#fff',
        font: {
          weight: 'bold',
        },
      },
    },
  };

  return (
    <div className="dashboard-container-admin">
      <h1>Dashboard</h1>
      <div className="dashboard-grid">
        <div className="dashboard-item">
          <h2>Active Users</h2>
          <p>{activeUsers}</p>
          <p>Users currently active on the platform.</p>
          <Bar
            data={{
              labels: ['Active', 'Inactive'],
              datasets: [
                {
                  label: 'Users',
                  data: [activeUsers, 50], // Example data
                  backgroundColor: ['#90EE90', '#FF0000'],
                },
              ],
            }}
          />
        </div>
        <div className="dashboard-item">
          <h2>Policies Claimed</h2>
          <p>{policiesClaimed}</p>
          <p>Total number of policies claimed to date.</p>
          <Bar
            data={{
              labels: ['Claimed', 'Not Claimed'],
              datasets: [
                {
                  label: 'Policies',
                  data: [policiesClaimed, 70], // Example data
                  backgroundColor: ['#90EE90', '#FF0000'],
                },
              ],
            }}
          />
        </div>
        <div className="dashboard-item">
          <h2>Amounts Received</h2>
          <p>${amountsReceived}</p>
          <p>Total amounts received by users from the portal.</p>
          <Bar
            data={{
              labels: ['Received', 'Pending'],
              datasets: [
                {
                  label: 'Amounts',
                  data: [amountsReceived, 20000], // Example data
                  backgroundColor: ['#90EE90', '#FF0000'],
                },
              ],
            }}
          />
        </div>
      </div>
      <div className="charts-container">
        <div className="chart-item">
          <h2>Policies Claimed Over Time</h2>
          <Bar data={barData} />
        </div>
        <div className="chart-items">
          <h2>Claim Status</h2>
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
