import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import './App.css'
import axios from 'axios'
import Card from './components/card'

function App() {
	const [auto, setAuto] = useState([])

	useEffect(() => {
		axios.get('https://test.tspb.su/test-task/vehicles').then(res => {
			setAuto(res.data)
			console.log(res.data)
		})
	}, [])

	const sortAutoAscending = (items: any, key: any) => {
		if (key === 'year') {
			const autoSorted: any = [...items].sort(
				(a: any, b: any) => a.year - b.year
			)
			setAuto(autoSorted)
		} else if (key === 'price') {
			const autoSorted: any = [...items].sort(
				(a: any, b: any) => a.price - b.price
			)
			setAuto(autoSorted)
		}
	}

	const sortAutoDescending = (items: any, key: any) => {
		if (key === 'year') {
			const autoSorted: any = [...items].sort(
				(a: any, b: any) => b.year - a.year
			)
			setAuto(autoSorted)
		} else if (key === 'price') {
			const autoSorted: any = [...items].sort(
				(a: any, b: any) => b.price - a.price
			)
			setAuto(autoSorted)
		}
	}

	const removeAuto = (id: number) => {
		const newArr = auto.filter((auto: any) => auto.id !== id)
		setAuto(newArr)
	}

	const editAuto = (id: number, name: string, model: string, price: number) => {
		const currentObj: any = auto.find((auto: any) => auto.id === id)

		if (currentObj) {
			currentObj.name = name
			currentObj.model = model
			currentObj.price = price
		}
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.manage}>
				<h2>Сортировка:</h2>

				<div className={styles.sortWrap}>
					<div className={styles.sort}>
						<h3>Год выпуска</h3>

						<button
							onClick={() => {
								sortAutoAscending(auto, 'year')
							}}
						>
							По возрастанию
						</button>
						<button onClick={() => sortAutoDescending(auto, 'year')}>
							По убыванию
						</button>
					</div>
					<div className={styles.sort}>
						<h3>Стоимость</h3>

						<button onClick={() => sortAutoAscending(auto, 'price')}>
							По возрастанию
						</button>

						<button onClick={() => sortAutoDescending(auto, 'price')}>
							По убыванию
						</button>
					</div>
				</div>
			</div>
			<div className={styles.vehicles}>
				{auto &&
					auto.map((auto: any) => (
						<Card
							editAuto={editAuto}
							removeAuto={removeAuto}
							key={auto.id}
							item={auto}
						/>
					))}
			</div>
		</div>
	)
}

export default App
