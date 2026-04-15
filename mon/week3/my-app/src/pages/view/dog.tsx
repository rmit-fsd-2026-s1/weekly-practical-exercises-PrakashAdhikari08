import {useEffect, useState} from "react";
import axios from "axios";
import {Button} from "@chakra-ui/react";

export default function Dog() {

    type apiResponse = {
        fileSizeBytes: number,
        url : string
    }

    const [dogDetails, setDogDetails] = useState({
        fileSizeBytes : 0,
        url : ""
    });

    const [refresh, setRefresh] = useState<boolean>(false);

    const fetchDog = async () => {
        const response = await fetch("https://random.dog/woof.json");
        const data = await response.json();
        setDogDetails(data);
    }

    useEffect(() => {
        fetchDog()
    }, [refresh])
    return (
        <>
        <h1>Dog</h1>
        <img src={dogDetails.url} alt={"dog"} />
        <p>file size is : {dogDetails.fileSizeBytes}</p>
            <Button colorScheme={"blue"} onClick={(event) => setRefresh(!refresh)}>Refresh</Button>
    </>
    );
}