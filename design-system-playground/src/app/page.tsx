import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-3xl font-bold text-primary">
        Design System Playground
      </h1>
      <p className="text-muted-foreground">Tokens + Tailwind + Next 15.5.2</p>
      <div className="flex gap-2">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </main>
  );
}
