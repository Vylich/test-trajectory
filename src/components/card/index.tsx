import { useState } from 'react'
import styles from './Card.module.scss'

type PropsType = {
	item: any
	editAuto: any
	removeAuto: any
}

const Card = (props: PropsType) => {
	const [isEdit, setIsEdit] = useState(false)
	const [name, setName] = useState(props.item.name)
	const [model, setModel] = useState(props.item.model)
	const [price, setPrice] = useState(props.item.price)

	return (
		<div className={styles.vehicles__item}>
			<div className={styles.vehicles__itemImg}>
				<img
					src={`https://source.unsplash.com/200x100/?${props.item.name}+${props.item.model}`}
					alt=''
				/>
			</div>
			<div className={styles.vehicles__itemTitle}>
				<div className={styles.field}>
					{isEdit ? (
						<input
							type='text'
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					) : (
						<p>{props.item.name}</p>
					)}
				</div>
				<div className={styles.field}>
					{isEdit ? (
						<input
							type='text'
							value={model}
							onChange={e => setModel(e.target.value)}
						/>
					) : (
						<p>{props.item.model}</p>
					)}
				</div>
			</div>
			<div className={styles.vehicles__itemText}>
				<div className={styles.field}>
					<span>Год выпуска: </span> <p>{props.item.year}</p>
				</div>
				<div className={styles.field}>
					<span>Цвет: </span> <p>{props.item.color}</p>
				</div>
				<div className={styles.field}>
					<span>Цена: </span>
					{isEdit ? (
						<input
							type='number'
							value={price}
							onChange={e => setPrice(e.target.value)}
						/>
					) : (
						<p>{props.item.price}</p>
					)}
				</div>
			</div>
			<div className={styles.btnWrapper}>
				{isEdit ? (
					<button
						onClick={() => {
							setIsEdit(false)
							props.editAuto(props.item.id, name, model, price)
						}}
					>
						Сохранить
					</button>
				) : (
					<button
						onClick={() => {
							setIsEdit(true)
						}}
					>
						Редактировать
					</button>
				)}

				{!isEdit && (
					<button onClick={() => props.removeAuto(props.item.id)}>Удалить</button>
				)}
			</div>
		</div>
	)
}

export default Card
