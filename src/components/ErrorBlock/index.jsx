import React from 'react'

import styles from './ErrorBlock.module.scss'

function ErrorBlock() {
	return (
					<div className={styles.root}>
						<h1 className={styles.title}>
							<span> &#129396; </span>
							<br />
							Упс.. Произошла ошибка!
						</h1>
						<p className={styles.test}>
							Вероятнее всего произошел технический сбой, приносим извинения!
						</p>
						<p className='test'>
							Попробуйте перезагрузить страницу.
						</p>
					</div>
	)
}

export default ErrorBlock
