import PropTypes from "prop-types";
function TicketNum({ num }) {
  return <span>{num}</span>;
}

export default TicketNum;
TicketNum.propTypes = {
  num: PropTypes.number,
};
