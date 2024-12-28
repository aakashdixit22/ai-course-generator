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
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
  