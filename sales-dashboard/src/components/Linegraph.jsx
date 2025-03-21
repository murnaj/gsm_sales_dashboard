import React from 'react'

const Linegraph = () => {
  return (
    <div>Linegraph

         <Line
                      data={{
                        labels: ['June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
                        datasets: [
                          {
                            label: 'Revenue',
                            data: [200, 600, 500, 700, 600, 800, 700, 750, 600],
                            backgroundColor: ["rgba(43, 63, 229, 0.8 )"],
                            borderWidth: 4,
                            borderColor: ["rgb(43, 63, 229, 0.8)"],
        
        
        
        
        
        
                          },
                          {
                            label: 'Loss',
                            data: [190, 180, 100, 160, 500, 430, 430, 200, 500],
                            backgroundColor: ["rgba(54, 162, 235, 0.5 )"],
                            borderWidth: 4,
                            borderColor: ["rgba(54, 162, 235, 0.5 )"],
        
                          },
                        ],
                      }}
                    />
    </div>
  )
}

export default Linegraph