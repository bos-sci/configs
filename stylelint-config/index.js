module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-prettier-scss"],
  plugins: ["stylelint-order"],
  defaultSeverity: "error",
  rules: {
    "alpha-value-notation": "number",
    "annotation-no-unknown": true,
    "at-rule-no-vendor-prefix": true,
    "at-rule-allowed-list": [
      "debug",
      "each",
      "else",
      "error",
      "extend",
      "for",
      "forward",
      "function",
      "if",
      "import",
      "include",
      "keyframes",
      "media",
      "mixin",
      "return",
      "use",
      "warn",
      "while",
    ],
    "block-no-empty": true,
    "color-function-notation": "legacy",
    "color-hex-length": "long",
    "color-named": "never",
    "color-no-hex": true,
    "color-no-invalid-hex": true,
    "comment-no-empty": null,
    "comment-whitespace-inside": "always",
    "custom-property-no-missing-var-function": true,
    "declaration-block-no-duplicate-custom-properties": true,
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-redundant-longhand-properties": [
      true,
      {
        ignoreShorthands: ["font", "/grid/", "transition", "animation"],
      },
    ],
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-single-line-max-declarations": 1,
    "declaration-empty-line-before": "never",
    "declaration-no-important": true,
    "declaration-property-unit-allowed-list": {
      "font-size": ["rem"],
      "line-height": [],
    },
    "declaration-property-unit-disallowed-list": {
      "/^border(-(?!radius)[a-z]+)?$/": ["%"],
    },
    "declaration-property-value-allowed-list": {
      "font-family": ["inherit", "initial", "revert", "revert-layer", "unset"],
    },
    "declaration-property-value-disallowed-list": {
      "/^border/": ["none"],
      "/./": ["/\\d+\\.\\d+px/"],
    },
    "font-family-name-quotes": "always-unless-keyword",
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "font-weight-notation": "numeric",
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-name-case": "lower",
    "function-no-unknown": null,
    "function-url-no-scheme-relative": true,
    "function-url-quotes": "always",
    "function-url-scheme-disallowed-list": [
      "/ftp/",
      "/^http/",
      "/^www/",
      ".com$",
      "/^data:/",
    ],
    "hue-degree-notation": "angle",
    "import-notation": "string",
    "keyframe-block-no-duplicate-selectors": true,
    "keyframe-declaration-no-important": true,
    "keyframe-selector-notation": "percentage-unless-within-keyword-only-block",
    "length-zero-no-unit": true,
    "media-feature-name-no-unknown": true,
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-name-value-allowed-list": {
      "min-width": [
        "576px",
        "768px",
        "992px",
        "1200px",
        "$breakpoint-sm-min",
        "$breakpoint-md-min",
        "$breakpoint-lg-min",
        "$breakpoint-xl-min",
        "$breakpoint-xxl-min",
        "$fs-breakpoint",
      ],
      "max-width": [
        "575px",
        "767px",
        "991px",
        "1199px",
        "$breakpoint-sm-min",
        "$breakpoint-md-min",
        "$breakpoint-lg-min",
        "$breakpoint-xl-min",
        "$breakpoint-xxl-min",
      ],
    },
    "media-feature-name-allowed-list": [
      "min-width",
      "max-width",
      "prefers-reduced-motion",
      "prefers-color-scheme",
    ],
    "media-feature-range-notation": "prefix",
    "named-grid-areas-no-invalid": true,
    "no-descending-specificity": null,
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-empty-source": true,
    "no-invalid-double-slash-comments": true,
    "no-invalid-position-at-import-rule": true,
    "no-irregular-whitespace": true,
    "no-unknown-animations": true,
    "number-max-precision": 4,
    "order/properties-order": [
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",
      "display",
      "grid",
      "grid-area",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-auto-rows",
      "grid-column",
      "grid-column-end",
      "grid-column-start",
      "grid-row",
      "grid-row-end",
      "grid-row-start",
      "grid-template",
      "grid-template-areas",
      "grid-template-columns",
      "grid-template-rows",
      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "justify-content",
      "justify-items",
      "justify-self",
      "align-content",
      "align-items",
      "align-self",
      "vertical-align",
      "box-sizing",
      "width",
      "height",
      "min-width",
      "min-height",
      "max-width",
      "max-height",
      "aspect-ratio",
      "resize",
      "table-layout",
      "clip-path",
      "overflow",
      "overflow-x",
      "overflow-y",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "margin-block",
      "margin-block-start",
      "margin-block-end",
      "margin-inline",
      "margin-inline-start",
      "margin-inline-end",
      "opacity",
      "visibility",
      "box-shadow",
      "outline",
      "outline-width",
      "outline-style",
      "outline-color",
      "outline-offset",
      "border-collapse",
      "border-spacing",
      "border-radius",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius",
      "border",
      "border-width",
      "border-style",
      "border-color",
      "border-top",
      "border-top-width",
      "border-top-style",
      "border-top-color",
      "border-right",
      "border-right-width",
      "border-right-style",
      "border-right-color",
      "border-bottom",
      "border-bottom-width",
      "border-bottom-style",
      "border-bottom-color",
      "border-left",
      "border-left-width",
      "border-left-style",
      "border-left-color",
      "border-image",
      "border-image-source",
      "border-image-slice",
      "border-image-width",
      "border-image-outset",
      "border-image-repeat",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "padding-block",
      "padding-block-start",
      "padding-block-end",
      "padding-inline",
      "padding-inline-start",
      "padding-inline-end",
      "background",
      "background-clip",
      "background-color",
      "background-image",
      "background-origin",
      "background-position",
      "background-position-x",
      "background-position-y",
      "background-repeat",
      "background-size",
      "background-attachment",
      "background-blend-mode",
      "content",
      "color",
      "font",
      "font-family",
      "font-style",
      "font-variant",
      "font-weight",
      "font-size",
      "line-height",
      "font-display",
      "text-transform",
      "text-align",
      "text-orientation",
      "text-indent",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-line",
      "text-decoration-skip-ink",
      "text-decoration-style",
      "text-underline-position",
      "letter-spacing",
      "word-break",
      "word-spacing",
      "word-wrap",
      "white-space",
      "list-style",
      "list-style-type",
      "list-style-image",
      "list-style-position",
      "transform",
      "offset-path",
      "animation",
      "animation-name",
      "animation-duration",
      "animation-timing-function",
      "animation-delay",
      "animation-iteration-count",
      "animation-direction",
      "animation-fill-mode",
      "animation-play-state",
      "transition",
      "transition-property",
      "transition-duration",
      "transition-timing-function",
      "transition-delay",
      "scroll-behavior",
      "cursor",
    ],
    "property-disallowed-list": [
      "-webkit-line-clamp",
      "additive-symbols",
      "bleed",
      "box-align",
      "box-direction",
      "box-flex-group",
      "box-flex",
      "box-lines",
      "box-ordinal-group",
      "box-orient",
      "box-pack",
      "clear",
      "clip",
      "float",
      "font-smooth",
      "font-stretch",
      "font-synthesis",
      "inset",
      "marks",
      "page-break-after",
      "page-break-before",
      "page-break-inside",
      "rotate",
      "scale",
      "scroll-snap-type-x",
      "scroll-snap-type-y",
      "scrollbar-color",
      "scrollbar-width",
      "size",
      "text-align-last",
      "text-decoration-skip",
      "text-justify",
      "text-rendering",
      "text-shadow",
      "translate",
      "user-modify",
      "zoom",
    ],
    "property-no-unknown": true,
    "property-no-vendor-prefix": true,
    "rule-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["after-comment"],
      },
    ],
    "selector-attribute-quotes": "always",
    "selector-class-pattern": "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
    "selector-id-pattern": "^[a-z][a-zA-Z0-9]+$",
    "selector-max-id": 0,
    "selector-max-universal": 1,
    "selector-no-vendor-prefix": true,
    "selector-not-notation": "simple",
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "selector-type-no-unknown": true,
    "shorthand-property-no-redundant-values": true,
    "string-no-newline": true,
    "unit-disallowed-list": ["cm", "mm", "Q", "in", "pc", "pt", "ex", "lh"],
    "unit-no-unknown": [
      true,
      {
        ignoreFunctions: ["space"],
      },
    ],
    "value-keyword-case": "lower",
    "value-no-vendor-prefix": true,
    "scss/at-each-key-value-single-line": true,
    "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-else-empty-line-before": "never",
    "scss/at-extend-no-missing-placeholder": null,
    "scss/at-function-parentheses-space-before": "never",
    "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-if-no-null": true,
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension": "never",
    "scss/at-mixin-argumentless-call-parentheses": "never",
    "scss/at-mixin-named-arguments": [
      "always",
      {
        ignore: ["single-argument"],
      },
    ],
    "scss/at-mixin-parentheses-space-before": "never",
    "scss/at-rule-conditional-no-parentheses": true,
    "scss/at-rule-no-unknown": true,
    "scss/comment-no-empty": true,
    "scss/declaration-nested-properties": "never",
    "scss/dollar-variable-colon-space-after": "always-single-line",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/dollar-variable-empty-line-after": [
      "always",
      {
        except: ["before-dollar-variable", "last-nested"],
        ignore: ["before-comment"],
      },
    ],
    "scss/dollar-variable-empty-line-before": [
      "always",
      {
        except: ["first-nested", "after-dollar-variable"],
        ignore: ["after-comment"],
      },
    ],
    "scss/dollar-variable-first-in-block": [
      true,
      {
        ignore: ["comments", "imports"],
        except: ["root"],
      },
    ],
    "scss/dollar-variable-no-missing-interpolation": true,
    "scss/dollar-variable-no-namespaced-assignment": true,
    "scss/dollar-variable-pattern": "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
    "scss/percent-placeholder-pattern": "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
    "scss/double-slash-comment-whitespace-inside": "always",
    "scss/function-no-unknown": [
      true,
      {
        ignoreFunctions: ["space", "calc", "blur"],
      },
    ],
    "scss/function-quote-no-quoted-strings-inside": true,
    "scss/function-unquote-no-unquoted-strings-inside": true,
    "scss/operator-no-newline-after": true,
    "scss/operator-no-newline-before": true,
    "scss/operator-no-unspaced": true,
    "scss/selector-nest-combinators": "always",
    "scss/selector-no-redundant-nesting-selector": true,
    "scss/no-duplicate-dollar-variables": true,
    "scss/no-duplicate-mixins": true,
  },
};
