
export default function Login(){

    const handleChangeUserName =(e)=> {
        //event.preventDefault()
        console.log(e.target.value);
    }

    const handleChangePw =(e) => {
        console.log(e.target.value)
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        //compare username and password
        //if correct login else wrong pw

        console.log("hello")

    }
    return(
        <>
            <form >
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        onChange={ handleChangeUserName}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        onChange={handleChangePw}
                    />
                </div>
                <button
                onSubmit={handleSubmit}>Log In</button>
            </form>

        </>
    )
}