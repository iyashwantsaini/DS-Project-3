const languages = [
  {
    language: "bash",
    version: "5.1.0",
    aliases: ["sh"],
  },
  {
    language: "brainfuck",
    version: "2.7.3",
    aliases: ["bf"],
  },
  {
    language: "cjam",
    version: "0.6.5",
    aliases: [],
  },
  {
    language: "clojure",
    version: "1.10.3",
    aliases: ["clojure", "clj"],
  },
  {
    language: "cobol",
    version: "3.1.2",
    aliases: ["cob"],
  },
  {
    language: "coffeescript",
    version: "2.5.1",
    aliases: ["coffeescript", "coffee"],
  },
  {
    language: "cow",
    version: "1.0.0",
    aliases: ["cow"],
  },
  {
    language: "crystal",
    version: "0.36.1",
    aliases: ["crystal", "cr"],
  },
  {
    language: "dart",
    version: "2.12.1",
    aliases: [],
  },
  {
    language: "dash",
    version: "0.5.11",
    aliases: ["dash"],
  },
  {
    language: "typescript",
    version: "1.7.5",
    aliases: ["deno-ts", "deno"],
    runtime: "deno",
    pretext: `console.log("hello world!")`,
    extension: "ts",
  },
  {
    language: "javascript",
    version: "1.7.5",
    aliases: ["deno-js"],
    runtime: "deno",
    pretext: `console.log("hello world!")`,
    extension: "js",
  },
  {
    language: "dotnet",
    version: "5.0.201",
    aliases: ["cs", "csharp"],
  },
  {
    language: "dragon",
    version: "1.9.8",
    aliases: [],
  },
  {
    language: "elixir",
    version: "1.11.3",
    aliases: ["elixir", "exs"],
  },
  {
    language: "emacs",
    version: "27.1.0",
    aliases: ["emacs", "el", "elisp"],
  },
  {
    language: "erlang",
    version: "23.0.0",
    aliases: ["erlang", "erl", "escript"],
  },
  {
    language: "awk",
    version: "5.1.0",
    aliases: ["gawk"],
    runtime: "gawk",
  },
  {
    language: "c",
    version: "10.2.0",
    aliases: ["gcc"],
    runtime: "gcc",
    pretext: `#include <stdio.h>
    int main() {
       printf("Hello, World!");
       return 0;
    }`,
    extension: "c",
  },
  {
    language: "c++",
    version: "10.2.0",
    aliases: ["cpp", "g++"],
    runtime: "gcc",
    pretext: `#include <bits/stdc++.h>
    using namespace std;
    int main() {
       cout << "Hello, World!" << endl;
       return 0;
    }`,
    extension: "cpp",
  },
  {
    language: "d",
    version: "10.2.0",
    aliases: ["gdc"],
    runtime: "gcc",
  },
  {
    language: "fortran",
    version: "10.2.0",
    aliases: ["fortran", "f90"],
    runtime: "gcc",
  },
  {
    language: "go",
    version: "1.16.2",
    aliases: ["go", "golang"],
  },
  {
    language: "golfscript",
    version: "1.0.0",
    aliases: ["golfscript"],
  },
  {
    language: "groovy",
    version: "3.0.7",
    aliases: ["groovy", "gvy"],
  },
  {
    language: "haskell",
    version: "9.0.1",
    aliases: ["haskell", "hs"],
  },
  {
    language: "java",
    version: "15.0.2",
    aliases: [],
    extension: "java",
    pretext: `public class HelloWorld {

      public static void main(String[] args) {
          // Prints "Hello, World" to the terminal window.
          System.out.println("Hello, World");
      }
  
  }`,
  },
  {
    language: "jelly",
    version: "0.1.31",
    aliases: [],
  },
  {
    language: "julia",
    version: "1.6.1",
    aliases: ["jl"],
  },
  {
    language: "kotlin",
    version: "1.4.31",
    aliases: ["kt"],
  },
  {
    language: "lisp",
    version: "2.1.2",
    aliases: ["lisp", "cl", "sbcl", "commonlisp"],
  },
  {
    language: "lolcode",
    version: "0.11.2",
    aliases: ["lol", "lci"],
  },
  {
    language: "lua",
    version: "5.4.2",
    aliases: ["lua"],
  },
  {
    language: "mono",
    version: "6.12.0",
    aliases: ["csharp", "cs"],
  },
  {
    language: "nasm",
    version: "2.15.5",
    aliases: ["asm", "nasm32"],
    runtime: "nasm",
  },
  {
    language: "nasm64",
    version: "2.15.5",
    aliases: ["asm64"],
    runtime: "nasm",
  },
  {
    language: "nim",
    version: "1.4.4",
    aliases: ["nim"],
  },
  {
    language: "javascript",
    version: "16.3.0",
    aliases: ["node-javascript", "node-js", "javascript", "js"],
    runtime: "node",
    pretext: `console.log("hello world!")`,
    extension: "js",
  },
  {
    language: "ocaml",
    version: "4.12.0",
    aliases: ["ocaml", "ml"],
  },
  {
    language: "octave",
    version: "6.2.0",
    aliases: ["matlab", "m"],
  },
  {
    language: "osabie",
    version: "1.0.1",
    aliases: ["osabie", "05AB1E", "usable"],
  },
  {
    language: "paradoc",
    version: "0.6.0",
    aliases: ["paradoc"],
  },
  {
    language: "pascal",
    version: "3.2.0",
    aliases: ["pascal", "freepascal", "pp", "pas"],
  },
  {
    language: "perl",
    version: "5.26.1",
    aliases: ["perl", "pl"],
  },
  {
    language: "php",
    version: "8.0.2",
    aliases: ["php8", "html"],
  },
  {
    language: "ponylang",
    version: "0.39.0",
    aliases: ["pony", "ponyc"],
  },
  {
    language: "prolog",
    version: "8.2.4",
    aliases: ["prolog", "plg"],
  },
  {
    language: "pure",
    version: "0.68.0",
    aliases: [],
  },
  {
    language: "pyth",
    version: "1.0.0",
    aliases: ["pyth"],
  },
  {
    language: "python2",
    version: "2.7.18",
    aliases: ["py2", "python2"],
    pretext: `print "hello world!"`,
    extension: "py",
  },
  {
    language: "python",
    version: "3.9.4",
    aliases: ["py", "py3", "python3"],
    pretext: `print("hello world!")`,
    extension: "py",
  },
  {
    language: "raku",
    version: "6.100.0",
    aliases: ["raku", "rakudo", "perl6", "p6", "pl6"],
  },
  {
    language: "rockstar",
    version: "1.0.0",
    aliases: ["rock", "rocky"],
  },
  {
    language: "ruby",
    version: "3.0.1",
    aliases: ["ruby3", "rb"],
  },
  {
    language: "rust",
    version: "1.50.0",
    aliases: ["rs"],
  },
  {
    language: "scala",
    version: "3.0.0",
    aliases: ["sc"],
  },
  {
    language: "swift",
    version: "5.3.3",
    aliases: ["swift"],
  },
  {
    language: "typescript",
    version: "4.2.3",
    aliases: ["ts", "node-ts", "tsc"],
    pretext: `console.log("hello world!")`,
    extension: "js",
  },
  {
    language: "vlang",
    version: "0.1.13",
    aliases: ["v"],
  },
  {
    language: "yeethon",
    version: "3.10.0",
    aliases: ["yeethon3"],
  },
  {
    language: "zig",
    version: "0.8.0",
    aliases: ["zig"],
  },
];

export default languages;
