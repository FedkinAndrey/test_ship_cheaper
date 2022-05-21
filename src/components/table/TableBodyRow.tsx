import React from 'react';
import { TrashIcon } from '../../assets/icons';
import { IData } from '../../types/data';
import { removeData } from '../../store/data/slice';
import { useAppDispatch } from '../../hooks/hooks';

interface IDataItem {
	item: IData;
	id: number;
}

function TableBodyRow({ item, id }: IDataItem): React.ReactElement {
	const dispatch = useAppDispatch();

	const removeRow = () => {
		dispatch(removeData(id));
	};

	return (
		<tr>
			<td>
				<button type="button" className="btn-icon" onClick={() => removeRow()}>
					<TrashIcon />
				</button>
			</td>
			<td>{item.company}</td>
			<td>{item.name}</td>
			<td>{item.additional}</td>
			<td>{item.street}</td>
			<td>{item.postalCode}</td>
			<td>{item.country}</td>
			<td>{item.iban}</td>
			<td>{item.bic}</td>
			<td>{item.bankName}</td>
			<td>{item.fax}</td>
			<td>{item.email}</td>
			<td>{item.birthday}</td>
			<td>{item.homepage}</td>
		</tr>
	);
}

export default TableBodyRow;
