const testProp = ({
  render,
  component,
}) => (
  {
    name,
    selector,
    expected,
  }
) => {
  it(`should inject the prop '${name}'`, () => {
    selector.mockReturnValue(expected);

    const prop = render()
      .find(component)
      .prop(name);

    expect(prop).toBeDefined();
    expect(prop).toEqual(expected);
  });
};

export default testProp;
