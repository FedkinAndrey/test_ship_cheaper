import React from 'react';

function TableHeadRow() {
	return <tr>
		<th className='trash' aria-label="remove"/>
		<th className='company'>Company</th>
		<th className='name'>Name</th>
		<th className='additional'>Additional</th>
		<th className='street'>Street</th>
		<th className='code'>Postal Code</th>
		<th className='country'>Country</th>
		<th className='iban'>IBAN</th>
		<th className='bic'>BIC</th>
		<th className='bank'>Bank name</th>
		<th className='fax'>Fax</th>
		<th className='email'>Email</th>
		<th className='birthday'>Birthday</th>
		<th className='homepage'>Homepage</th>
	</tr>;
}

export default TableHeadRow;
