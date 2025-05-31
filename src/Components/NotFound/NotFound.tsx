import notFoundImg from "../../assets/images/404-not-found.png"

export default function NotFound() {
  return (
    <div className="text-center p-5">
      <img
        src={notFoundImg}
        alt="404 Not Found"
        className="img-fluid"
        style={{ maxHeight: '400px' }}
      />
      <h2 className="mt-4 text-danger">404 - Page Not Found</h2>
      <p className="text-muted">Sorry, the page you’re looking for doesn’t exist.</p>
    </div>
  );
}