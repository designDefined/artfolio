import Card from "@/components/Card";
import "./Home.css";

export default function Home() {
  return (
    <main className="Page">
      <div className="Title">포트폴리오 제목</div>
      <div className="Subtitle">포트폴리오 부제</div>
      <div className="CardBox">
        <Card name="제목 1" src="/bg_2.png"/>
        <Card name="제목 2" src="/bg_3.png"/>
      </div>
    </main>
  )
}
