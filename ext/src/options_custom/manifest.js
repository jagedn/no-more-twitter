this.manifest = {
    "name": "No More Twitter",
    "icon": "icon.png",
    "settings": [
        {
            "tab": i18n.get("information"),
            "group": i18n.get("General"),
            "name": "url",
            "type": "text",
            "label": i18n.get("URL"),
            "text": i18n.get("x-characters")
        },
        {
            "tab": i18n.get("information"),
            "group": i18n.get("General"),
            "name": "myDescription",
            "type": "description",
            "text": i18n.get("description")
        },
        {
            "tab": i18n.get("information"),
            "group": i18n.get("General"),
            "name": "myButton",
            "type": "button",
            "label": i18n.get("General"),
            "text": i18n.get("save")
        }
    ],
    "alignment": [
        [
            "url"
        ]
    ]
};
