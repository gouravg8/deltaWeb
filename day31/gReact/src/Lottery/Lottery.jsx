import Ticket from "./Ticket";
import PropTypes from "prop-types";
import { useState } from "react";
import { genTicket } from "./LotteryHelper";

const Lottery = ({ n = 5, winCondition }) => {
  const [ticket, setTicket] = useState(genTicket(n));
  const isWinning = winCondition(ticket);

  function buyTicket() {
    setTicket(genTicket(n));
  }

  return (
    <>
      <Ticket nums={ticket} />

      <button
        className="bg-white text-black px-4 py-2 my-4 font-semibold"
        onClick={buyTicket}
        type="submit"
      >
        Buy Tickets
      </button>

      {isWinning && <p className="text-center">You won</p>}
    </>
  );
};

Lottery.propTypes = {
  n: PropTypes.number,
  winCondition: PropTypes.func,
};

export default Lottery;
