import React, { useState } from "react";
import styles from "./Card.module.scss";

const Card = ({ item, editAuto, removeAuto }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(item.name);
  const [model, setModel] = useState(item.model);
  const [price, setPrice] = useState(item.price);

  return (
    <div className={styles.vehicles__item}>
      <div className={styles.vehicles__itemImg}>
        <img
          src={`https://source.unsplash.com/200x100/?${item.name}+${item.model}`}
          alt=""
        />
      </div>
      <div className={styles.vehicles__itemTitle}>
        <div className={styles.field}>
          {isEdit ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <p>{item.name}</p>
          )}
        </div>
        <div className={styles.field}>
          {isEdit ? (
            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          ) : (
            <p>{item.model}</p>
          )}
        </div>
      </div>
      <div className={styles.vehicles__itemText}>
        <div className={styles.field}>
          <span>Год выпуска: </span> <p>{item.year}</p>
        </div>
        <div className={styles.field}>
          <span>Цвет: </span> <p>{item.color}</p>
        </div>
        <div className={styles.field}>
          <span>Цена: </span>
          {isEdit ? (
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          ) : (
            <p>{item.price}</p>
          )}
        </div>
      </div>
      <div className={styles.btnWrapper}>
        {isEdit ? (
          <button
            onClick={() => {
              setIsEdit(false);
              editAuto(item.id, name, model, price);
            }}
          >
            Сохранить
          </button>
        ) : (
          <button
            onClick={() => {
              setIsEdit(true);
            }}
          >
            Редактировать
          </button>
        )}

        {!isEdit && (
          <button onClick={() => removeAuto(item.id)}>Удалить</button>
        )}
      </div>
    </div>
  );
};

export default Card;
