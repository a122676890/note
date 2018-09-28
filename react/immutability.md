## why immutability so important

the immutability increases predictability, performance (indirectly) and allows for mutation tracking.

### Predictability

Mutation hides change, which create (unexpected) side effects, which can cause nasty bugs. When you enforce immutability you can keep your application architecture and mental model simple, which makes it easier to reason about your application.

## Performance

Even though adding values to an immutable Object means that a new instance needs to be created where existing values need to be copied and new values need to be added to the new Object which cost memory, immutable Objects can make use of structural sharing to reduce memory overhead


Besides reduced memory usage, immutability allows you to optimize your application by making use of reference- and value equality. This makes it really easy to see if anything has changed. For example a state change in a react component. You can use shouldComponentUpdate to check if the state is identical by comparing state Objects and prevent unnecessary rendering. 