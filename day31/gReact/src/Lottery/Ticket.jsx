import TicketNum from "./TicketNum";
import PropTypes from "prop-types";

const Ticket = ({ nums }) => {
  return (
    <div className="px-8 py-6 border my-4 text-center text-xl">
      <p>Ticket</p>
      <p>
        {nums.map((num, idx) => (
          <TicketNum num={num} key={idx} />
        ))}
      </p>
    </div>
  );
};
Ticket.propTypes = {
  nums: PropTypes.array,
};

export default Ticket;
