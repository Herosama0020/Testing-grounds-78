def test_ascii_to_decimal():
    # Prompt the user to enter an ASCII character
    ascii_char = input("Enter an ASCII character to test your knowledge: ")
    
    # Validate the input
    if len(ascii_char) != 1:
        print("Please enter a single character.")
        return
    
    # Convert the character to its decimal (ASCII) value
    ascii_value = ord(ascii_char)
    
    # Prompt the user to guess the decimal value
    user_guess = int(input(f"What do you think the decimal (ASCII) value of '{ascii_char}' is? "))
    
    # Check the user's guess
    if user_guess == ascii_value:
        print("Correct! 🎉")
    else:
        print(f"Oops! The correct decimal (ASCII) value of '{ascii_char}' is {ascii_value}.")

# Run the function
test_ascii_to_decimal()
