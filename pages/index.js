import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       
      </main>

      <footer className={styles.footer}>
       footer
      </footer>
    </div>
  )
}

export async function getStaticProps(context) {
  console.log('getStaticProps')
  return {
    props: {}, // will be passed to the page component as props
  }
}

export async function getServerSideProps() {
  console.log('getServerSideProps')
  return { props: {  } }
}