import Script from "next/script";
import { Button } from "../src/components/commans/Button";
import Footer from "../src/components/commans/Footer";
import Menu from "../src/components/commans/Menu";
export default function Home() {
  return (
    <div style={{
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      {/* Ionicons is a completely open-source icon set with 1,300 icons */}
      <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
      <Menu />
      <Footer/>
      {/*<Button ghost variant="secondary.main">Olá, Mundo  </Button>
      <Button variant="primary.main">Olá, Luiz  </Button>*/}
    </div>   
  )
}
