import { Email, PersonAdd, PointOfSale, Traffic } from "@mui/icons-material";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";

import { ResponsivePie } from '@nivo/pie'
import { data1, data2, data3, data4 } from "./data";
const Row1 = () => {
    const theme =useTheme()
    const arr=[
        {
            id:1,
            title:"Emails Send",
            icon:<Email sx={{fontSize:"23px",color:theme.palette.secondary.main}} />,
            number:"12,361",
            data:data1,
            numberChart:14,
            scheme:"paired"
        },
        {
            id:2,
            title:"Sales obtained ",
            icon:<PointOfSale  sx={{fontSize:"23px",color:theme.palette.secondary.main}} />,
            number:"431,225",
            data:data2,
            numberChart:21,
            scheme:"set1"

        },
        {
            id:3,
            title:"New Clients",
            icon:<PersonAdd  sx={{fontSize:"23px",color:theme.palette.secondary.main}} />,
            number:"32,441",
            data:data3,
            numberChart:5,
            scheme:"pink_yellowGreen"

        },
        {
            id:4,
            title:"Traffic Received",
            icon:<Traffic  sx={{fontSize:"23px",color:theme.palette.secondary.main }} />,
            number:"1,325,134",
            data:data4 ,
            numberChart:43,
            scheme:"red_grey"

        },
    ]
  return (
    <Stack sx={{my:2}}direction={"row"} flexWrap={"wrap"} gap={2} justifyContent={{xs:'center',md:"space-between"}}>
    {arr.map((item)=>{
        return(
            <Paper
            key={item.id}
            sx={{
              minWidth: "333px",
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexGrow:1
            }}
            
          >
            <Stack direction={"column"}>
              {item.icon}
              <Typography variant="body2" sx={{ fontSize: "13px",mt:1 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "13px" }}>
                {item.number}
              </Typography>
            </Stack>
    
            <Stack direction={"column"} alignItems={"center"}>
                <Box  sx={{height:"70px" ,width:"80px"}}>

                <ResponsivePie
        data={item.data}
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
                        "stroke": theme.palette.text.primary,
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
                    "stroke": "#dddddd",
                    "strokeWidth": 1
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
                    "stroke": "#000000",
                    "strokeWidth": 1,
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                },
                "outline": {
                    "stroke": "#000000",
                    "strokeWidth": 2,
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                },
                "symbol": {
                    "fill": "#000000",
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
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
        margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
        innerRadius={0.7}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        // @ts-ignore
        colors={{ scheme: item.scheme }}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
  

        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
    
   
    />
                </Box>
              <Typography variant="body2" sx={{ fontSize: "13px" }}>
                +{item.numberChart}%
              </Typography>
            </Stack>
          </Paper>
        )
    })}

    </Stack>
  );
};

export default Row1;
