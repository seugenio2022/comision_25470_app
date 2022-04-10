import { Divider, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphoneOutlined';
import BrandingWatermarkOutlinedIcon from '@mui/icons-material/BrandingWatermarkOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';

export default function Information() {
	const infos = [
		{
			"title": "Cambio y devolución",
			"subtitle": "Gratis a todo el país",
			"icon": <CurrencyExchangeIcon fontSize="large" />
		},
		{
			"title": "Descargá nuestra app",
			"subtitle": "Android y IOS",
			"icon": <PhoneIphoneIcon fontSize="large" />
		},
		{
			"title": "Más de 500 marcas",
			"subtitle": "Locales e Internacionales",
			"icon": <BrandingWatermarkOutlinedIcon fontSize="large" />
		},
		{
			"title": "Multiples formas de pago",
			"subtitle": "Tarjetas, efectivo, mercadopago",
			"icon": <PaymentOutlinedIcon fontSize="large" />
		},
		{
			"title": "Financiación",
			"subtitle": "3 y 6 cuotas sin interés",
			"icon": <CreditScoreOutlinedIcon fontSize="large" />
		}
	]

	return (
		<Stack direction="row" spacing={4}>
			{
				infos.map((info, i) => (
					<Stack key={i} direction="row" spacing={1} alignItems="center">
						{info.icon}
						<Divider variant="middle" orientation="vertical" />
						<Box>
							<Typography variant="h6">{info.title}</Typography>
							<Typography variant="subtitle1">{info.subtitle}</Typography>
						</Box>
					</Stack>
				))
			}
		</Stack>
	)
}
