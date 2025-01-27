import React, { useEffect, useState } from 'react'
import ReactECharts from 'echarts-for-react';
import getData from "../utils/getData"
import { data } from 'react-router-dom';
type data = {
    timeseries: [Number],
    values: [Number],
}
// type Indata={
//     selected_metric:string,
//     selected_device:string
// }
interface props {
    device: string,
    setDevice: (value: string) => void,
    isDarkMode:boolean,
    setIsDarkMode:(value:boolean)=>void
}
const GraphSection: React.FC<props> = ({ device, setDevice ,isDarkMode, setIsDarkMode}) => {
    const [datalcp, setDatalcp] = useState<data | undefined>(undefined);
    const [datacls, setDatacls] = useState<data | undefined>(undefined);
    useEffect(() => {
        let theme = localStorage.getItem("theme");
        if (!theme) {
            theme = "light";
            localStorage.setItem("theme", theme);
        }
        if (theme === "dark") setIsDarkMode(true);
        else setIsDarkMode(false);

    }, []);
    // const [selected_device, set_selected_device] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const option = (data: data | undefined, is: boolean) => {
        if (!data) return null;
        let option = {
            title: {
                text: is ? "Largest Contentful Paint" : "Cumulative Layout Shift",
                textStyle: {
                    color: isDarkMode ? '#fff' : '#333',
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: data.timeseries,
                axisLabel: {
                    color: isDarkMode ? '#fff' : '#333',
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    color: isDarkMode ? '#fff' : '#333',
                }

            },
            series: [
                {
                    data: data.values,
                    type: 'line',
                    lineStyle: {
                        color: isDarkMode ? '#ff7f50' : '#3498db',
                    },
                    itemStyle: {
                        color: isDarkMode ? '#ff7f50' : '#3498db',
                    }
                }
            ],
            backgroundColor: isDarkMode ? '#1a1a1a' : '#fff'
        };
        return option;
    }
    useEffect(() => {
        const f = async () => {
            if (!device) return;
            console.log("found");
            setLoading(true)
            const responsecls = await getData({ selected_metric: 'cls', selected_device: device });
            const responselcp = await getData({ selected_metric: 'lcp', selected_device: device });
            setDatacls(responsecls);
            setDatalcp(responselcp);
            console.log(responsecls);
            console.log(responselcp);
            setLoading(false)

        }
        if (device == 'desktop' || device == 'mobile') {
            f();
        }
    }, [, device])
    return (
        <div className={`flex flex-col items-center ${isDarkMode?"bg-dark-primary":""}`}>
            <div className={`mt-32  font-bold text-xl sm:text-4xl br:text-5xl ${isDarkMode?"text-white":""}`}>SpeedVitals Internship Assessment</div>
            <div className='mt-11'>
                <span className={`${isDarkMode?"text-dark-icons":"text-gray-600"} me-8 text-base xs:text-lg sm:text-xl br:text-2xl font-bold `}>Choose a Device</span>
                <select  id="countries" className=" outline-none bg-zinc-200  py-2 px-4  mt-5  text-black border border-gray-400 shadow rounded-lg text-base br:text-lg "
                    onChange={(e) => {
                        setDevice(e.target.value)
                    }}
                >
                    <option value='desktop' selected>Desktop</option>
                    <option value='mobile'>Mobile</option>
                </select>
            </div>
            {
                !loading && datacls && datalcp &&
                <div className='flex items-center justify-evenly w-full flex-wrap mt-10 z-10'>
                    <div className={`${isDarkMode?"border-dark-icons":""} br:min-w-96 w-full h-auto border-2  br:w-[45%] mx-5 br:mx-2 my-4`}>
                        <ReactECharts option={option(datacls, false)}
                            style={{
                                height: '400px',
                            }}
                        />
                    </div>
                    <div className={`${isDarkMode?"border-dark-icons":""} br:min-w-96 w-full h-auto border-2  br:w-[45%] mx-5 br:mx-2 my-4`}>
                        <ReactECharts option={option(datalcp, true)}
                            style={{
                                height: '400px',
                            }}
                        />
                    </div>
                </div>

            }
            {
                loading && <div className='mt-11 text-xl'>loading...</div>
            }
        </div>
    )
}

export default GraphSection