import Heading from "./components/heading";
import Button from "./components/button";

export default function Homepage() {
  return (
    <div className="max-w-screen-xl p-4">
      <Heading as="h1" size="4xl">
        Heading 1
      </Heading>
      <Heading as="h2" size="3xl">
        Heading 2
      </Heading>
      <Button>Primary</Button>
    </div>
  );
}
