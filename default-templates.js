const allowedProgrammingLanguages = ['c', 'cpp', 'csharp', 'java', 'php', 'python2', 'python3'];

templates = {
    'c': `#include <stdio.h>

int main() {
    // Write C code here
    printf("Try Our compiler");
        
    return 0;
}`,

    'cpp': `#include <iostream>

int main() {
    // Write C++ code here
    std::cout << "Try Our compiler";
        
    return 0;
}`,

    'csharp': `using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
        // Write C# code here
        Console.WriteLine("Try Our compiler");
    }
}`,

    'java': `public class HelloWorld {
    public static void main(String[] args) {
        // Write java code here
        System.out.println("Try Our compiler");
    }
}`,

    'php': `<?php
    // Write php code here
    echo "Try Our compiler";
?>`,

    'python2': `print("Try Our compiler")`,
    'python3': `print("Try Our compiler")`,
}