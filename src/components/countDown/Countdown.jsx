import React from 'react'
import Countdown from 'react-countdown'
const Completionist = () => <span>Offer Ended!!!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {/* Offer ends in {zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)} */}
        Offer ends in {days}d {hours}h {minutes}m {seconds}s
      </span>
    );
  }
};
const CountdownComponent = () => {
  return (
    <div>
      <Countdown date={new Date('Jul 10, 2021 18:00:00')} renderer={renderer}>
        <Completionist />
      </Countdown>
    </div>
  )
}

export default CountdownComponent
