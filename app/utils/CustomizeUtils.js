import { setLocale } from "yup/lib/customLocale";
import _ from "lodash";

const getLinkConfigObj = ({ value, onActionFunc }) => {
  return {
    type: "link",
    value: value,
    onActionFunc: onActionFunc
  };
};

const getCheckboxObj = ({ id, checked, value, onActionFunc }) => {
  return {
    type: "checkbox",
    id: id,
    checked: checked,
    value: value,
    onActionFunc: onActionFunc
  };
};

const getUuid = () => {
  const chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");
  for (let i = 0, len = chars.length; i < len; i += 1) {
    switch (chars[i]) {
      case "x":
        chars[i] = Math.floor(Math.random() * 16).toString(16);
        break;
      case "y":
        chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
        break;
    }
  }
  return chars.join("");
};

const setYupLocale = () => {
  setLocale({
    mixed: {
      notType: ({ path, type, originalValue }) => {
        switch (type) {
          case "number":
            return `You typed ${originalValue}, ${path} should be a Number.`;
          default:
            return "Invalid format!";
        }
      }
    }
  });
};

const setSelectedMenu = headerConfig => {
  const localPath = location.pathname;
  _.forEach(headerConfig.tabsList, (tabValue, tabKey) => {
    if (localPath === tabValue.labelPath.pathname) {
      headerConfig.defaultTab = tabKey;
    }
  });

  return headerConfig;
};

export {
  getLinkConfigObj,
  getCheckboxObj,
  getUuid,
  setYupLocale,
  setSelectedMenu
};
