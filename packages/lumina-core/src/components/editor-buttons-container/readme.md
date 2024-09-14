# Show edit

This component is responsible to show a list of actions on every editable component

**Possible actions**

- Add
- Edit
- Remove

## Add action

On click, shows a modal with a list of available components that can be added as a children of the current component.

The user is then capable of selecting a component from the list and add it as a children component.

The application context needs to be updated accordingly, and the components needs to be created on the server side also.

## Edit action

On click, shows a modal with all the component props with the current values.

The user is then capable of editing those values and save them.

The application context needs to be updated accordingly, and the component needs to be updated on the server side also.

## Remove action

On click, shows a modal asking user confirmation for the action.

If the user confirms then the component is removed.

When removing a component, the entire children tree needs to be removed also.

The application context needs to be updated accordingly, and the component and children need to be removed on the server side also.
