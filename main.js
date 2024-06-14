#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from "chalk";
console.log(chalk.green("Hello Dear\nWelcome to the TypeScript Quiz Game\nIt is a mcqs based test for your TypeScript preparation"));
console.log();
console.log("First of all tell us");
console.log();
let name = await inquirer.prompt([
    {
        name: "user",
        type: "input",
        message: "What is your name?"
    }
]);
console.log();
let user = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: `Ok ${name.user}, let's start the quiz game (press enter)`,
    }
]);
console.log();
let quest = await inquirer.prompt([
    {
        name: "ask",
        type: "list",
        message: "What is TypeScript?",
        choices: [
            "- A) A framework for building web applications",
            "- B) A superset of JavaScript that adds static typing",
            "- C) A library for creating user interfaces",
            "- D) A database query language"
        ]
    }
]);
if (quest.ask === "- B) A superset of JavaScript that adds static typing") {
    console.log(chalk.green(`${name.user} you are correct!`));
    console.log();
    let quest2 = await inquirer.prompt([
        {
            name: "ask2",
            type: "list",
            message: "Which command is used to compile a TypeScript file?",
            choices: [
                "- A) tsc",
                "- B) ts",
                "- C) compile-ts",
                "- D) transpile-ts"
            ]
        }
    ]);
    if (quest2.ask2 === "- A) tsc") {
        console.log(chalk.green(`${name.user} you are correct!`));
        console.log();
        let quest3 = await inquirer.prompt([
            {
                name: "ask3",
                type: "list",
                message: "How do you declare a variable with a specific type in TypeScript?",
                choices: [
                    "- A) let variable = 'value'",
                    "- B) let variable: type = value",
                    "- C) let variable: type",
                    "- D) let variable: type;"
                ]
            }
        ]);
        if (quest3.ask3 === "- B) let variable: type = value") {
            console.log(chalk.green(`${name.user} you are correct!`));
            console.log();
            let quest4 = await inquirer.prompt([
                {
                    name: "ask4",
                    type: "list",
                    message: "What is the default type of a variable in TypeScript if the type is not specified?",
                    choices: [
                        "- A) `any`",
                        "- B) `string`",
                        "- C) `number`",
                        "- D) `undefined`"
                    ]
                }
            ]);
            if (quest4.ask4 === "- A) `any`") {
                console.log(chalk.green(`${name.user} you are correct!`));
                console.log();
                let quest5 = await inquirer.prompt([
                    {
                        name: "ask5",
                        type: "list",
                        message: "Which of the following is not a TypeScript data type?",
                        choices: [
                            "- A) `boolean`",
                            "- B) `string`",
                            "- C) `object`",
                            "- D) `tuple`"
                        ]
                    }
                ]);
                if (quest5.ask5 === "- C) `object`") {
                    console.log(chalk.green(`${name.user} you are correct!`));
                    console.log();
                    let quest6 = await inquirer.prompt([
                        {
                            name: "ask6",
                            type: "list",
                            message: "Which keyword is used to define an interface in TypeScript?",
                            choices: [
                                "- A) `interface`",
                                "- B) `class`",
                                "- C) `struct`",
                                "- D) `type`"
                            ]
                        }
                    ]);
                    if (quest6.ask6 === "- A) `interface`") {
                        console.log(chalk.green(`${name.user} you are correct!`));
                        console.log();
                        let quest7 = await inquirer.prompt([
                            {
                                name: "ask7",
                                type: "list",
                                message: "Which of the following methods can modify the contents of an array?",
                                choices: [
                                    "- A) `map()`",
                                    "- B) `forEach()`",
                                    "- C) `reduce()`",
                                    "- D) `splice()`"
                                ]
                            }
                        ]);
                        if (quest7.ask7 === "- D) `splice()`") {
                            console.log(chalk.green(`${name.user} you are correct!`));
                            console.log();
                            let quest8 = await inquirer.prompt([
                                {
                                    name: "ask8",
                                    type: "list",
                                    message: "How do you import a specific member from a module in TypeScript?",
                                    choices: [
                                        "- A) `import member from 'module'`",
                                        "- B) `import { member } from 'module'`",
                                        "- C) `import 'module'.member`",
                                        "- D) `import member of 'module'`"
                                    ]
                                }
                            ]);
                            if (quest8.ask8 === "- B) `import { member } from 'module'`") {
                                console.log(chalk.green(`${name.user} you are correct!`));
                                console.log();
                                let quest9 = await inquirer.prompt([
                                    {
                                        name: "ask9",
                                        type: "list",
                                        message: "How do you define a type alias in TypeScript?",
                                        choices: [
                                            "- A) `define type alias = definition;`",
                                            "- B) `type alias = definition;`",
                                            "- C) `alias type = definition;`",
                                            "- D) `alias = type definition;`"
                                        ]
                                    }
                                ]);
                                if (quest9.ask9 === "- B) `type alias = definition;`") {
                                    console.log(chalk.green(`${name.user} you are correct!`));
                                    console.log();
                                    let quest10 = await inquirer.prompt([
                                        {
                                            name: "ask10",
                                            type: "list",
                                            message: "Which TypeScript type would you use for a variable that can hold either a string or a number?",
                                            choices: [
                                                "- A) `string or number`",
                                                "- B) `string && number`",
                                                "- C) `string | number`",
                                                "- D) `string, number`"
                                            ]
                                        }
                                    ]);
                                    if (quest10.ask10 === "- C) `string | number`") {
                                        console.log(chalk.green(`${name.user} you are correct!`));
                                        console.log();
                                        console.log(chalk.greenBright("Congratulations! you got 10/10 answer correct"));
                                        console.log();
                                    }
                                    else {
                                        console.log(chalk.red("You are wrong! Please try again"));
                                    }
                                }
                                else {
                                    console.log(chalk.red("You are wrong! Please try again"));
                                }
                            }
                            else {
                                console.log(chalk.red("You are wrong! Please try again"));
                            }
                        }
                        else {
                            console.log(chalk.red("You are wrong! Please try again"));
                        }
                    }
                    else {
                        console.log(chalk.red("You are wrong! Please try again"));
                    }
                }
                else {
                    console.log(chalk.red("You are wrong! Please try again"));
                }
            }
            else {
                console.log(chalk.red("You are wrong! Please try again"));
            }
        }
        else {
            console.log(chalk.red("You are wrong! Please try again"));
        }
    }
    else {
        console.log(chalk.red("You are wrong! Please try again"));
    }
}
else {
    console.log(chalk.red("You are wrong! Please try again"));
}
