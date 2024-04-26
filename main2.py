def main():
    n = int(input("Enter the number of elements: "))
    
    # Check if the number of elements is valid
    if n <= 0:
        print("Invalid input. Number of elements must be positive.")
        return
    
    numbers = []  # List to store the numbers
    
    print("Enter", n, "numbers:")
    for i in range(n):
        num = float(input("Enter number {}: ".format(i + 1)))
        numbers.append(num)
    
    # Calculate the average
    average = sum(numbers) / n
    
    # Display the result
    print("Average of entered numbers =", average)

if __name__ == "__main__":
    main()
