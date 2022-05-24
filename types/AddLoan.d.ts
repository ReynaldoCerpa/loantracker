export interface AddLoanButtonProps {
	onClick: React.MouseEventHandler<HTMLElement>,
}

export interface AddLoanModalProps {
	opened: boolean,
	onClickCancelButton : React.MouseEventHandler<HTMLElement>
}

export interface Loan {
	id: string,
	debtorName: string,
	debtorCellphone: string,
	dueDate: string,
	amount: number | string,
	payments: Array<string>,
	loanDate: string
} 
