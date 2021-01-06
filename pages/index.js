import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({data={}}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <h2>From Api</h2>
       <p>name: {data.name}</p>
       <p>time: {data.time}</p>
      </main>

      <footer className={styles.footer}>
       footer
      </footer>
    </div>
  )
}

export async function getStaticProps(context) {
  console.log('getStaticProps')
  const res = await fetch(`https://nextjs-demo.ckken.vercel.app/api/hello`)
  const data = await res.json()
  return {
    props: {data}, // will be passed to the page component as props
  }
}

/* export async function getServerSideProps() {
  console.log('getServerSideProps')
  return { props: {  } }
} */