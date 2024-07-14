import { useFormStatus } from "react-dom";
const SubmitButton = () => {
    const status = useFormStatus()
    return (
      <button
        type="submit"
        className="input-group-text bg-primary text-white"
        disabled={status.pending}
      >
        <i className={`${status.pending ? "fas fa-spinner fa-spin" : "fas fa-search"}`} />
      </button>
    );
  };
  export default SubmitButton