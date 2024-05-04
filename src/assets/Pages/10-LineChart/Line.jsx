/* eslint-disable react/prop-types */
import { Box, useTheme } from '@mui/material'
import { ResponsiveLine } from '@nivo/line'

const Line = ({indashboard = false}) => {
    const theme =useTheme()
    const data =[
        {
          "id": "japan",
          "color": "hsl(147, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 19
            },
            {
              "x": "helicopter",
              "y": 99
            },
            {
              "x": "boat",
              "y": 228
            },
            {
              "x": "train",
              "y": 241
            },
            {
              "x": "subway",
              "y": 242
            },
            {
              "x": "bus",
              "y": 161
            },
            {
              "x": "car",
              "y": 38
            },
            {
              "x": "moto",
              "y": 195
            },
            {
              "x": "bicycle",
              "y": 97
            },
            {
              "x": "horse",
              "y": 140
            },
            {
              "x": "skateboard",
              "y": 193
            },
            {
              "x": "others",
              "y": 27
            }
          ]
        },
        {
          "id": "france",
          "color": "hsl(262, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 94
            },
            {
              "x": "helicopter",
              "y": 124
            },
            {
              "x": "boat",
              "y": 152
            },
            {
              "x": "train",
              "y": 281
            },
            {
              "x": "subway",
              "y": 282
            },
            {
              "x": "bus",
              "y": 199
            },
            {
              "x": "car",
              "y": 193
            },
            {
              "x": "moto",
              "y": 283
            },
            {
              "x": "bicycle",
              "y": 241
            },
            {
              "x": "horse",
              "y": 113
            },
            {
              "x": "skateboard",
              "y": 84
            },
            {
              "x": "others",
              "y": 290
            }
          ]
        },
        {
          "id": "us",
          "color": "hsl(226, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 181
            },
            {
              "x": "helicopter",
              "y": 213
            },
            {
              "x": "boat",
              "y": 187
            },
            {
              "x": "train",
              "y": 245
            },
            {
              "x": "subway",
              "y": 20
            },
            {
              "x": "bus",
              "y": 238
            },
            {
              "x": "car",
              "y": 260
            },
            {
              "x": "moto",
              "y": 10
            },
            {
              "x": "bicycle",
              "y": 177
            },
            {
              "x": "horse",
              "y": 111
            },
            {
              "x": "skateboard",
              "y": 268
            },
            {
              "x": "others",
              "y": 42
            }
          ]
        },
        {
          "id": "germany",
          "color": "hsl(52, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 47
            },
            {
              "x": "helicopter",
              "y": 166
            },
            {
              "x": "boat",
              "y": 1
            },
            {
              "x": "train",
              "y": 81
            },
            {
              "x": "subway",
              "y": 152
            },
            {
              "x": "bus",
              "y": 78
            },
            {
              "x": "car",
              "y": 64
            },
            {
              "x": "moto",
              "y": 111
            },
            {
              "x": "bicycle",
              "y": 137
            },
            {
              "x": "horse",
              "y": 91
            },
            {
              "x": "skateboard",
              "y": 44
            },
            {
              "x": "others",
              "y": 256
            }
          ]
        },
        {
          "id": "norway",
          "color": "hsl(323, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 79
            },
            {
              "x": "helicopter",
              "y": 3
            },
            {
              "x": "boat",
              "y": 40
            },
            {
              "x": "train",
              "y": 27
            },
            {
              "x": "subway",
              "y": 190
            },
            {
              "x": "bus",
              "y": 94
            },
            {
              "x": "car",
              "y": 41
            },
            {
              "x": "moto",
              "y": 48
            },
            {
              "x": "bicycle",
              "y": 126
            },
            {
              "x": "horse",
              "y": 217
            },
            {
              "x": "skateboard",
              "y": 173
            },
            {
              "x": "others",
              "y": 203
            }
          ]
        }
      ] 
  return (
    
<Box sx={{ height: indashboard?  "280px"  :  "75vh" }} >
<ResponsiveLine
        data={data}
        curve="cardinal"
        theme={{
          
            "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
            },
            "axis": {
                "domain": {
                    "line": {
                        "stroke": theme.palette.divider,
                        "strokeWidth": 1
                    }
                },
                "legend": {
                    "text": {
                        "fontSize": 12,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                },
                "ticks": {
                    "line": {
                        "stroke": theme.palette.text.primary,
                        "strokeWidth": 1
                    },
                    "text": {
                        "fontSize": 11,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                }
            },
            "grid": {
                "line": {
                    "stroke": "#000",
                    "strokeWidth": 0
                }
            },
            "legends": {
                "title": {
                    "text": {
                        "fontSize": 11,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                },
                "text": {
                    "fontSize": 11,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                },
                "ticks": {
                    "line": {},
                    "text": {
                        "fontSize": 10,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                }
            },
            "annotations": {
                "text": {
                    "fontSize": 13,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                },
                "link": {
                    "stroke": "red",
                    "strokeWidth": 1,
                    "outlineWidth": 2,
                    "outlineColor": "red",
                    "outlineOpacity": 1
                },
                "outline": {
                    "stroke": "#000000",
                    "strokeWidth": 2,
                    "outlineWidth": 2,
                    "outlineColor": "red",
                    "outlineOpacity": 1
                },
                "symbol": {
                    "fill": "red",
                    "outlineWidth": 2,
                    "outlineColor": "red",
                    "outlineOpacity": 1
                }
            },
            "tooltip": {
                "wrapper": {},
                "container": {
                    "background": "#ffffff",
                    "color": "#000",
                    "fontSize": 12
                },
                "basic": {},
                "chip": {},
                "table": {},
                "tableCell": {},
                "tableCellValue": {}
            }
        }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: indashboard? null :  'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: indashboard? null : "Count",
            legendOffset: -45,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
</Box>
  
      
  
      )
}

export default Line
