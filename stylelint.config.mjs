/** @type {import("stylelint").Config} */
export default {
  extends: "stylelint-config-standard",
  "rules": {
    "custom-property-pattern": [
      "^([a-z][a-z0-9]*)(_[a-z0-9]+)*$",
      {
        "message": "Expected custom property name to be snake_case"
      }
    ]
  }
}