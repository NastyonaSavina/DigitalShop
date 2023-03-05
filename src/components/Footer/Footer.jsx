
export const Footer = () => {
    
    return (
        <>
            <footer >
                <div className="bg-dark p-5  rounded">
                    <div className="d-flex row ">
                        <div className="me-5 col-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link mb-3" href="#">Logo</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ">Disabled</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-3" >
                            <ul className="nav flex-column">
                                <li className="nav nav-item">
                                    <a className="nav-link link-primary px-3 py-2" href="#">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link-primary px-3 py-2" href="#">Useful Information1</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link-primary px-3 py-2" href="#">Useful Information2</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link-primary px-3 py-2">Useful Information13</a>
                                </li>
                            </ul>
                        </div>
                        
                                      
  
                    </div>
                </div>
            </footer>
        </>
    )
}