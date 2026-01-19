
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
       {/* <h1>Message : {process.env.MESSAGE}</h1> */}
       <br/>
       <h1>Myname : {process.env.MYNAME}</h1>
    </div>
  );
}
