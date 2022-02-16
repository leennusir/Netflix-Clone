
function ModalMovie(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
       <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.movie.overview}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add fav
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );}
  
  export default ModalMovie;