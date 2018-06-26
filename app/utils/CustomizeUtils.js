import { setLocale } from "yup/lib/customLocale";
export default class CustomizeUtils {
    static getLinkConfigObj(object) {
        return {
            type: 'link',
            value: object.value,
            onActionFunc: object.onActionFunc
        }
    }

    static getCheckboxObj(object) {
        return {
            type: 'checkbox',
            id: object.id,
            checked: object.checked,
            value: object.value,
            onActionFunc: object.onActionFunc
        }
    }

    static getUuid() {
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
    }

    static setYupLocale() {
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
    }
}
