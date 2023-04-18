import textract

# Replace "image.jpg" with the path to your image file
text = textract.process("./tabular data image.jpg")

# Print the extracted text
print(text.decode("utf-8"))
