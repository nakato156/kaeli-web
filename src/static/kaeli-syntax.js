ace.define("ace/mode/mylanguage_highlight_rules", function(require, exports, module) {
    var oop = require("ace/lib/oop");
    var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;
  
    var MyLanguageHighlightRules = function() {
        var keywords = (
            "func|si|sino|para|mientras"
        );
        
        this.$rules = {
            "start": [
                // Comentarios
                {
                    token: "comment",
                    regex: "#.*$"
                },
                // Cadenas de texto
                {
                    token: "string",
                    regex: '".*?"'
                },
                {
                    token: "string",
                    regex: "'.*?'"
                },
                // Palabras clave y variables
                {
                    token: "keyword",
                    regex: "\\b(?:func|si|sino|para|mientras|retornar)\\b"
                },
                {
                    token: "variable",
                    regex: "(?!START;|END;)[a-zA-Z_][a-zA-Z0-9_]*\\b"
                },
                // START y END
                {
                    token: "punctuation.delimiter",
                    regex: /START;|END;/
                },
                // Funciones
                {
                    token: "support.function",
                    regex: "(?!START;|END;)[a-zA-Z_][a-zA-Z0-9_]*\\s*(?=\\()"
                },
                // Números
                {
                    token: "constant.numeric",
                    regex: /[+-]?\d+(\.\d+)?([eE][+-]?\d+)?\b/
                },
                // Operadores y puntuación
                {
                    token: "keyword.operator",
                    regex: /[\+\-\*\%\^\/\~\=]/
                },
                {
                    token: "punctuation.operator",
                    regex: /[\<\>\!\=\&\|\~]/,
                },
                {
                    token: "punctuation.delimiter",
                    regex: /START;/
                },
            ],
            "function_arguments": [
                {
                  token: "variable.parameter.function",
                  regex: /([a-zA-Z_][a-zA-Z0-9_]*)/,
                  next: "start"
                },
                {
                  token: "punctuation.operator",
                  regex: /,/
                },
                {
                  token: "text",
                  regex: /\s/
                },
                {
                  token: "punctuation.delimiter",
                  regex: /\)/,
                  next: "start"
                }
            ]
          };
        };
  
    oop.inherits(MyLanguageHighlightRules, TextHighlightRules);
    exports.MyLanguageHighlightRules = MyLanguageHighlightRules;
});
  
ace.define("ace/mode/kaeli", function(require, exports, module) {
    console.log("mylanguage");
    var oop = require("ace/lib/oop");
    var TextMode = require("ace/mode/text").Mode;
    var MyLanguageHighlightRules = require("ace/mode/mylanguage_highlight_rules").MyLanguageHighlightRules;
  
    var Mode = function() {
        this.HighlightRules = MyLanguageHighlightRules;
    };
    oop.inherits(Mode, TextMode);
  
    (function() {
        // Configura los comentarios y otros elementos de sintaxis de tu lenguaje personalizado aquí
        this.$id = "ace/mode/kaeli";
        this.lineCommentStart = "#";
        this.blockComment = {start: "/*", end: "*/"}
    }).call(Mode.prototype);
  
    exports.Mode = Mode;
});
