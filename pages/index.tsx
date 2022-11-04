import styles from '../styles/Home.module.scss'

export default function Home() {
	const callAPI = async () => {
		try {
			const res = await fetch(
				'https://api.abyiss.com/v1/ping'
			)
			const data = await res.json()
			// console.log(data)
		} catch (err) {
			// console.log(err)
		}
	}
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<button onClick={callAPI}>Make API Call</button>
			</main>
		</div>
	)
}
