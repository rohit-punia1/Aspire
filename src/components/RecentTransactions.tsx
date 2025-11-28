import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "../icons/down-arrow.svg?react";
import CardDetailsIcon from "../icons/Card-details.svg?react"
import RefundIcon from "../icons/business-and-finance.svg?react";
import RecentTransactionsIcon from "../icons/Recent-transactions.svg?react"
import ShopIcon from "../icons/shop.svg?react";
import FlightsIcon from "../icons/flights.svg?react";
import MegaphoneIcon from "../icons/megaphone.svg?react";

interface Transaction {
    id: number;
    title: string;
    date: string;
    amount: string;
    amountColor: string;
    status: string;
    statusColor: string;
    iconBg: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const transactions: Transaction[] = [
    {
        id: 1,
        title: "Hamleys",
        date: "20 May 2020",
        amount: "+ S$ 150",
        amountColor: "text-primary",
        status: "Refund on debit card",
        statusColor: "text-secondary",
        iconBg: "#009DFF1A",
        icon: ShopIcon,
    },
    {
        id: 2,
        title: "Hamleys",
        date: "20 May 2020",
        amount: "- S$ 150",
         amountColor: "text-[#222222]",
        status: "Charged to debit card",
        statusColor: "text-secondary",
        iconBg: "#009DFF1A",
        icon: FlightsIcon,
    },
    {
        id: 3,
        title: "Hamleys",
        date: "20 May 2020",
        amount: "- S$ 150",
       amountColor: "text-[#222222]",
        status: "Charged to debit card",
        statusColor: "text-secondary",
        iconBg: "#009DFF1A",
        icon: MegaphoneIcon,
    },
    {
        id: 4,
        title: "Hamleys",
        date: "20 May 2020",
        amount: "- S$ 150",
        amountColor: "text-[#222222]",
        status: "Charged to debit card",
        statusColor: "text-secondary",
        iconBg: "#009DFF1A",
        icon: ShopIcon,
    },
];

const RecentTransactions: React.FC = () => {
    return (
        <div className="w-full md:w-[414px]  mt-6" style={{ boxShadow: "none" }}>

      
            <Accordion
                disableGutters
                sx={{
                    borderRadius: "8px",
                    minHeight: 72,



                    justifyContent: "center",
                    backgroundColor: "#F5F9FF",
                    border: "1px",
                    boxShadow: "#0000000A"
                }}
            >
                <AccordionSummary sx={{ height: 72 }} expandIcon={<ExpandMoreIcon />}>
                    <CardDetailsIcon />
                    <p className="text-[#1D4A9A] text-sm mx-3">Card details</p>
                </AccordionSummary>

            </Accordion>

            <Accordion
                disableGutters
                sx={{
                    borderRadius: "8px",
                    minHeight: 72,
                    
                    mt: 4,
                    justifyContent: "center",
                    backgroundColor: "#F5F9FF",
                    border: "1px",
                    boxShadow: "#0000000A"
                }}
            >
                <AccordionSummary sx={{ height: 72,border:0 }} expandIcon={<ExpandMoreIcon />}>
                    <div className="flex items-center gap-2">
                        <RecentTransactionsIcon className="w-5 h-5 text-[#1D4A9A]" />
                        <p className="text-cardActionText text-sm mx-2">Recent transactions</p>

                    </div>
                </AccordionSummary>

                <AccordionDetails sx={{ bgcolor: "white", px: 0, pb: 0, borderRadius: "8px" }}>

                    <div className="flex flex-col gap-5 p-6">
                        {transactions.map((tx) => {
                            const Icon = tx.icon;

                            return (
                                <div key={tx.id} className="flex items-start gap-6">

                                 
                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center bg-[#009DFF1A]`}
                                    >
                                        <Icon className="w-4 h-4 " />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex justify-between">
                                            <p className="font-bold text-sm ">{tx.title}</p>
                                            <p className={`font-semibold ${tx.amountColor}`}>
                                                {tx.amount}
                                            </p>
                                        </div>

                                        <p className="text-[12px]">{tx.date}</p><div className="flex gap-2 items-center">
                                            <div className="bg-secondary rounded-full h-5 w-6 flex justify-center items-center">
                                                <RefundIcon />
                                            </div>
                                            <p className={`text-xs font-bold mt-1 ${tx.statusColor}`}>

                                                {tx.status}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                
                    <button className="w-full h-14 bg-cardAction text-primary rounded-b-md font-medium">
                        View all card transactions
                    </button>
                </AccordionDetails>
            </Accordion>

        </div>
    );
};

export default RecentTransactions;
