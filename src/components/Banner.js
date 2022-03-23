
export default function Banner({ show }) {
	return (
		show ?
			<img height="150px" width="100%" src="/banner.png" />
			: <></>
	)
}
