export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello, Vite!</h1>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </Button>
    </div>
  );
}
