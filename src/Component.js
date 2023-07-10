import React from 'react';
import { useState } from 'react';

function Component() {
    const [option, setOption] = useState("blank");
  
    const handleChange = (event) => {
      setOption(event.target.value);
    }
  
    return (
      <form>
        <p role="paragraph">
          You {option} it
        </p>
        <select data-testid="select" value={option} onChange={handleChange}>
          <option value="like">I like it</option>
          <option value="love">I love it</option>
        </select>
      </form>
    )
}


export default Component;