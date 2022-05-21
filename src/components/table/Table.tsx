import React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { selectData } from '../../store/data/selectors';
import TableBodyRow from './TableBodyRow';
import TableHeadRow from './TableHeadRow';


function Table() {
	const { data } = useAppSelector(selectData);

	return (
		<div className='table'>
			<table>
				<thead>
				<TableHeadRow />
				</thead>
				<tbody>
				{
					data.map((item, id) => <TableBodyRow item={item} key={item.name + item.email} id={id} />)
				}
				</tbody>
			</table>
		</div>
	);
}

export default Table;
