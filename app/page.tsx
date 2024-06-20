import {Header, Features, Volunteer, Message, Transfer, Donations} from '../components/index'
import '@mantine/carousel/styles.css';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <Header/>
      <Features/>
      <Donations/>
      <Volunteer/>
      {/* <Message/> */}
      <Transfer/>
    </main>
  );
}
