import {
    Button,
    ButtonGroup, FormControl,
    FormLabel,
    Input,
    Table,
    TableContainer,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react"
import {useEffect, useState} from "react";
import { getVenueData} from "../data/dataloader";
import  { Venue } from "../data/venue.data";
import {ToastContainer} from "react-toastify";
export default function VenueList() {

    const [venues, setVenues] = useState<Venue[]>([]);
    const [refresh, setRefresh] = useState<boolean>(false);
    useEffect(() => {
        setVenues(getVenueData());
    },[refresh] )



    type venueDetails = {
        id : number,
        name : string,
        capacity : number,
        description : string
    }

    const [newVenue, setNewVenue] = useState({
        id : 0,
        name : "",
        capacity : 0,
        description : ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setNewVenue((prevState) => ({
            ...prevState,
            [event.target.name] : event.target.value
        }));
        console.log(newVenue);
    }


    const addVenue =(e) => {
        //add new venue to the venues list
        // @ts-ignore
        event.preventDefault();
        console.log(newVenue);
        venues.push(newVenue);
        localStorage.setItem("venueList", JSON.stringify(venues));
        setRefresh(!refresh);

    }

    // @ts-ignore
    return (
        <>
        <TableContainer>
            <Table size='lg'>
                <Thead>
                    <Tr>
                        <Th>Id</Th>
                        <Th>Name</Th>

                        <Th isNumeric>Capacity</Th>
                        <Th >Description</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {venues.map((venue) => (
                        <tr key={venue.id}>
                            <Td >{venue.id}</Td>
                            <Td >{venue.name}</Td>
                            <Td> {venue.capacity}</Td>
                            <Td >{venue.description}</Td>
                            <Button colorScheme={"blue"} size = 'sm' >Book Venue</Button>
                        </tr>
                    ))}

                </Tbody>

            </Table>

        </TableContainer>
    <FormControl className={"login-form"} >
        <Input type = "text"  name= {"id"} placeholder="Enter Venue Id"  size='sm' mb='8px' onChange={handleChange}/>
        <Input type = "text" name = {"name"} placeholder="Enter Venue Name"  size='sm' mb='8px' onChange={handleChange}/>
        <Input type = "number" name = {"capacity"} placeholder="Enter Venue Capacity"  size='sm' mb='8px' onChange={handleChange}/>
        <Input type = "text" name = {"description"} placeholder="Enter Venue Description"  size='sm' mb='8px' onChange={handleChange}/>

        <ButtonGroup gap={4} mt={4}>
            <Button colorScheme={"blue"} onClick={()=> addVenue()}>Add Venue</Button>

        </ButtonGroup>

    </FormControl>

    </>
    )
}