1. What problem does the context API help solve?

Allows you to pass data between componenents without prop drilling

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are packets of information that describe events that happen in the UI.
Reducers recives action and creates new state tree
Store holds al the data for app

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global, and your component state is local. Redux  holds the state in the store and paasses it to any componenet that needs it

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux thunk allows us to make async calls in redux

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I like redux because I put the most time into trying to understand it and its an industry standard state management system
