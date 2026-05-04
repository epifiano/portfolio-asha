import { Footer } from './components/footer'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { Layout } from './components/layout'
import { Projects } from './components/projects'
import { Work } from './components/work'

export default function App() {
  return (
    <Layout>
      <Header />
      <main className="mx-auto max-w-4xl">
        <Hero />
        <Projects />
        <Work />
      </main>
      <Footer />
    </Layout>
  )
}
