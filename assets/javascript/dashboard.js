// ==========================================
// CHART.JS INITIALIZATION
// ==========================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    initRevenueChart();
    initPaymentChart();
    initSalesChart();
    initCustomerChart();
});

// ==========================================
// REVENUE BAR CHART
// ==========================================
function initRevenueChart() {
    const ctx = document.getElementById('revenueBarChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                data: [55, 70, 60, 80, 75, 85, 78],
                backgroundColor: '#FF6B35',
                borderRadius: 6,
                barThickness: 18
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            },
            scales: {
                y: {
                    display: false,
                    beginAtZero: true
                },
                x: {
                    display: false
                }
            }
        }
    });
}

// ==========================================
// PAYMENT METHOD DONUT CHART
// ==========================================
function initPaymentChart() {
    const ctx = document.getElementById('paymentDonutChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Cash', 'Card', 'Card', 'Wallet'],
            datasets: [{
                data: [50, 30, 20, 20],
                backgroundColor: [
                    '#4169E1',  // Blue
                    '#2DD4BF',  // Teal
                    '#FFB84D',  // Orange
                    '#E6E6FA'   // Light Purple
                ],
                borderWidth: 0,
                cutout: '75%'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            }
        }
    });
}

// ==========================================
// SALES PERFORMANCE AREA CHART
// ==========================================
function initSalesChart() {
    const ctx = document.getElementById('salesAreaChart');
    if (!ctx) return;
    
    // Generate smooth area data
    const generateData = () => {
        const data = [];
        for (let i = 0; i < 50; i++) {
            data.push(0.6 + Math.sin(i * 0.3) * 0.2 + Math.random() * 0.1);
        }
        return data;
    };
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array(50).fill(''),
            datasets: [
                {
                    label: 'Net Income',
                    data: generateData(),
                    borderColor: '#FF6B35',
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                    pointRadius: 0
                },
                {
                    label: 'Total Sales',
                    data: generateData().map(v => v - 0.1),
                    borderColor: '#2DD4BF',
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                    pointRadius: 0
                },
                {
                    label: 'Total Revenue',
                    data: generateData().map(v => v - 0.2),
                    borderColor: '#9CA3AF',
                    backgroundColor: 'rgba(156, 163, 175, 0.15)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#F3F4F6',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#9CA3AF',
                        font: {
                            size: 10
                        },
                        stepSize: 0.1,
                        callback: function(value) {
                            return value.toFixed(1);
                        }
                    },
                    border: {
                        display: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#9CA3AF',
                        font: {
                            size: 10
                        },
                        maxTicksLimit: 4,
                        callback: function(value, index) {
                            const years = ['2014', '2016', '2018', '2020'];
                            const step = Math.floor(50 / 4);
                            if (index % step === 0) {
                                return years[Math.floor(index / step)];
                            }
                            return '';
                        }
                    },
                    border: {
                        display: false
                    }
                }
            }
        }
    });
}

// ==========================================
// CUSTOMER MAP LINE CHART
// ==========================================
function initCustomerChart() {
    const ctx = document.getElementById('customerLineChart');
    if (!ctx) return;
    
    // Generate smooth line data
    const generateCustomerData = () => {
        const data = [];
        const points = [15, 12, 18, 14, 20, 16, 22, 18, 16, 20, 17, 14, 19, 22];
        return points;
    };
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                data: generateCustomerData(),
                borderColor: '#FF6B35',
                backgroundColor: 'rgba(255, 107, 53, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#F3F4F6',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#9CA3AF',
                        font: {
                            size: 10
                        },
                        stepSize: 5
                    },
                    border: {
                        display: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#9CA3AF',
                        font: {
                            size: 10
                        }
                    },
                    border: {
                        display: false
                    }
                }
            }
        }
    });
}

// ==========================================
// LARAVEL BACKEND INTEGRATION
// ==========================================
/*
To integrate with Laravel:

1. In your controller:
   $chartData = [
       'revenue' => [
           'labels' => ['Jan', 'Feb', 'Mar'],
           'values' => [55, 70, 60]
       ],
       'payment' => [
           'labels' => ['Cash', 'Card', 'Wallet'],
           'values' => [50, 30, 20],
           'colors' => ['#4169E1', '#2DD4BF', '#FFB84D']
       ]
   ];
   return view('dashboard', compact('chartData'));

2. In your blade file:
   <script>
       const chartData = @json($chartData);
   </script>
   <script src="dashboard-content.js"></script>

3. Update the init functions to use chartData instead of hardcoded values
*/