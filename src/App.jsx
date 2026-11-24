import React, { useState } from 'react';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>React Counter & Calculator</h1>

      {/* --- Counter Section --- */}
      <section>
        <h2>Counter</h2>
        <Counter />
      </section>

      <hr style={{ margin: '20px 0' }} />

      {/* --- Calculator Section --- */}
      <section>
        <h2>Calculator</h2>
        <Calculator />
      </section>
    </div>
  );
}

// 1. Counter Component
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current Count: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>+ Increment</button>{' '}
      <button onClick={() => setCount(count - 1)}>- Decrement</button>{' '}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// 2. Calculator Component
function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      // Basic evaluation for standard arithmetic operations
      const evalResult = Function(`'use strict'; return (${input})`)();
      setResult(evalResult);
    } catch (err) {
      setResult('Error');
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={input}
          placeholder="0"
          readOnly
          style={{ width: '180px', padding: '5px' }}
        />
        <p>Result: <strong>{result}</strong></p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 40px)', gap: '5px' }}>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
}

export default App;
