const testAction = ({ render, component }) => ({ name, action }) => {
  it(`should inject the action '${name}'`, () => {
    action.mockImplementation(() => ({
      type: 'MOCK_ACTION'
    }));

    const actionProp = render()
      .find(component)
      .prop(name);

    expect(actionProp).toBeDefined();

    actionProp();

    expect(action).toHaveBeenCalled();
  });
};

export default testAction;
