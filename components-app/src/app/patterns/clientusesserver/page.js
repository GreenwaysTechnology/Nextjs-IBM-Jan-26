import { Counter } from "@/app/patterns/clientusesserver/components/Counter";
import CounterHeader from "@/app/patterns/clientusesserver/components/CounterHeader";


export default function ServerPage() {
    return <>
        {/* <Counter /> */}
        <Counter>
            {/* Pass server component as child to Counter(client component), so that server
            component never looses the server rendering
             */}
            <CounterHeader />
        </Counter>
    </>
}
