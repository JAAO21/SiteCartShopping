
import { useState } from "react";

export function useLoading() {
    let [loading, setLoading] = useState(false);
    return { loading, setLoading };
}