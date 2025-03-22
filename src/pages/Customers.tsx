import PageTitle from "@/Typography/PageTitle";
import ChartCard from "../components/Chart/ChartCard";
import { Line, Bar } from "react-chartjs-2";
import ChartLegend from "../components/Chart/ChartLegend";
import {
    lineOptions,
    lineLegends,
    realTimeUsersBarLegends,
    realTimeUsersBarOptions,
} from "../utils/demo/chartsData";
import UsersTable from "../components/UsersTable";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    BarElement
} from "chart.js";

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement);

const Customers = () => {
    return (
        <div>
            <PageTitle>Manage Customers</PageTitle>

            <div className="grid gap-6 mb-8 md:grid-cols-2">
                <ChartCard title="User Details">
                    <
                        //@ts-ignore
                        Line {...lineOptions} />
                    <ChartLegend legends={lineLegends} />
                </ChartCard>

                <ChartCard title="Online Visitors">
                    <Bar {...realTimeUsersBarOptions} />
                    <ChartLegend legends={realTimeUsersBarLegends} />
                </ChartCard>
            </div>

            <
                //@ts-ignore
                UsersTable resultsPerPage={10} />
        </div>
    );
};

export default Customers;
