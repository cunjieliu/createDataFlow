/**
 * 将驼峰命名的字符串按下划线分，并转为大写 myName -> MY_NAME
 * @param {string} str
 */
const splitCamelCaseToUpperCase = (str) => {
  return str.replace(/([a-z])([A-Z])/g, '$1_$2').toUpperCase();
};

export default splitCamelCaseToUpperCase;
