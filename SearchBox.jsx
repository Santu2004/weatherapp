import TextField from '@mui/material/TextField';
export default function SearchBox(){
    return(
        <>
        <h1>Search for the weather</h1>
         <TextField id="city" label="City Name" variant="outlined" />
        </>
    );
}