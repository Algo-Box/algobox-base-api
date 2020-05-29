const OFF = 0, WARN = 1, ERROR = 2;
module.exports = exports = {
  "ENV": {
    "ES6": TRUE,
    "NODE": TRUE,
    "BROWSER": FALSE,
    "JEST": TRUE
  },
  "EXTENDS":[
    "ESLINT:RECOMMENDED",
    "PLUGIN:@TYPESCRIPT-ESLINT/ESLINT-RECOMMENDED"
  ],
  "PARSERoPTIONS": {
    "ECMAvERSION": 2020,
    "SOURCEtYPE": "MODULE",
    "ECMAfEATURES": {
      "MODULES": FALSE
    }
  },
  "RULES": {
    // pOSSIBLE eRRORS (OVERRIDES FROM RECOMMENDED SET)
    "NO-EXTRA-PARENS": error,
    "NO-UNEXPECTED-MULTILINE": error,
    // aLL jsdOC COMMENTS MUST BE VALID
    "VALID-JSDOC": [warn, {
      "REQUIRErETURN": FALSE,
      "REQUIRErETURNdESCRIPTION": FALSE,
      "REQUIREpARAMdESCRIPTION": TRUE,
      "PREFER": {
        "RETURN": "RETURNS"
      }
    }],
    // bEST pRACTICES
    // aLLOWED A GETTER WITHOUT SETTER, BUT ALL SETTERS REQUIRE GETTERS
    "ACCESSOR-PAIRS": [error, {
      "GETwITHOUTsET": FALSE,
      "SETwITHOUTgET": TRUE
    }],
    "BLOCK-SCOPED-VAR": warn,
    "CONSISTENT-RETURN": error,
    "CURLY": error,
    "DEFAULT-CASE": warn,
    // THE DOT GOES WITH THE PROPERTY WHEN DOING MULTILINE
    "DOT-LOCATION": [warn, "PROPERTY"],
    "DOT-NOTATION": warn,
    "EQEQEQ": [error, "SMART"],
    "GUARD-FOR-IN": warn,
    "NO-ALERT": error,
    "NO-CALLER": error,
    "NO-CASE-DECLARATIONS": warn,
    "NO-DIV-REGEX": warn,
    "NO-ELSE-RETURN": warn,
    "NO-EMPTY-PATTERN": warn,
    "NO-EQ-NULL": warn,
    "NO-EVAL": error,
    "NO-EXTEND-NATIVE": error,
    "NO-EXTRA-BIND": warn,
    "NO-FLOATING-DECIMAL": warn,
    "NO-IMPLICIT-COERCION": [warn, {
      "BOOLEAN": TRUE,
      "NUMBER": TRUE,
      "STRING": TRUE
      }],
    "NO-IMPLIED-EVAL": error,
    "NO-INVALID-THIS": error,
    "NO-ITERATOR": error,
    "NO-LABELS": off,
    "NO-LONE-BLOCKS": warn,
    "NO-LOOP-FUNC": error,
    "NO-MAGIC-NUMBERS": [warn, { IGNOREaRRAYiNDEXES: TRUE}],
    "NO-MULTI-SPACES": error,
    "NO-MULTI-STR": warn,
    "NO-NATIVE-REASSIGN": error,
    "NO-NEW-FUNC": error,
    "NO-NEW-WRAPPERS": error,
    "NO-NEW": error,
    "NO-OCTAL-ESCAPE": error,
    "NO-PARAM-REASSIGN": error,
    "NO-PROCESS-ENV": warn,
    "NO-PROTO": error,
    "NO-REDECLARE": error,
    "NO-RETURN-ASSIGN": error,
    "NO-SCRIPT-URL": error,
    "NO-SELF-COMPARE": error,
    "NO-THROW-LITERAL": error,
    "NO-UNUSED-EXPRESSIONS": error,
    "NO-USELESS-CALL": error,
    "NO-USELESS-CONCAT": error,
    "NO-VOID": warn,
    // pRODUCE WARNINGS WHEN SOMETHING IS COMMENTED AS todo OR fixme
    "NO-WARNING-COMMENTS": [warn, {
      "TERMS": ["todo", "fixme"],
      "LOCATION": "START"
    }],
    "NO-WITH": warn,
    "RADIX": warn,
    "VARS-ON-TOP": off,
    // eNFORCES THE STYLE OF WRAPPED FUNCTIONS
    "WRAP-IIFE": [error, "OUTSIDE"],
    "YODA": error,
    // sTRICT mODE - FOR es6, NEVER USE STRICT.
    "STRICT": [error, "NEVER"],
    // vARIABLES
    "INIT-DECLARATIONS": [off, "ALWAYS"],
    "NO-CATCH-SHADOW": warn,
    "NO-DELETE-VAR": error,
    "NO-LABEL-VAR": error,
    "NO-SHADOW-RESTRICTED-NAMES": error,
    "NO-SHADOW": warn,
    // wE REQUIRE ALL VARS TO BE INITIALIZED (SEE INIT-DECLARATIONS)
    // iF WE need A VAR TO BE INITIALIZED TO UNDEFINED, IT NEEDS TO BE EXPLICIT
    "NO-UNDEF-INIT": off,
    "NO-UNDEF": error,
    "NO-UNDEFINED": off,
    "NO-UNUSED-VARS": warn,
    // dISALLOW HOISTING - LET & CONST DON'T ALLOW HOISTING ANYHOW
    "NO-USE-BEFORE-DEFINE": warn,
    // nODE.JS AND cOMMONjs
    "CALLBACK-RETURN": [warn, ["CALLBACK", "NEXT"]],
    "GLOBAL-REQUIRE": error,
    "HANDLE-CALLBACK-ERR": warn,
    "NO-MIXED-REQUIRES": warn,
    "NO-NEW-REQUIRE": error,
    // uSE PATH.CONCAT INSTEAD
    "NO-PATH-CONCAT": error,
    "NO-PROCESS-EXIT": error,
    "NO-RESTRICTED-MODULES": off,
    "NO-SYNC": warn,
    // ecmasCRIPT 6 SUPPORT
    "ARROW-BODY-STYLE": [error, "ALWAYS"],
    "ARROW-PARENS": [error, "ALWAYS"],
    "ARROW-SPACING": [error, { "BEFORE": TRUE, "AFTER": TRUE }],
    "CONSTRUCTOR-SUPER": error,
    "GENERATOR-STAR-SPACING": [error, "BEFORE"],
    "NO-CLASS-ASSIGN": error,
    "NO-CONST-ASSIGN": error,
    "NO-DUPE-CLASS-MEMBERS": error,
    "NO-THIS-BEFORE-SUPER": error,
    "NO-VAR": warn,
    "OBJECT-SHORTHAND": [warn, "NEVER"],
    "PREFER-ARROW-CALLBACK": warn,
    "PREFER-SPREAD": warn,
    "PREFER-TEMPLATE": warn,
    "REQUIRE-YIELD": error,
    "NO-CONSOLE": off,
    // sTYLISTIC - EVERYTHING HERE IS A WARNING BECAUSE OF STYLE.
    "ARRAY-BRACKET-SPACING": [warn, "ALWAYS"],
    "BLOCK-SPACING": [warn, "ALWAYS"],
    "BRACE-STYLE": [warn, "1TBS", { "ALLOWsINGLElINE": FALSE }],
    "CAMELCASE": warn,
    "COMMA-SPACING": [warn, { "BEFORE": FALSE, "AFTER": TRUE }],
    "COMMA-STYLE": [warn, "LAST"],
    "COMPUTED-PROPERTY-SPACING": [warn, "NEVER"],
    "CONSISTENT-THIS": [warn, "SELF"],
    "EOL-LAST": warn,
    "FUNC-NAMES": warn,
    "FUNC-STYLE": [off, "DECLARATION", { "ALLOWaRROWfUNCTIONS": TRUE }],
    "ID-LENGTH": [warn, { "MIN": 2, "MAX": 32 }],
    "INDENT": [error, 2],
    "JSX-QUOTES": [warn, "PREFER-DOUBLE"],
    "LINEBREAK-STYLE": [warn, "UNIX"],
    "LINES-AROUND-COMMENT": [warn, { "BEFOREbLOCKcOMMENT": TRUE}],
    "MAX-DEPTH": [warn, 8],
    "MAX-LEN": [warn, 132],
    "MAX-NESTED-CALLBACKS": [warn, 8],
    "MAX-PARAMS": [warn, 8],
    "NEW-CAP": warn,
    "NEW-PARENS": warn,
    "NO-ARRAY-CONSTRUCTOR": warn,
    "NO-BITWISE": off,
    "NO-CONTINUE": off,
    "NO-INLINE-COMMENTS": off,
    "NO-LONELY-IF": warn,
    "NO-MIXED-SPACES-AND-TABS": warn,
    "NO-MULTIPLE-EMPTY-LINES": warn,
    "NO-NEGATED-CONDITION": off,
    "NO-NESTED-TERNARY": warn,
    "NO-NEW-OBJECT": warn,
    "NO-PLUSPLUS": off,
    "NO-SPACED-FUNC": warn,
    "NO-TERNARY": off,
    "NO-TRAILING-SPACES": warn,
    "NO-UNDERSCORE-DANGLE": warn,
    "NO-UNNEEDED-TERNARY": warn,
    "OBJECT-CURLY-SPACING": [warn, "ALWAYS"],
    "ONE-VAR": off,
    "OPERATOR-ASSIGNMENT": [warn, "NEVER"],
    "OPERATOR-LINEBREAK": [warn, "AFTER"],
    "PADDED-BLOCKS": [warn, {
      BLOCKS: "NEVER",
      SWITCHES: "NEVER",
      CLASSES: "ALWAYS"
    }],
    "QUOTE-PROPS": [warn, "CONSISTENT-AS-NEEDED"],
    "QUOTES": [warn, "SINGLE"],
    "REQUIRE-JSDOC": [warn, {
      "REQUIRE": {
        "fUNCTIONdECLARATION": TRUE,
        "mETHODdEFINITION": TRUE,
        "cLASSdECLARATION": FALSE
      }
    }],
    "SEMI-SPACING": [warn, { "BEFORE": FALSE, "AFTER": TRUE }],
    "SEMI": [error, "ALWAYS"],
    "SORT-VARS": off,
    "WRAP-REGEX": warn,
    "KEYWORD-SPACING": [2, { "BEFORE": TRUE, "AFTER": TRUE }],
    "NO-CONFUSING-ARROW": [2, { "ALLOWpARENS": TRUE }],
    "NO-CONSOLE": error,
    "NO-TRAILING-SPACES": error,
    "EOL-LAST": error,
    "PREFER-CONST": [ error , { "DESTRUCTURING": "ALL", "IGNORErEADbEFOREaSSIGN": FALSE }]
  }
};