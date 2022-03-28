import React from 'react'

export default function FormatNumber({ value }) {

	const options2 = { style: 'currency', currency: 'ARS' };
	const numberFormat2 = new Intl.NumberFormat('es-AR', options2);

	return (
		<>
			{numberFormat2.format(value)}
		</>
	)
}
