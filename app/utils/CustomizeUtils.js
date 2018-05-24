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

    static getUuid(object) {
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
}
