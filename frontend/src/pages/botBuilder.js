import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css'

function BotBuilder(){
    return (
        //Div class for menu
        <div class = "container-fluid">
            <div className="row flex-nowrap">
                <div className="col-md-3 col-xl-2 px-sm-2 px-0 bg-dark float-left">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="/"
                           className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline">Bot Name</span>
                        </a>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                            id="menu">
                            <li className="nav-item">
                                <a href="#" className="nav-link align-middle px-0">
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Example</span>
                                </a>
                            </li>
                            <li>
                                <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-speedometer2"></i> <span
                                    className="ms-1 d-none d-sm-inline">Ban</span> </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-table"></i> <span
                                    className="ms-1 d-none d-sm-inline">Kick</span></a>
                            </li>
                            <li>
                                <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                    <i className="fs-4 bi-bootstrap"></i> <span
                                    className="ms-1 d-none d-sm-inline">Members</span></a>
                            </li>
                            <li>
                                <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Command</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-people"></i> <span
                                    className="ms-1 d-none d-sm-inline">Command</span> </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col py-3">
                    <h1>Bot Details</h1>
                </div>
            </div>
        </div>
    );
}

export default BotBuilder;