import { useQuery } from "@tanstack/react-query";

export default function useFact() {

    const {data, refetch, isLoading, error} = useQuery({
        queryKey: ['fact'],
        queryFn: () => 
            fetch('https://catfact.ninja/fact').then((res) => 
                res.json()
            )
    })

    function refetchData() {

        alert("Data reloaded")
        refetch()

    }

    return { data, refetchData, isLoading }

}