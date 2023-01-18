const getQueryNumberParameter = (param, defaultValue) => {
  return param ? parseInt(param, 10) : defaultValue;
};

export default getQueryNumberParameter;
