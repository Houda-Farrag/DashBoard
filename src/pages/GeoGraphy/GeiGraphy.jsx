import React from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import { dataCountries } from "./data";
import { Box } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import { geoCountries } from "./world_countries";

export default function GeiGraphy() {
    const theme = useTheme(); // Get theme from MUI

    return (
        <Box sx={{ height: "100vh", display: 'flex', overflow: "scroll" }}>
            <ResponsiveChoropleth
                data={dataCountries}
                features={geoCountries.features}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors="spectral"
                domain={[0, 1000000]}
                unknownColor={theme.palette.background.paper}
                label="properties.name"
                valueFormat=".2s"
                projectionTranslation={[0.5, 0.5]}
                projectionRotation={[0, 0, 0]}
                projectionScale={100}
                graticuleLineWidth={0.1}
                graticuleLineColor={theme.palette.text.disabled}
                borderWidth={0.5}
                borderColor={theme.palette.text.secondary}

        
                fill={[
                    { match: { id: 'CAN' }, id: 'dots' },
                    { match: { id: 'CHN' }, id: 'lines' },
                    { match: { id: 'ATA' }, id: 'gradient' }
                ]}
                legends={[
                    {
                        anchor: 'left',
                        direction: 'column',
                        justify: true,
                        translateX: 20,
                        translateY: -100,
                        itemsSpacing: 0,
                        itemWidth: 94,
                        itemHeight: 18,
                        itemDirection: 'left-to-right',
                        itemTextColor: theme.palette.text.primary,
                        itemOpacity: 0.85,
                        symbolSize: 18,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: theme.palette.secondary.main,
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </Box>
    );
}
