import { Intro } from "./components/intro";
import Container from "./components/container";
import { MoreStories } from "./components/more-stories";

export default function Home() {
 
  return (
    <>
      <Container>
        <Intro />
        <MoreStories />
      </Container>
    </>
  );
}
