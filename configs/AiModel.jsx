const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
     export  const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate A course Tutoiral on Following Detail field as Course Name,Description,Along with ChapterName,about,Duration: Category:'Programming',Topic:'Python',Difficulty:Basic,Duration:1 hours,NoOfChapters:5, in JSON format\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"courseName\": \"Python Fundamentals for Beginners\",\n  \"description\": \"This course provides a comprehensive introduction to the Python programming language, designed for individuals with no prior programming experience. You will learn the core concepts of Python, enabling you to write basic programs and build a strong foundation for further learning.\",\n  \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"difficulty\": \"Basic\",\n  \"duration\": \"1 hour\",\n  \"noOfChapters\": 5,\n  \"chapters\": [\n    {\n      \"chapterName\": \"Chapter 1: Introduction to Python\",\n      \"about\": \"This chapter introduces the Python language, its history, and why it's a popular choice for beginners. We'll also cover setting up your development environment.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"chapterName\": \"Chapter 2: Variables and Data Types\",\n      \"about\": \"Learn about variables, how to declare them, and the fundamental data types in Python (integers, floats, strings, and booleans). We'll also explore basic operations with these types.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"chapterName\": \"Chapter 3: Input and Output\",\n      \"about\": \"Discover how to take input from users and display output to the console using Python's built-in functions. This chapter focuses on practical application.\",\n      \"duration\": \"10 minutes\"\n    },\n     {\n      \"chapterName\": \"Chapter 4: Basic Control Flow\",\n      \"about\": \"This chapter covers essential control flow structures such as conditional statements (if, elif, else) and loops (for and while). Learn how to control the flow of your programs.\",\n      \"duration\": \"15 minutes\"\n     },\n    {\n      \"chapterName\": \"Chapter 5: Putting it Together\",\n      \"about\": \"A short hands-on exercise to reinforce the learning. Includes a basic programming task that combines the concepts from the previous chapters to consolidate the knowledge gained.\",\n      \"duration\": \"15 minutes\"\n    }\n  ]\n}\n```\n"},
          ],
        },
      ],
    });

   export  const GenerateChapterContent_AI = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Explain the concept in detail on topic: c++, Chapter: Chapter 1: Getting Started with C++  in JSON format with list of array with field as title, explanation on a give chapter in detail,  Code Example (Code field in <precode> format) if applicable."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"chapter\": {\n    \"title\": \"Chapter 1: Getting Started with C++\",\n    \"sections\": [\n      {\n        \"title\": \"Introduction to C++\",\n        \"explanation\": \"C++ is a powerful, general-purpose programming language. It's known for its performance, flexibility, and ability to work closely with hardware. Developed as an extension of the C programming language, it adds object-oriented programming features, allowing for more structured and reusable code. Key features include: \\n\\n* **Performance:** C++ code compiles directly to machine code, resulting in fast execution speeds.\\n* **Object-Oriented Programming (OOP):** Supports concepts like classes, objects, inheritance, and polymorphism, allowing for modular and reusable code.\\n* **Low-level Access:** C++ allows for direct memory manipulation, useful for hardware interaction and performance-critical tasks.\\n* **Standard Library:** A rich library of functions and classes provides pre-built functionality for various tasks, reducing development time.\\n* **Cross-Platform:** C++ code can be compiled and run on many different operating systems with minor adjustments.\\n\\nC++ is used in various fields including game development, operating systems, high-performance applications, embedded systems, and more.\",\n        \"code_example\": null\n      },\n      {\n        \"title\": \"Setting up a C++ Development Environment\",\n        \"explanation\": \"Before writing C++ code, you need to set up a development environment. This typically involves: \\n\\n1. **Compiler:**  A compiler translates C++ code (source code) into machine-readable instructions. Popular compilers include GCC (GNU Compiler Collection), Clang, and Microsoft Visual C++.\\n2. **Text Editor or IDE:** You need a place to write your code. A simple text editor (like VS Code, Sublime Text, Notepad++) can be used, or a full-fledged Integrated Development Environment (IDE) (like Visual Studio, CLion, Eclipse).\\n3. **Build System (Optional):** For larger projects, build systems like Make, CMake, or Ninja can automate the compilation and linking process.\\n\\nThe basic workflow is: write code -> compile -> run.\",\n         \"code_example\": null\n      },\n      {\n        \"title\": \"A Simple C++ Program: Hello, World!\",\n        \"explanation\": \"Let's write a basic C++ program that prints \\\"Hello, World!\\\" to the console. This is a standard first program for beginners and demonstrates the fundamental structure of C++ code.\",\n         \"code_example\": {\n            \"code\": \"<precode>#include <iostream>\\n\\nint main() {\\n  std::cout << \\\"Hello, World!\\\" << std::endl;\\n  return 0;\\n}</precode>\"\n        }\n      },\n       {\n        \"title\": \"Dissecting the Hello, World! Program\",\n        \"explanation\": \"Let's break down the 'Hello, World!' program:\\n\\n*   `#include <iostream>`: This line includes the iostream library, which provides input/output functionalities like `std::cout`.\\n*   `int main() { ... }`: This defines the main function, the entry point of the program. Every C++ program must have a `main` function. `int` indicates that the function returns an integer value.\\n*   `std::cout << \\\"Hello, World!\\\" << std::endl;`: This line uses `std::cout` (from the iostream library) to print the string \\\"Hello, World!\\\" to the console. `std::endl` inserts a newline character, moving the cursor to the next line.\\n*   `return 0;`: This line indicates that the `main` function has completed successfully and returns the value 0 to the operating system.\",\n        \"code_example\": null\n      },\n      {\n        \"title\": \"Compilation and Execution\",\n         \"explanation\":\"To compile the code, use a compiler in the command line. For example, using g++:\\n ```bash\\ng++ hello.cpp -o hello\\n```\\nThis compiles the 'hello.cpp' file and creates an executable file called 'hello' (or 'hello.exe' on Windows). To execute the compiled program:\\n```bash\\n./hello  # On Linux/macOS\\nhello.exe # On Windows\\n```\\nThis will print 'Hello, World!' to the console.\",\n        \"code_example\":null\n      },\n     {\n        \"title\": \"Comments in C++\",\n        \"explanation\": \"Comments are notes in the code that are ignored by the compiler. They're used to explain the code and enhance readability. C++ supports two types of comments: \\n\\n*  **Single-line comments:** Start with `//` and continue until the end of the line. \\n*  **Multi-line comments:** Start with `/*` and end with `*/`. Everything in between is considered a comment.\",\n        \"code_example\": {\n           \"code\": \"<precode>#include <iostream>\\n\\nint main() {\\n  // This is a single-line comment.\\n  std::cout << \\\"Hello, World!\\\" << std::endl; /* This is a\\n                                              multi-line\\n                                               comment.*/\\n  return 0;\\n}\\n</precode>\"\n        }\n     },\n     {\n         \"title\": \"Basic Input using `std::cin`\",\n         \"explanation\": \"C++ allows you to take input from the user using `std::cin` (from the iostream library). The `>>` operator is used to extract input from the standard input stream (usually the keyboard) and store it in a variable.\",\n         \"code_example\": {\n          \"code\": \"<precode>#include <iostream>\\n\\nint main() {\\n    int number;\\n    std::cout << \\\"Enter an integer: \\\";\\n    std::cin >> number;\\n    std::cout << \\\"You entered: \\\" << number << std::endl;\\n    return 0;\\n}\\n</precode>\"\n         }\n     }\n\n    ]\n  }\n}\n```\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
  