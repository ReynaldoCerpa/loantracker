import { FC, useState } from "react";
import AddLoan from "../components/AddLoan/AddLoan";
import { LoanCard } from "../components/LoanCard";
import { LoanInfoModal } from "../components/LoanInfoModal";

const Home : FC = () => {

	const [infoModalOpened, setInfoModalOpened] = useState(false)
	const [selectedLoan, setSelectedLoan] = useState({
		id: "",
		debtorName: "",
		debtorCellphone: "",
		dueDate: "",
		amount: "",
		payments: "",
		loanDate: ""
	})
	const loan = [{
		id: "RCT1",
		debtorName: "Reynaldo Cerpa Tinajero Reynaldo Cerpa Gomez Antonio",
		debtorCellphone: "616-105-8671",
		dueDate: "10-25-2022",
		amount: "$560",
		payments: "$200",
		loanDate: "5-15-2022"
	},
	{
		id: "RCT2",
		debtorName: "Pedro Perez",
		debtorCellphone: "616-105-8671",
		dueDate: "5-19-2022",
		amount: "$560",
		payments: "$200",
		loanDate: "5-15-2022"
	},
	{
		id: "RCT2",
		debtorName: "Pedro Perez",
		debtorCellphone: "616-105-8671",
		dueDate: "7-01-2022",
		amount: "$560",
		payments: "$200",
		loanDate: "5-15-2022"
	},

	]
	return (
		<div className="h-screen bg-gray-100">
			<LoanInfoModal loanInfo={selectedLoan} opened={infoModalOpened} setOpened={()=>{setInfoModalOpened(!infoModalOpened)}}/>
		<div className="bg-primary h-[5rem] drop-shadow-md mb-2">
		</div>
		<div className="flex flex-col p-5 justify-center">
		{
			loan.map((loan)=>{
				return <LoanCard id={loan.id} loan={loan} opened={infoModalOpened} setOpened={()=>{
					setInfoModalOpened(!infoModalOpened)
					setSelectedLoan(loan)
				}}/>
			})
		}

		</div>
			<AddLoan/>
		</div>
	)
}

export default Home
