export const conceptsData = [
    {
      id: 'state',
      name: 'State',
      description:
        'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
      examples: [
        'Using useState hook: const [count, setCount] = useState(0);',
        'Updating state based on previous state: setCount(prev => prev + 1);',
      ],
    },
    {
      id: 'props',
      name: 'Props',
      description:
        'Props (short for properties) are read-only inputs to components. They allow passing data from parent to child components.',
      examples: [
        '<Welcome name="Sara" />',
        'function Welcome(props) { return <h1>Hello, {props.name}</h1>; }',
        'Using prop-types for validation (optional concept).',
      ],
    },
    {
      id: 'hooks',
      name: 'Hooks',
      description:
        'Hooks are functions that let you “hook into” React state and lifecycle features from function components.',
      examples: [
        'useState for state management.',
        'useEffect for side effects.',
        'useContext for accessing context.',
        'Custom Hooks for reusable logic.',
      ],
    },
  ];
  