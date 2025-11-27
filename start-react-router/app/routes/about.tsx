import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hi" },
    { name: "description", content: "Welcome!" },
  ];
}

export default function Index() {
  return <h1>Hello</h1>
}
