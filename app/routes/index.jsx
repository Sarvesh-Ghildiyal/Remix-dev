export const meta = () => {
  return [{ title: "New Remix App" }];
};
import { Button } from "~/components/ui/button";
export default function Index() {
  return (
    <div className="grid place-items-center h-screen">
      <Button size="lg" variant="destructive">
        Click me
      </Button>
    </div>
  );
}
