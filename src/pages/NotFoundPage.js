import React from 'react'
import styles from './NotFoundPage.module.css'

function NotFoundPage() {
  return <img className={styles.page_not_found} src="./404.jpg" alt="error_404" />;
}

export default NotFoundPage