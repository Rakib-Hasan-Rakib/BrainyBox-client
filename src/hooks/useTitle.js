import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Brainy Box | ${title}`
    }, [title])
}

export default useTitle