const quadParameter = (prop, unit) => {
    const finalProp = Array.isArray(prop)
        ? prop.map(radius => `${radius}${unit}`).join(" ")
        : `${prop}${unit} ${prop}${unit} ${prop}${unit} ${prop}${unit}`;

    return finalProp;
};

export default quadParameter;
