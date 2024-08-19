import React from 'react'

import styles from './NotFoundBlock.module.scss'

function NotFoundBlock() {
  return (
		<div className={styles.root}>
			<h1 className={styles.title}>
				<span> 👿 </span>
				<br />
				Ничего не найдено
			</h1>
			<p className={styles.description}>
				Данная страница не найдена, попробуйте перезагрузить страницу
			</p>
		</div>
	)
}

export default NotFoundBlock