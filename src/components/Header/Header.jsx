import { BsFillBasketFill} from "react-icons/bs";


export const Header = () => {

    const handleModal = {
    
}


    return (
        <>
            <header  className="bg-primary bg-opacity-10 p-3 mb-3 rounded" >
                <div className="d-flex justify-content-between align-self-center mb-3 "  >
                    <div className="d-flex  " >
                        <p className="my-0 me-3 p-2 fw-bold">Logo</p>
                        <nav className="nav grid gap-3">
                            <a className="nav-link active" aria-current="page" href="#">About us</a>
                            <a className="nav-link" href="#">Delivery</a>
                            <a className="nav-link" href="#">Payment</a>
                            <a className="nav-link">Contacts</a>
                        </nav>
                    </div>
                    <div  className="d-flex  align-items-center grid gap-4">
                        <button type="button" className="btn btn-outline-primary position-relative"> Sign in</button>
                        <button type="button" className="btn btn-outline-primary position-relative"> Register</button>

                    </div>
                </div>
              
                   
                <div className="d-flex justify-content-end">
                 <button type="button" className="btn btn-primary position-relative" ata-bs-toggle="modal" data-bs-target="#exampleModal">
                    <BsFillBasketFill />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        99+
                    </span>
                    </button>
                </div>
                

            </header>
        </>
    )
    
}