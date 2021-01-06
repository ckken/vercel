import Head from 'next/head'
import Link from 'next/link'
export default function Nav() {
    return (
      <>
        <Head>
          <title>Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className="nav">
        <ul>
            <li>
                <Link href="/">home</Link>
            </li>
            <li>
                <Link href="/about">about</Link>
            </li>
        </ul>
        </div>
      </>
    )
  }